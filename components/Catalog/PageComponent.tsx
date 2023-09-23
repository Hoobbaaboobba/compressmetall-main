"use client";

import Link from "next/link";
import Image from "next/image";
import { Key } from "react";
import { usePathname } from "next/navigation";

interface PageComponentProps {
  data: any[];
}

const PageComponent: React.FC<PageComponentProps> = ({ data }) => {
  const pathname = usePathname().split("/");
  return (
    <div>
      {data.map((product) => (
        <div key={product.id} className="flex flex-col relative gap-2">
          <h2 className="font-bold text-xl mt-4 text-gray-bg text-center md:text-start">
            {product.label}
          </h2>
          <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full gap-2 sm:gap-4">
            {product.items.map((item: any, index: Key | null | undefined) => (
              <Link
                key={index}
                className="cursor-pointer p-[10px] sm:p-[20px] border border-light-gray rounded-lg first-letter:font-bold hover:opacity-100 w-full sm:w-[230px] flex flex-col justify-center items-center hover:shadow-lg transition duration-200"
                href={`/${pathname[1]}/catalog/${product.label}/${item[0]}?i=${item[1]}&q=${item[2]}&amount=${item[3]}`}
              >
                <li className="flex flex-col w-full h-full justify-center items-center gap-6">
                  <Image
                    src={require(`../../public/${item[1]}.png`)}
                    alt={product.label}
                    width={160}
                    height={160}
                    placeholder="blur"
                    className="rounded-lg"
                  />
                  <div className="text-center w-full flex flex-col gap-2">
                    <h1 className="opacity-60">{product.label}</h1>
                    <h2 className=" text-lg">{item[0]}</h2>
                  </div>
                </li>
              </Link>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default PageComponent;
