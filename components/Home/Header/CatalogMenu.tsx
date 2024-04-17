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
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

const CatalogMenu = () => {
  const pathname = usePathname().split("/");

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="w-[260px] h-[44px] rounded-none text-lg">
            <p>Каталог</p>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className={`flex justify-center item-start w-full h-full`}>
              <div className="w-[1300px] grid grid-cols-4 bg-white max-h-[80vh] overflow-y-auto p-2 shadow-lg">
                {menuCatalog.map((item, indexMenu) => (
                  <div
                    key={indexMenu}
                    className={`flex h-[350px] text-black flex-col gap-1 border-b ${
                      indexMenu !== (3 || 7 || 11) && "border-r"
                    } p-4`}
                  >
                    <div className="flex flex-col justify-center items-start w-full">
                      <h2 className="uppercase text-lg font-bold">
                        {item.label}{" "}
                        {item.label === "Кабельная продукция" && (
                          <Badge
                            variant="outline"
                            className="ml-2 bg-orange-text text-white border-none"
                          >
                            Новое
                          </Badge>
                        )}
                      </h2>
                    </div>
                    <Command className="w-full rounded-none flex flex-col justify-start items-start overflow-auto h-full">
                      <CommandInput
                        className="border-none"
                        placeholder="Найти..."
                      />
                      <CommandList className="w-full h-full overflow-x-auto">
                        <CommandEmpty>Ничего не найдено.</CommandEmpty>
                        <CommandGroup className="w-full h-full">
                          {item.links.map((link, index) => (
                            <CommandItem className="my-1">
                              <NavigationMenuLink key={index}>
                                <Button
                                  variant="link"
                                  size="sm"
                                  className="py-0 px-0 h-3"
                                  asChild
                                >
                                  <Link
                                    title={link.title}
                                    href={`/${
                                      pathname[1] || "moscow"
                                    }/catalog/${link.link}`}
                                  >
                                    {link.title}
                                  </Link>
                                </Button>
                              </NavigationMenuLink>
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      </CommandList>
                    </Command>
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
