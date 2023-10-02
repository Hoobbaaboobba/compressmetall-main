"use client";

import Link from "next/link";
import HoverMenuItem from "./hoverMenuItem";

import { usePathname } from "next/navigation";
import { metalArray } from "./data";

const CatalogMenu = () => {
  const pathname = usePathname().split("/");

  return (
    <div className="flex-col relative hidden xl:flex z-30">
      <div className="sticky top-[137px] overflow-y-auto h-[81vh] mt-2 bg-">
        <Link href={`/${pathname[1] || "moscow"}/catalog?q=Все товары`}>
          <div className="flex justify-center items-center">
            <div className="w-[80px] h-[80px] bg-light-gray font-bold flex justify-center items-center text-orange-bg text-lg">
              А-Я
            </div>
            <div className="w-[150px] flex justify-center items-center">
              <h1 className="font-bold text-base">Все товары</h1>
            </div>
          </div>
        </Link>
        <hr />
        {metalArray.map((metal, index) => (
          <>
            <HoverMenuItem
              key={index}
              label={metal.label}
              buttonImg={metal.img}
              item={metal.items}
            />
            <hr />
          </>
        ))}
      </div>
    </div>
  );
};

export default CatalogMenu;
