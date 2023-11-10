"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

type SizeProps = {
  products: Product[];
  params: {
    type: string;
    category: string;
    variant: string;
    id: string;
    size: string;
  };
};

const SizeSelector = ({ products, params }: SizeProps) => {
  const pathname = usePathname().split("/");
  const [valueMark, setValueMark] = useState(false);
  const [valueWidth, setValueWidth] = useState(false);

  const closeSelector = () => {
    setValueMark(false);
    setValueWidth(false);
  };

  return (
    <>
      {products.map(
        (product) =>
          params.size && (
            <div className="w-full flex flex-col sm:flex-row gap-4 justify-start items-center px-6 sm:px-0 my-6">
              <div className="border border-orange-text relative z-30 w-full sm:w-auto">
                <div
                  onClick={() => setValueMark((event) => !event)}
                  className="px-4 py-2"
                >
                  <h1 className="text-black/80 cursor-pointer text-lg flex justify-center items-center gap-2">
                    Выбрать марку
                    <KeyboardArrowDownIcon
                      className={`${
                        valueMark ? "rotate-180" : "rotate-0"
                      } transition`}
                    />
                  </h1>
                </div>
                <ul
                  className={`${
                    valueMark ? "flex" : "hidden"
                  } max-h-[250px] py-2 z-50 shadow-md overflow-y-auto w-full flex-col absolute top-[50px] left-0 gap-1 bg-white rounded-md justify-start items-center`}
                >
                  {product.id.map((ids) => (
                    <li key={ids} onClick={() => setValueMark(false)}>
                      <Link
                        className="hover:underline"
                        href={`/${pathname[1]}/catalog/${params.type}/${params.category}/${params.variant}/${ids}/${params.size}`}
                      >
                        {ids.replace("mm", " мм").replace(".", ",")}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="border border-orange-text relative z-20 w-full sm:w-auto">
                <div
                  onClick={() => setValueWidth((event) => !event)}
                  className="px-4 py-2 cursor-pointer"
                >
                  <h1 className="text-black/80 cursor-pointer text-lg flex justify-center items-center gap-2">
                    {product.typeOfSize}
                    <KeyboardArrowDownIcon
                      className={`${
                        valueWidth ? "rotate-180" : "rotate-0"
                      } transition`}
                    />
                  </h1>
                </div>
                <div
                  className={`${
                    valueWidth ? "flex" : "hidden"
                  } max-h-[250px] py-2 z-50 shadow-md overflow-y-scroll w-full flex-col absolute top-[50px] left-0 gap-1 bg-white rounded-md justify-stert items-center`}
                >
                  {product.ENGSize.map((sizes) => (
                    <div key={sizes} onClick={() => setValueWidth(false)}>
                      <Link
                        className="hover:underline"
                        href={`/${pathname[1]}/catalog/${params.type}/${params.category}/${params.variant}/${params.id}/${sizes}`}
                      >
                        {sizes.replace("mm", " мм").replace(".", ",")}
                      </Link>
                    </div>
                  ))}
                </div>
              </div>

              <div
                onClick={closeSelector}
                className={`${
                  valueWidth || valueMark ? "block" : "hidden"
                } fixed top-0 left-0 w-full h-full bg-transparent z-10`}
              ></div>
            </div>
          )
      )}
    </>
  );
};

export default SizeSelector;
