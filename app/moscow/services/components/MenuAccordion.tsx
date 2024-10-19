"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MenuData } from "./MenuData";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PanelLeftClose, PanelRightClose } from "lucide-react";
import { useState } from "react";

export function MenuAccordion() {
    const [isSidebarOpen, setSidebarOpen] = useState(true);
  const city = usePathname().split("/")[1];
  const current = usePathname().split("/");

  return (
      <div className="flex flex-col relative">
      <Button variant={"outline"} onClick={() => setSidebarOpen((e) => !e)} className="absolute left-0 top-0">
        {isSidebarOpen ? <PanelLeftClose className="text-black w-5 h-5"/> : <PanelRightClose className="text-black w-5 h-5"/>}
      </Button>
    <Accordion type="multiple" className={`w-[350px] ${isSidebarOpen ? "block" : "hidden"} mt-12`}>
      {MenuData.map((item, index) => (
        <AccordionItem
          key={index}
          value={item.name}
          className="border-b border-light-gray"
        >
          <Link href={`/${city}/services/${item.link}`}>
            <AccordionTrigger
              className={`text-start py-2 relative ${
                current[3] === item.link ? "text-orange-text" : ""
              }`}
            >
              {item.name}
            </AccordionTrigger>
          </Link>
          <AccordionContent>
            <Accordion type="multiple" className="w-full">
              {item.subMenu.map((subItem, index) =>
                subItem.subLinks !== undefined ? (
                  <AccordionItem
                    key={index}
                    value={subItem.name}
                    className="text-sm border-none ml-2"
                  >
                    <Link
                      href={`/${city}/services/${item.link}/${subItem.link}`}
                    >
                      <AccordionTrigger
                        className={`text-sm py-[3px] relative ${
                          current[4] === subItem.link ? "text-orange-text" : ""
                        }`}
                      >
                        {subItem.name}
                      </AccordionTrigger>
                    </Link>
                    <AccordionContent>
                      {subItem.subLinks?.map((subSubItem, index) => (
                        <Link
                          key={index}
                          href={`/${city}/services/${item.link}/${subItem.link}/${subSubItem.link}`}
                        >
                          <button className="text-start flex items-center gap-2 my-1 ml-2 hover:underline">
                            {subSubItem.name}
                          </button>
                        </Link>
                      ))}
                    </AccordionContent>
                  </AccordionItem>
                ) : (
                  <button
                    key={index}
                    className={`text-start flex items-center gap-2 my-1 ml-2 hover:underline ${
                      current[4] === subItem.link ? "text-orange-text" : ""
                    }`}
                  >
                    <Link
                      href={`/${city}/services/${item.link}/${subItem.link}`}
                    >
                      {subItem.name}
                    </Link>
                  </button>
                )
              )}
            </Accordion>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
    </div>
  );
}
