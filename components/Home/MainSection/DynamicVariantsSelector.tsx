"use client";

import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";

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

interface Props {
  products: any[];
  markaQ: string;
  sizeQ: string;
  secondSizeQ?: string;
}

const DynamicVariantsSelector = ({
  products,
  markaQ,
  sizeQ,
  secondSizeQ,
}: Props) => {
  const [openMarka, setOpenMarka] = useState(false);
  const [marka, setMarka] = useState("");

  const [open, setOpen] = useState(false);
  const [valueFilter, setValueFilter] = useState("");

  const [openSecond, setOpenSecond] = useState(false);
  const [valueSecondFilter, setValueSecondFilter] = useState("");

  const [value, setValue] = useState(false);

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams()!;

  const Marka = searchParams.get("marka");
  const Size = searchParams.get("size");

  const createQueryMarkaString = useCallback(
    (marka: string, value: string, secondvalue: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(marka, value);

      return params;
    },
    [searchParams]
  );

  const createQuerySizeString = useCallback(
    (size: string, value: string, secondvalue: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(size, value);

      return params;
    },
    [searchParams]
  );

  const createQuerySecondSizeString = useCallback(
    (size: string, value: string, secondvalue: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(size, value);

      return params;
    },
    [searchParams]
  );

  const deleteQuery = () => {
    router.push(pathname);
    setMarka("");
    setValueFilter("");
  };

  const onClickMarka = (
    ids: string,
    currentValue: string,
    currentSecondValue: string
  ) => {
    router.push(
      pathname +
        "?" +
        createQueryMarkaString("marka", `${ids}`, `${currentSecondValue}`)
    );
    setValueFilter(currentValue === marka ? "" : currentValue);
    setOpen(false);
  };

  const onClickValue = (
    sizes: string,
    currentValue: string,
    currentSecondValue: string
  ) => {
    router.push(
      pathname +
        "?" +
        createQuerySecondSizeString("size", `${sizes}`, `${currentSecondValue}`)
    );
    setValueFilter(currentValue === marka ? "" : currentValue);
    setOpenMarka(false);
  };

  const onClickSecondValue = (
    sizes: string,
    currentValue: string,
    currentSecondValue: string
  ) => {
    router.push(
      pathname +
        "?" +
        createQuerySizeString("secondsize", `${sizes}`, `${currentSecondValue}`)
    );
    setValueFilter(currentValue === marka ? "" : currentValue);
    setOpenSecond(false);
  };

  const closeEverything = () => {
    setMarka("");
    setValueFilter("");
  };

  return (
    <div className="flex bg-white left-0 w-full gap-2 justify-start items-center overflow-x-auto">
      <div
        onClick={closeEverything}
        className={`${
          marka || value ? "block" : "hidden"
        } fixed top-0 left-0 w-full h-full bg-transparent`}
      ></div>
      <FilterAltIcon fontSize="large" />
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-[200px] justify-between border-orange-text overflow-hidden text-ellipsis whitespace-nowrap"
          >
            {markaQ ? Marka : "Выбрать марку..."}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0 h-[250px] overflow-y-auto">
          <Command>
            <CommandInput placeholder="Выбрать марку" />
            <CommandEmpty>Марка не найдена</CommandEmpty>
            <CommandGroup className="overflow-y-auto">
              {products[0].id.map((framework: string) => (
                <CommandItem
                  key={framework}
                  value={framework}
                  onSelect={(currentValue) => {
                    onClickMarka(framework, currentValue, framework);
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      markaQ === framework ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {framework}
                </CommandItem>
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
            {sizeQ ? Size?.replace("mm", " мм") : products[0].typeOfSize}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0 h-[250px] overflow-y-auto">
          <Command>
            <CommandInput placeholder={products[0].typeOfSize} />
            <CommandEmpty>Размер не найден</CommandEmpty>
            <CommandGroup className="overflow-y-auto">
              {products[0].ENGSize.map((sizes: string) => (
                <CommandItem
                  key={sizes}
                  value={sizes}
                  onSelect={(currentValue) => {
                    onClickValue(sizes, currentValue, sizes);
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      sizeQ === sizes ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {sizes.replace("mm", " мм")}
                </CommandItem>
              ))}
            </CommandGroup>
          </Command>
        </PopoverContent>
      </Popover>
      {products[0].secondFilter && (
        <Popover open={openSecond} onOpenChange={setOpenSecond}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={openSecond}
              className="w-[200px] justify-between border-orange-text"
            >
              {secondSizeQ
                ? secondSizeQ.replace("mm", " мм")
                : products[0].secondFilter}
              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[200px] p-0 h-[250px] overflow-y-auto">
            <Command>
              <CommandInput placeholder={products[0].secondFilter} />
              <CommandEmpty>Размер не найден</CommandEmpty>
              <CommandGroup className="overflow-y-auto">
                {products[0].secondSize.map((secondSize: string) => (
                  <CommandItem
                    key={secondSize}
                    value={secondSize}
                    onSelect={(currentValue) => {
                      onClickSecondValue(secondSize, currentValue, secondSize);
                    }}
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        secondSizeQ === secondSize ? "opacity-100" : "opacity-0"
                      )}
                    />
                    {secondSize.replace("mm", " мм")}
                  </CommandItem>
                ))}
              </CommandGroup>
            </Command>
          </PopoverContent>
        </Popover>
      )}

      <div
        onClick={deleteQuery}
        className={`${
          markaQ.length > 0 || sizeQ.length > 0 ? "block" : "hidden"
        } cursor-pointer`}
      >
        <CloseIcon fontSize="large" />
      </div>
    </div>
  );
};

export default DynamicVariantsSelector;
