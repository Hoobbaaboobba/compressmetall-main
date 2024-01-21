"use client";

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
import { cn } from "@/lib/utils";
import { Check, ChevronsUpDown } from "lucide-react";
import React from "react";

const gosts = [
  {
    value: "gost-380-88",
    label: "Углеродистая обыкновенного качества сталь ГОСТ 380-88",
  },
  {
    value: "gost-1050-88",
    label: "Качественная углеродистая конструкционная сталь ГОСТ 1050-88",
  },
  {
    value: "gost-9045-80",
    label: "Низкоуглеродистая качественная сталь ГОСТ 9045-80",
  },
  {
    value: "gost-5520-79",
    label:
      "Углеродистая качественная сталь для котлов и сосудов под давлением ГОСТ 5520-79",
  },
  {
    value: "gost-1414-75",
    label:
      "Конструкционная сталь высокой обрабатываемости резанием ГОСТ 1414-75",
  },
];

const MarksSelector = () => {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild className="mt-6">
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full max-w-[600px] justify-between text-md"
        >
          {value
            ? gosts.find((framework) => framework.value === value)?.label
            : "Выбрать ГОСТ"}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0">
        <Command className="">
          <CommandInput placeholder="Найти ГОСТ..." />
          <CommandEmpty>ГОСТ не найден</CommandEmpty>
          <CommandGroup>
            {gosts.map((framework) => (
              <CommandItem
                key={framework.value}
                value={framework.value}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? "" : currentValue);
                  setOpen(false);
                }}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    value === framework.value ? "opacity-100" : "opacity-0"
                  )}
                />
                {framework.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default MarksSelector;
