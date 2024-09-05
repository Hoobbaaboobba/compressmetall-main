"use client";

import { useSearchParams } from "next/navigation";
import React from "react";
import DynamicItem from "../Home/MainSection/dynamicItem";
import { Product } from "@prisma/client";

type Props = {
  productsData: Product[];
};

const SearchContent = ({ productsData }: Props) => {
  const searchParams = useSearchParams();
  const query = searchParams.get("query") || "";

  if (query.length > 0) {
    const results = productsData.filter((entry) =>
      entry.label.some((label) =>
        label.toLowerCase().includes(query.toLowerCase())
      )
    );
    return (
      <div className="flex flex-col pt-8 gap-4">
        <h2 className="text-2xl text-center lg:text-start">
          По запросу: <span className="font-bold">&quot;{query}&quot;</span>
        </h2>
        <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 sm:gap-4 py-4 px-2 sm:px-4">
          {results.map((product) => (
            <DynamicItem
              key={product.label.toString()}
              img={product.image}
              label={product.label.toString()}
              sublabel={product.label[0]}
              href={product.type}
              category={product.category}
              variety={product.variety}
            />
          ))}
        </div>
        <hr className="mt-8" />
      </div>
    );
  } else {
    return <div>Ничего не найдено!</div>;
  }
};

export default SearchContent;
