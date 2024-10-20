"use client";

import useCatalogModal from "@/hooks/useCatalogModal";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { menuCatalog } from "./Home/Header/menuData";
import { Button } from "./ui/button";
import { DrawerClose } from "./ui/drawer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";

const ViewCatalog = () => {
  const { openCatalog } = useCatalogModal();

  const pathname = usePathname().split("/");

  return (
    <>
      <Accordion
        type="single"
        collapsible
        className={`transition overflow-x-hidden duration-300 w-full bg-white grid grid-cols-1 overflow-y-auto lg:grid-cols-2 z-40`}
      >
        {menuCatalog.map((item, index) => (
          <AccordionItem
            value={item.label}
            key={index}
            className="flex text-black flex-col xl:rounded-md xl:border-r border-b border-r-black/70 :border-b-black/70 p-4"
          >
            <AccordionTrigger className="flex flex-col sm:flex-row text-center sm:text-start justify-start items-center w-full gap-1  sm:gap-3">
              <h2 className="uppercase text-xl font-bold">{item.label}</h2>
            </AccordionTrigger>
            <AccordionContent className="w-full flex flex-col gap-3">
              {item.links.map((link, index) => (
                <DrawerClose key={index} asChild>
                    <Link
                      href={`/${pathname[1] || "moscow"}/catalog/${link.link}`}
                      onClick={openCatalog}
                      className="className=w-full text-start p-2 border rounded-md border-input text-black hover:undeline h-full w-full"
                    >
                      <h1>{link.title}</h1>
                    </Link>
                </DrawerClose>
              ))}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
};

export default ViewCatalog;
