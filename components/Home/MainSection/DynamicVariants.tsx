"use client";

import OrangeButton from "@/components/OrangeButton";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { useState } from "react";
import DynamicVariantsSelector from "./DynamicVariantsSelector";
import HyperLinks from "./HyperLinks";

type Props = {
  promise: Promise<Product[]>;
};

const DynamicVariants = async ({ promise }: Props) => {
  const [numberOfItems, setNumberOfItems] = useState(2);

  const pathname = usePathname().split("/");
  const searchParams = useSearchParams();
  const markaQuery = searchParams.get("marka");
  const sizeQuery = searchParams.get("size");

  const products = await promise;

  const limitProductsIds = products[0].id.slice(0, numberOfItems);

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
        markaQ={markaQuery || ""}
        sizeQ={sizeQuery || ""}
      />
      <div className="w-full flex flex-col">
        <div className="w-full h-[70px] hidden md:grid grid-cols-4 px-4 b border border-light-gray rounded-t-md">
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
        </div>
        {products.map((product) =>
          product.id.map((ids) =>
            product.ENGSize.map((sizes) =>
              product.subLabel.map(
                (label) =>
                  ((ids === markaQuery && sizes === sizeQuery) ||
                    (ids === markaQuery && !sizeQuery) ||
                    (!markaQuery && sizes === sizeQuery)) && (
                    <Link
                      href={`/${pathname[1] || "moscow"}/catalog/${
                        product.type
                      }/${product.category}/${product.variety}/${ids}/${sizes}`}
                    >
                      <div className="flex flex-col md:flex-row w-full justify-center md:justify-between items-center h-[200px] py-4 md:py-0 md:h-[120px] border border-light-gray px-4 lg:hover:shadow-md transition">
                        <h1 className="text-lg hidden md:block">{label}</h1>
                        <h2 className="text-lg hidden md:block">{ids}</h2>
                        <h3 className="text-lg hidden md:block">
                          {sizes.replace("mm", " мм")}
                        </h3>
                        <div className="hidden md:block">
                          <OrangeButton label={"Подробнее"} mark />
                        </div>
                        <div className="md:hidden w-full h-full flex flex-col justify-between items-start">
                          <div className="flex gap-1">
                            <h1 className="text-lg">
                              {label} {ids} {sizes.replace("mm", " мм")}
                            </h1>
                          </div>
                          <div>
                            <h1 className="text-md text-black/50">{ids}</h1>
                            <h2 className="text-md text-black/50">
                              {sizes.replace("mm", " мм")}
                            </h2>
                          </div>
                          <OrangeButton label={"Подробнее"} mark full />
                        </div>
                      </div>
                    </Link>
                  )
              )
            )
          )
        )}
        {products.map((product) =>
          limitProductsIds.map((ids) =>
            product.ENGSize.map(
              (sizes) =>
                !markaQuery &&
                !sizeQuery &&
                product.subLabel.map((label) => (
                  <Link
                    href={`/${pathname[1] || "moscow"}/catalog/${
                      product.type
                    }/${product.category}/${
                      product.variety
                    }/${ids}/${sizes}?label=${label}`}
                  >
                    <div className="flex flex-col md:flex-row w-full justify-center md:justify-between items-center h-[200px] py-4 md:py-0 md:h-[120px] border border-light-gray px-4 lg:hover:shadow-md transition">
                      <h1 className="text-lg hidden md:block w-[250px]">
                        {label}
                      </h1>
                      <h2 className="text-lg hidden md:block">{ids}</h2>
                      <h3 className="text-lg hidden md:block">
                        {sizes.replace("mm", " мм")}
                      </h3>
                      <div className="hidden md:block">
                        <OrangeButton label={"Подробнее"} mark />
                      </div>
                      <div className="md:hidden w-full h-full flex flex-col justify-between items-start">
                        <div className="flex gap-1">
                          <h1 className="text-lg">{product.subLabel}</h1>
                          <h2 className="text-lg">{ids}</h2>
                          <h3 className="text-lg">
                            {sizes.replace("mm", " мм")}
                          </h3>
                        </div>
                        <div>
                          <h1 className="text-md text-black/50">{ids}</h1>
                          <h2 className="text-md text-black/50">
                            {sizes.replace("mm", " мм")}
                          </h2>
                        </div>
                        <OrangeButton label={"Подробнее"} mark full />
                      </div>
                    </div>
                  </Link>
                ))
            )
          )
        )}
      </div>
      {/* {products[0].ENGSize.length > 10 ? (
        <div onClick={() => setNumberOfItems((event) => event + 1)}>
          <OrangeButton label="Загрузить больше" />
        </div>
      ) : (
        <div className="cursor-not-allowed px-4 py-2 bg-light-gray text-black/50 rounded-sm flex justify-center items-center">
          Загрузить больше
        </div>
      )} */}
    </div>
  );
};

export default DynamicVariants;
