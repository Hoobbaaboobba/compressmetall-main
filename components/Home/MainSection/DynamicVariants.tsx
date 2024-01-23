"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useState } from "react";
import DynamicVariantsSelector from "./DynamicVariantsSelector";
import HyperLinks from "./HyperLinks";
import { Button } from "@/components/ui/button";
import DynamicVariantsComponent from "./DynamicVariantsComponent";

type Props = {
  promise: Promise<Product[]>;
};

const DynamicVariants = async ({ promise }: Props) => {
  const [limit, setLimit] = useState<number>(5);
  const pathname = usePathname().split("/");
  const searchParams = useSearchParams();
  const markaQuery = searchParams.get("marka") || "";
  const sizeQuery = searchParams.get("size") || "";
  const secondSizeQuery = searchParams.get("secondsize") || "";

  const products = await promise;

  const limitProductsIds = products[0].id.slice(0, limit);
  const limitProductsSizes = products[0].ENGSize.slice(0, limit);
  const limitProductsLabels = products[0].subLabel.slice(0, 2);

  return (
    <div className="flex flex-col w-full justify-center items-center gap-6 py-6 px-4">
      <div className="w-full mb-4 flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold text-black text-center xl:text-start">
          <h1>{products[0].subLabel[0]}</h1>
        </h1>
        <div className="bg-black h-[5px] w-[80px] mt-4"></div>
      </div>
      <HyperLinks
        categoryTitle={products[0].metaType}
        variantTitle={products[0].subLabel}
        lastVariant
      />
      <DynamicVariantsSelector
        products={products}
        markaQ={markaQuery}
        sizeQ={sizeQuery}
        secondSizeQ={secondSizeQuery}
      />
      <div className="w-full flex flex-col">
        <div
          className={`w-full h-[70px] hidden md:grid ${
            products[0].secondFilter ? "grid-cols-5" : "grid-cols-4"
          } px-4 b border border-light-gray rounded-t-md`}
        >
          <div className="w-full h-full flex justify-center items-center">
            <h1 className="text-center uppercase text-sm font-bold opacity-60">
              Наименование
            </h1>
          </div>
          <div className="w-full h-full flex justify-center items-center">
            <h2 className="text-center uppercase text-sm font-bold opacity-60">
              Марка
            </h2>
          </div>
          <div className="w-full h-full flex justify-center items-center">
            <h3 className="text-center uppercase text-sm font-bold opacity-60">
              {products[0].typeOfSize}
            </h3>
          </div>
          {products[0].secondFilter && (
            <div className="w-full h-full flex justify-center items-center">
              <h3 className="text-center uppercase text-sm font-bold opacity-60">
                {products[0].secondFilter}
              </h3>
            </div>
          )}
        </div>
        {products.map((product) =>
          product.id.map((ids) =>
            product.ENGSize.map((sizes) =>
              product.subLabel.map(
                (label) =>
                  ((ids === markaQuery && sizes === sizeQuery) ||
                    (ids === markaQuery && !sizeQuery) ||
                    (!markaQuery && sizes === sizeQuery)) && (
                    <DynamicVariantsComponent
                      ids={ids}
                      pathname={pathname[0] || "moscow"}
                      productType={product.type}
                      productCategory={product.category}
                      productVariety={product.variety}
                      label={label}
                      sizes={sizes}
                      products={products}
                    />
                  )
              )
            )
          )
        )}
        {products[0].secondFilter &&
          products.map((product) =>
            product.id.map((ids) =>
              product.ENGSize.map((sizes) =>
                product.subLabel.map((label) =>
                  product.secondSize?.map(
                    (secondSize) =>
                      ((ids === markaQuery &&
                        sizes === sizeQuery &&
                        secondSize === secondSizeQuery) ||
                        (ids === markaQuery &&
                          !sizeQuery &&
                          !secondSizeQuery) ||
                        (!markaQuery &&
                          sizes === sizeQuery &&
                          !secondSizeQuery) ||
                        (!markaQuery &&
                          !sizeQuery &&
                          secondSize === secondSizeQuery) ||
                        (ids === markaQuery &&
                          sizes === sizeQuery &&
                          !secondSizeQuery) ||
                        (!markaQuery &&
                          sizes === sizeQuery &&
                          secondSize === secondSizeQuery) ||
                        (ids === markaQuery &&
                          !sizeQuery &&
                          secondSize === secondSizeQuery)) && (
                        <DynamicVariantsComponent
                          ids={ids}
                          pathname={pathname[0] || "moscow"}
                          productType={product.type}
                          productCategory={product.category}
                          productVariety={product.variety}
                          label={label}
                          sizes={sizes}
                          products={products}
                          secondSize={secondSize}
                        />
                      )
                  )
                )
              )
            )
          )}
        {products.map((product) =>
          limitProductsLabels.map((label) =>
            limitProductsSizes.map(
              (sizes) =>
                !markaQuery &&
                !sizeQuery &&
                !secondSizeQuery &&
                limitProductsIds.map((ids) =>
                  product.secondSize ? (
                    product.secondSize.map((secondSize) => (
                      <DynamicVariantsComponent
                        ids={ids}
                        pathname={pathname[0] || "moscow"}
                        productType={product.type}
                        productCategory={product.category}
                        productVariety={product.variety}
                        label={label}
                        sizes={sizes}
                        products={products}
                        secondSize={secondSize}
                      />
                    ))
                  ) : (
                    <DynamicVariantsComponent
                      ids={ids}
                      pathname={pathname[0] || "moscow"}
                      productType={product.type}
                      productCategory={product.category}
                      productVariety={product.variety}
                      label={label}
                      sizes={sizes}
                      products={products}
                    />
                  )
                )
            )
          )
        )}
      </div>
      <Button onClick={() => setLimit((event) => event + 5)}>
        Загрузить больше
      </Button>
    </div>
  );
};

export default DynamicVariants;
