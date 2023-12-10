"use client";

import OrangeButton from "@/components/OrangeButton";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import DynamicVariantsSelector from "./DynamicVariantsSelector";
import HyperLinks from "./HyperLinks";

type Props = {
  promise: Promise<Product[]>;
};

const DynamicVariants = async ({ promise }: Props) => {
  const pathname = usePathname().split("/");
  const searchParams = useSearchParams();
  const markaQuery = searchParams.get("marka") || "";
  const sizeQuery = searchParams.get("size") || "";
  const secondSizeQuery = searchParams.get("secondsize") || "";

  const products = await promise;

  const limitProductsIds = products[0].id.slice(0, products[0].id.length);
  const limitProductsSizes = products[0].ENGSize.slice(0, 10);
  const limitProductsLabels = products[0].subLabel.slice(0, 5);

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
                    <Link
                      href={`/${pathname[1] || "moscow"}/catalog/${
                        product.type
                      }/${product.category}/${
                        product.variety
                      }/${ids}/${sizes}?label=${label}`}
                    >
                      <div className="flex flex-col md:flex-row w-full justify-center md:justify-between items-center h-[200px] py-4 md:py-0 md:h-[120px] border border-light-gray px-4 lg:hover:shadow-md transition">
                        <div className="grid grid-cols-3 w-full">
                          <h1 className="text-lg hidden md:block w-[350px]">
                            {label}
                          </h1>
                          <h2 className="text-lg hidden md:block px-16">
                            {ids}
                          </h2>
                          <h3 className="text-lg hidden md:block">
                            {sizes.replace("mm", " мм")}
                          </h3>
                        </div>
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
        {products[0].secondFilter &&
          products.map((product) =>
            limitProductsIds.map((ids) =>
              limitProductsSizes.map((sizes) =>
                limitProductsLabels.map((label) =>
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
                        <Link
                          key={ids}
                          href={`/${pathname[1] || "moscow"}/catalog/${
                            product.type
                          }/${product.category}/${
                            product.variety
                          }/${ids}/${sizes}/label=${label}`}
                        >
                          <div className="flex flex-col md:flex-row w-full justify-center md:justify-between items-center h-[200px] py-4 md:py-0 md:h-[120px] border border-light-gray px-4 lg:hover:shadow-md transition">
                            <div
                              className={`grid ${
                                products[0].secondFilter
                                  ? "grid-cols-4"
                                  : "grid-cols-3"
                              } w-full`}
                            >
                              <h1 className="text-lg hidden md:block w-[350px]">
                                {label}
                              </h1>
                              <h2 className="text-lg hidden md:block px-16">
                                {ids}
                              </h2>
                              <h3 className="text-lg hidden md:block">
                                {sizes.replace("mm", " мм")}
                              </h3>
                              {product.secondFilter && (
                                <h3 className="text-lg hidden md:block">
                                  {secondSize.replace("mm", " мм")}
                                </h3>
                              )}
                            </div>
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
            )
          )}
        {products.map((product) =>
          limitProductsIds.map((ids) =>
            limitProductsSizes.map(
              (sizes) =>
                !markaQuery &&
                !sizeQuery &&
                !secondSizeQuery &&
                limitProductsLabels.map((label) =>
                  product.secondSize ? (
                    product.secondSize.map((secondSize) => (
                      <Link
                        key={ids}
                        href={`/${pathname[1] || "moscow"}/catalog/${
                          product.type
                        }/${product.category}/${
                          product.variety
                        }/${ids}/${sizes}/label=${label}`}
                      >
                        <div className="flex flex-col md:flex-row w-full justify-center md:justify-between items-center h-[200px] py-4 md:py-0 md:h-[120px] border border-light-gray px-4 lg:hover:shadow-md transition">
                          <div
                            className={`grid ${
                              products[0].secondFilter
                                ? "grid-cols-4"
                                : "grid-cols-3"
                            } w-full`}
                          >
                            <h1 className="text-lg hidden md:block w-[350px]">
                              {label}
                            </h1>
                            <h2 className="text-lg hidden md:block px-16">
                              {ids}
                            </h2>
                            <h3 className="text-lg hidden md:block">
                              {sizes.replace("mm", " мм")}
                            </h3>
                            {product.secondFilter && (
                              <h3 className="text-lg hidden md:block">
                                {secondSize.replace("mm", " мм")}
                              </h3>
                            )}
                          </div>
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
                    ))
                  ) : (
                    <Link
                      key={ids}
                      href={`/${pathname[1] || "moscow"}/catalog/${
                        product.type
                      }/${product.category}/${
                        product.variety
                      }/${ids}/${sizes}/label=${label}`}
                    >
                      <div className="flex flex-col md:flex-row w-full justify-center md:justify-between items-center h-[200px] py-4 md:py-0 md:h-[120px] border border-light-gray px-4 lg:hover:shadow-md transition">
                        <div
                          className={`grid ${
                            products[0].secondFilter
                              ? "grid-cols-4"
                              : "grid-cols-3"
                          } w-full`}
                        >
                          <h1 className="text-lg hidden md:block w-[350px]">
                            {label}
                          </h1>
                          <h2 className="text-lg hidden md:block px-16">
                            {ids}
                          </h2>
                          <h3 className="text-lg hidden md:block">
                            {sizes.replace("mm", " мм")}
                          </h3>
                        </div>
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
