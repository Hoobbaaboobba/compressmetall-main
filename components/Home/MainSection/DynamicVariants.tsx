"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import DynamicVariantsSelector from "./DynamicVariantsSelector";
import HyperLinks from "./HyperLinks";
import { Button } from "@/components/ui/button";
import DynamicVariantsComponent from "./DynamicVariantsComponent";
import { getProducts } from "@/actions/getProducts";
import { Product } from "@prisma/client";

interface ParamsProps {
  params: {
    type: string;
    category: string;
    variant: string;
    id: string;
    size: string;
  };
}

const DynamicVariants = async ({ params }: ParamsProps) => {
  const [limit, setLimit] = useState<number>(5);
  const pathname = usePathname().split("/");
  const searchParams = useSearchParams();
  const markaQuery = searchParams.get("marka") || "";
  const sizeQuery = searchParams.get("size") || "";
  const secondSizeQuery = searchParams.get("secondsize") || "";

  const products: Product[] = await getProducts(
    params.type,
    params.category,
    params.variant
  );

  const limitProductsIds = products[0].marks.slice(0, limit);
  const limitProductsSizes = products[0].sizes.slice(0, limit);
  const limitProductsLabels = products[0].label.slice(0, 2);

  return (
    <div className="flex flex-col w-full justify-center items-center gap-6 py-6 px-4">
      <div className="w-full mb-4 flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold text-black text-center xl:text-start">
          <h1>{products[0].label[0]}</h1>
        </h1>
        <div className="bg-black h-[5px] w-[80px] mt-4"></div>
      </div>
      <HyperLinks
        categoryTitle={products[0].pageTitle}
        variantTitle={products[0].label}
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
            products[0].secondTypeOfSize ? "grid-cols-5" : "grid-cols-4"
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
              {products[0].firstTypeOfSize}
            </h3>
          </div>
          {products[0].secondTypeOfSize && (
            <div className="w-full h-full flex justify-center items-center">
              <h3 className="text-center uppercase text-sm font-bold opacity-60">
                {products[0].secondTypeOfSize}
              </h3>
            </div>
          )}
        </div>
        {products.map((product) =>
          product.marks.map((ids) =>
            product.sizes.map((sizes) =>
              product.label.map(
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
        {products[0].secondTypeOfSize &&
          products.map((product) =>
            product.marks.map((ids) =>
              product.sizes.map((sizes) =>
                product.label.map((label) =>
                  product.secondSizes?.map(
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
                  product.secondSizes ? (
                    product.secondSizes.map((secondSize) => (
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
