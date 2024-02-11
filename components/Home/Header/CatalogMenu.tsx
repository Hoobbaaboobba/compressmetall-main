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
import { Badge } from "@/components/ui/badge";
import { setJsonMenuCategory } from "@/actions/setJsonMenuCategory";
import { setJsonMenuCategoryLinks } from "@/actions/setJsonMenuCategoryLinks";

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
              <div className="w-[1300px] grid grid-cols-4 bg-white max-h-[80vh] overflow-y-auto p-2 shadow-lg">
                {menuCatalog.map((item, indexMenu) => (
                  <div
                    key={indexMenu}
                    className={`flex text-black flex-col gap-1 border-b ${
                      indexMenu !== (3 || 7 || 11) && "border-r"
                    } p-4`}
                  >
                    <div className="flex flex-col justify-start items-start w-full">
                      <h1 className="uppercase text-lg font-bold">
                        {item.label}
                      </h1>
                      <NavigationMenuLink>
                        <Button
                          variant="link"
                          className="px-0 py-0 pb-1"
                          size="sm"
                          asChild
                        >
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
                    <div className="w-full flex flex-col justify-start items-start overflow-y-auto h-[170px]">
                      {item.links.map((link, index) => (
                        <div>
                          <NavigationMenuLink key={index}>
                            <Button
                              variant="link"
                              className="py-0 px-0 h-3"
                              asChild
                            >
                              <Link
                                href={`/${pathname[1] || "moscow"}/catalog/${
                                  link.link
                                }`}
                              >
                                <h1>{link.title}</h1>
                              </Link>
                            </Button>
                          </NavigationMenuLink>
                          {(link.title === "Болты" ||
                            link.title === "Гайки") && (
                            <Badge
                              variant="outline"
                              className="ml-2 bg-orange-text text-white border-none"
                            >
                              Новое
                            </Badge>
                          )}
                        </div>
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
