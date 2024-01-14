"use client";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { menuCatalog } from "./menuData";
import MenuButton from "./MenuButton";

const CatalogMenu = () => {
  const pathname = usePathname().split("/");
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="w-[260px] h-[44px] rounded-none text-lg">
            <Link href={`/${pathname[1] || "moscow"}/catalog`}>Каталог</Link>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className={`flex justify-center item-start w-full h-full`}>
              <div className="w-[1300px] grid grid-cols-2 bg-white max-h-[80vh] overflow-y-auto gap-4 p-4 shadow-lg">
                {menuCatalog.map((item, index) => (
                  <div
                    key={index}
                    className="flex text-black flex-col gap-6 rounded-md border-r border-b border-r-black/70 border-b-black/70 p-4"
                  >
                    <div className="flex justify-start items-center w-full gap-3">
                      <h1 className="uppercase text-[26px] font-bold">
                        {item.label}
                      </h1>
                      <div className="w-2 h-2 bg-black rounded-full"></div>
                      <NavigationMenuLink>
                        <Button variant="link" size="lg" asChild>
                          <Link
                            href={`/${pathname[1] || "moscow"}/catalog/${
                              item.href
                            }`}
                          >
                            Посмотреть всё
                          </Link>
                        </Button>
                      </NavigationMenuLink>
                    </div>
                    <div className="w-full flex justify-start items-center flex-wrap gap-2">
                      {item.links.map((link, index) => (
                        <NavigationMenuLink key={index}>
                          <Button variant="outline" className="text-md" asChild>
                            <Link
                              href={`/${pathname[1] || "moscow"}/catalog/${
                                link.link
                              }`}
                            >
                              <h1>{link.title}</h1>
                            </Link>
                          </Button>
                        </NavigationMenuLink>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default CatalogMenu;
