"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { useState } from "react";

import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Product } from "@prisma/client";

type SizeProps = {
  products: Product[];
  params: {
    type: string;
    category: string;
    variant: string;
    id: string;
    size: string;
  };
  second?: string;
  third?: string;
  forth?: string;
  fifth?: string;
};

const SizeSelector = ({
  products,
  params,
  second,
  third,
  forth,
  fifth,
}: SizeProps) => {
  const [openMarka, setOpenMarka] = useState(false);
  const [marka, setMarka] = useState("");

  const [open, setOpen] = useState(false);
  const [valueFilter, setValueFilter] = useState("");

  const pathname = usePathname().split("/");

  const searchParams = useSearchParams();
  const label = searchParams.get("label");

  const firstNavLink = (id: string) => {
    if (!second) {
      return `/${pathname[1]}/catalog/${params.type}/${params.category}/${
        params.variant
      }/${id.replace("/", "[")}/${params.size}?label=${label}`;
    } else if (!third) {
      return `/${pathname[1]}/catalog/${params.type}/${params.category}/${
        params.variant
      }/${id.replace("/", "[")}/${
        params.size
      }?label=${label}&secondsize=${second}`;
    } else if (!forth) {
      return `/${pathname[1]}/catalog/${params.type}/${params.category}/${
        params.variant
      }/${id.replace("/", "[")}/${
        params.size
      }?label=${label}&secondsize=${second}&thirdsize=${third}`;
    } else if (!fifth) {
      return `/${pathname[1]}/catalog/${params.type}/${params.category}/${
        params.variant
      }/${id.replace("/", "[")}/${
        params.size
      }?label=${label}&secondsize=${second}&thirdsize=${third}&forthsize=${forth}`;
    } else {
      return `/${pathname[1]}/catalog/${params.type}/${params.category}/${
        params.variant
      }/${id.replace("/", "[")}/${
        params.size
      }?label=${label}&secondsize=${second}&thirdsize=${third}&forthsize=${forth}&fifthsize=${fifth}`;
    }
  };

  const secondNavLink = (size: string) => {
    if (!second) {
      return `/${pathname[1]}/catalog/${params.type}/${params.category}/${params.variant}/${params.id}/${size}?label=${label}`;
    } else if (!third) {
      return `/${pathname[1]}/catalog/${params.type}/${params.category}/${params.variant}/${params.id}/${size}?label=${label}&secondsize=${second}`;
    } else if (!forth) {
      return `/${pathname[1]}/catalog/${params.type}/${params.category}/${params.variant}/${params.id}/${size}?label=${label}&secondsize=${second}&thirdsize=${third}`;
    } else if (!fifth) {
      return `/${pathname[1]}/catalog/${params.type}/${params.category}/${params.variant}/${params.id}/${size}?label=${label}&secondsize=${second}&thirdsize=${third}&forthsize=${forth}`;
    } else {
      return `/${pathname[1]}/catalog/${params.type}/${params.category}/${params.variant}/${params.id}/${size}?label=${label}&secondsize=${second}&thirdsize=${third}&forthsize=${forth}&fifthsize=${fifth}`;
    }
  };

  return (
    <>
      {products.map(
        (product, index) =>
          params.size && (
            <div
              key={index}
              className="w-full flex flex-col sm:flex-row gap-4 justify-start items-center px-6 sm:px-0 my-6"
            >
              <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="w-[200px] justify-between border-orange-text"
                  >
                    {"Выбрать марку..."}
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-[200px] p-0 h-[250px] overflow-y-auto">
                  <Command>
                    <CommandInput placeholder="Выбрать марку" />
                    <CommandEmpty>Марка не найдена</CommandEmpty>
                    <CommandGroup className="overflow-y-auto">
                      {products[0].marks.map((id: string) => (
                        <Link
                          key={id}
                          className="hover:underline w-full"
                          href={firstNavLink(id)}
                        >
                          <CommandItem
                            value={id}
                            onSelect={(currentValue) => {
                              setValueFilter(
                                currentValue === marka ? "" : currentValue
                              );
                              setOpen(false);
                            }}
                          >
                            <Check
                              className={cn(
                                "mr-2 h-4 w-4",
                                valueFilter === id ? "opacity-100" : "opacity-0"
                              )}
                            />
                            {id}
                          </CommandItem>
                        </Link>
                      ))}
                    </CommandGroup>
                  </Command>
                </PopoverContent>
              </Popover>
              <Popover open={openMarka} onOpenChange={setOpenMarka}>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={openMarka}
                    className="w-[200px] justify-between border-orange-text"
                  >
                    {product.firstTypeOfSize}
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-[200px] p-0 h-[250px] overflow-y-auto">
                  <Command>
                    <CommandInput placeholder="Выбрать размер" />
                    <CommandEmpty>Размер не найден</CommandEmpty>
                    <CommandGroup className="overflow-y-auto">
                      {products[0].sizes.map((size: string) => (
                        <Link
                          key={size}
                          className="hover:underline w-full"
                          href={secondNavLink(size)}
                        >
                          <CommandItem
                            value={size}
                            onSelect={(currentValue) => {
                              setValueFilter(
                                currentValue === marka ? "" : currentValue
                              );
                              setOpenMarka(false);
                            }}
                          >
                            <Check
                              className={cn(
                                "mr-2 h-4 w-4",
                                valueFilter === size
                                  ? "opacity-100"
                                  : "opacity-0"
                              )}
                            />
                            {size.replace("mm", " мм").replace(".", ",")}
                          </CommandItem>
                        </Link>
                      ))}
                    </CommandGroup>
                  </Command>
                </PopoverContent>
              </Popover>
              {/* {products[0].secondTypeOfSize && (
                <Popover open={openSecond} onOpenChange={setOpenSecond}>
                  <PopoverTrigger asChild className="w-[200px]">
                    <Button
                      variant="outline"
                      role="combobox"
                      aria-expanded={openSecond}
                      className="w-[200px] justify-between border-orange-text"
                    >
                      {products[0].secondTypeOfSize}
                      <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-[200px] p-0 h-[250px] overflow-y-auto">
                    <Command>
                      <CommandInput
                        placeholder={products[0].secondTypeOfSize}
                      />
                      <CommandEmpty>Размер не найден</CommandEmpty>
                      <CommandGroup className="overflow-y-auto">
                        {products[0].secondSizes?.map((secondSize: string) => (
                          <CommandItem
                            key={secondSize}
                            value={secondSize}
                            onSelect={(currentValue) => {
                              setValueFilter(
                                currentValue === marka ? "" : currentValue
                              );
                              setOpenMarka(false);
                            }}
                          >
                            <Check
                              className={cn(
                                "mr-2 h-4 w-4",
                                valueFilter === secondSize
                                  ? "opacity-100"
                                  : "opacity-0"
                              )}
                            />
                            {secondSize.replace("mm", " мм")}
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </Command>
                  </PopoverContent>
                </Popover>
              )} */}
            </div>
          )
      )}
    </>
  );
};

export default SizeSelector;
