"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

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

type SizeProps = {
  products: Product[];
  params: {
    type: string;
    category: string;
    variant: string;
    id: string;
    size: string;
  };
};

const SizeSelector = ({ products, params }: SizeProps) => {
  const [openMarka, setOpenMarka] = useState(false);
  const [marka, setMarka] = useState("");

  const [value, setValue] = useState(false);

  const [open, setOpen] = useState(false);
  const [valueFilter, setValueFilter] = useState("");

  const pathname = usePathname().split("/");
  const [valueMark, setValueMark] = useState(false);
  const [valueWidth, setValueWidth] = useState(false);

  const closeSelector = () => {
    setValueMark(false);
    setValueWidth(false);
  };

  return (
    <>
      {products.map(
        (product) =>
          params.size && (
            <div className="w-full flex flex-col sm:flex-row gap-4 justify-start items-center px-6 sm:px-0 my-6">
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
                      {products[0].id.map((id: string) => (
                        <Link
                          className="hover:underline w-full"
                          href={`/${pathname[1]}/catalog/${params.type}/${params.category}/${params.variant}/${id}/${params.size}`}
                        >
                          <CommandItem
                            key={id}
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
                    {product.typeOfSize}
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-[200px] p-0 h-[250px] overflow-y-auto">
                  <Command>
                    <CommandInput placeholder="Выбрать размер" />
                    <CommandEmpty>Размер не найден</CommandEmpty>
                    <CommandGroup className="overflow-y-auto">
                      {products[0].ENGSize.map((size: string) => (
                        <Link
                          className="hover:underline w-full"
                          href={`/${pathname[1]}/catalog/${params.type}/${params.category}/${params.variant}/${params.id}/${size}`}
                        >
                          <CommandItem
                            key={size}
                            value={size}
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
            </div>
          )
      )}
    </>
  );
};

export default SizeSelector;
