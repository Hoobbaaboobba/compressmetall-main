"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { menuCatalog } from "./menuData";
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";
import { ArrowRight, ChevronRightSquare, LayoutGrid, Loader } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { getAllMenuCategory } from "@/actions/getMenuCategory";
import { MenuCategory, MenuCategoryLinks } from "@prisma/client";
import { CatalogMenuLinksLoading, CatalogMenuLoading } from "./CatalogMenu/CatalogMenuLoading";
import { getAllMenuLinks } from "@/actions/getMenuLinks";
import { Separator } from "@/components/ui/separator";
import { Calculator } from "../MainSection/Calculator/Calculator";

const CatalogMenu = () => {
    const [currentCategory, setCurrentCategory] = useState<{ id: number, href: string }>({
        id: 2,
        href: "tsvetnoi-prokat"
    });
    const [categries, setCategries] = useState<MenuCategory[]>([]);
    const [menuLinks, setMenuLinks] = useState<MenuCategoryLinks[]>([]);

    const pathname = usePathname().split("/");

    const getCategories = async () => {
        if (categries.length > 0 && menuLinks.length > 0) {
            return
        }
        try {
            const categries = await getAllMenuCategory();
            const menuLinks = await getAllMenuLinks();

            setCategries(categries);
            setMenuLinks(menuLinks);
        } catch (error) {
            throw error;
        }
    }

    const getMenuLinks = (id: number) => {
        return menuLinks.filter((item) => item.linkId === id)
    }

    return (
        <Menubar className="border-none">
            <MenubarMenu>
                <MenubarTrigger onClick={getCategories} className="bg-main-black cursor-pointer group py-2 px-4 rounded-md text-white text-[16px]">
                    <LayoutGrid className="group-hover:rotate-90 transition w-5 h-5 mr-1" />
                    Каталог
                </MenubarTrigger>
                <MenubarContent className="bg-slate-50">
                    <div className="w-[1300px] bg-slate-50 flex h-[600px] overflow-y-auto p-2">
                        <div className="w-[400px] h-full flex flex-col justify-start items-start border-r pr-2">
                            {categries.length === 0 && <CatalogMenuLoading />}
                            {categries.length > 0 && categries.map((item) => (
                                <button key={item.label} onClick={() => setCurrentCategory({ id: item.id, href: item.href })} className={`flex py-2 px-4 ${item.id === currentCategory.id ? "border-orange-bg bg-white" : "border-slate-50"} border rounded-md text-left w-full group transition justify-start relative items-center cursor-pointer`}>
                                    {item.label}
                                    <ArrowRight className={`w-5 h-5 absolute right-3 ${item.id === currentCategory.id ? "opacity-100 translate-x-[5px]" : "opacity-0"} group-hover:opacity-100 group-hover:translate-x-[5px] transition`} />
                                </button>
                            ))}
                            <Separator className="w-full my-2" />
                            <Calculator className="bg-orange-bg hover:bg-orange-bg/70 border-none" />
                        </div>
                        <div className="w-full h-full flex flex-col gap-1 overflow-y-auto ml-2">
                            {menuLinks.length === 0 && <CatalogMenuLinksLoading />}
                            {menuLinks.length > 0 && getMenuLinks(currentCategory.id).map((link) => (
                                <MenubarItem className="cursor-pointer" asChild key={link.title}>
                                    <Button variant="outline" className="w-full px-3 flex justify-start items-center" asChild>
                                        <Link href={`/${pathname[1] || "moscow"}/catalog/${currentCategory.href}/${link.link}`}>
                                            {link.title}
                                        </Link>
                                    </Button>
                                </MenubarItem>
                            ))}
                        </div>
                    </div>
                </MenubarContent>
            </MenubarMenu>
        </Menubar>
    );
};

export default CatalogMenu;
