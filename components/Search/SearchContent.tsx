import { usePathname } from "next/navigation";
import React from "react";
import DynamicItem from "../Home/MainSection/dynamicItem";

type Props = {
  query: string;
  productsData: Product[];
};

const SearchContent = async ({ query, productsData }: Props) => {
  const pathname = usePathname().split("/");

  return (
    <div className="flex flex-col pt-8 gap-4">
      <h2 className="text-2xl text-center lg:text-start">
        По запросу: <span className="font-bold">"{query}"</span>
      </h2>
      <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 sm:gap-4 py-4 px-2 sm:px-4">
        {productsData.map((product) =>
          product.id.map((ids) =>
            product.ENGSize.map((sizes, index) => (
              <DynamicItem
                key={index}
                img={product.img}
                label={ids}
                topic={product.subLabel}
                sublabel={sizes}
                href={product.type}
                category={product.category}
                variety={product.variety}
                id={ids}
                size={sizes}
              />
            ))
          )
        )}
      </div>
      <hr className="mt-8" />
    </div>
  );
};

export default SearchContent;
