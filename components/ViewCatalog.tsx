"use client";

import useCatalogModal from "@/hooks/useCatalogModal";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { menuCatalog } from "./Home/Header/menuData";
import { Button } from "./ui/button";
import { DrawerClose } from "./ui/drawer";

const ViewCatalog = () => {
  const { isOpenCatalog, openCatalog } = useCatalogModal();

  const pathname = usePathname().split("/");

  return (
    <>
      <div
        className={`transition duration-300 w-full bg-white grid grid-cols-1 overflow-y-auto lg:grid-cols-2 z-40`}
      >
        {menuCatalog.map((item, index) => (
          <div
            key={index}
            className="flex text-black flex-col gap-6 xl:rounded-md xl:border-r border-b border-r-black/70 :border-b-black/70 p-4"
          >
            <div className="flex flex-col sm:flex-row text-center sm:text-start justify-start items-center w-full gap-1  sm:gap-3">
              <h2 className="uppercase text-[26px] font-bold">{item.label}</h2>
              <div className="hidden sm:block w-2 h-2 bg-black rounded-full"></div>
              <DrawerClose asChild>
                <Button variant="link" size="lg" asChild>
                  <Link
                    href={`/${pathname[1] || "moscow"}/catalog/${item.href}`}
                    onClick={openCatalog}
                    className="text-black/70 hover:underline text-lg"
                  >
                    Посмотреть всё
                  </Link>
                </Button>
              </DrawerClose>
            </div>
            <div className="w-full flex justify-center sm:justify-start items-center flex-wrap gap-2">
              {item.links.map((link) => (
                <DrawerClose asChild>
                  <Button variant="outline" className="text-md" asChild>
                    <Link
                      href={`/${pathname[1] || "moscow"}/catalog/${link.link}`}
                      onClick={openCatalog}
                      className="py-1 px-2 border border-black/70 rounded-md hover:bg-orange-bg hover:text-white hover:border-white"
                    >
                      <h1>{link.title}</h1>
                    </Link>
                  </Button>
                </DrawerClose>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ViewCatalog;
