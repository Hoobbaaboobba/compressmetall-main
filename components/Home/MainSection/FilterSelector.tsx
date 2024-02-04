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
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useState } from "react";

const FilterSelector = ({
  data,
  label,
  emptyLabel,
  queryLabel,
  query,
}: {
  data: string[];
  label: string;
  emptyLabel: string;
  queryLabel: string;
  query: string;
}) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams()!;

  const createQueryMarkaString = useCallback(
    (query: string, setQuery: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(query, setQuery);

      return params;
    },
    [searchParams]
  );

  const onClick = (query: string, setQuery: string, currentValue: string) => {
    router.push(pathname + "?" + createQueryMarkaString(query, setQuery));
    setValue(currentValue === value ? "" : currentValue);
    setOpen(false);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between border border-orange-text"
        >
          {query ? query : label}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] max-h-[200px] h-full overflow-y-auto p-0">
        <Command>
          <CommandInput placeholder={label} />
          <CommandEmpty>{emptyLabel}</CommandEmpty>
          <CommandGroup>
            {data.map((item) => (
              <CommandItem
                key={item}
                value={item}
                onSelect={(currentValue) =>
                  onClick(queryLabel, item, currentValue)
                }
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    item === query ? "opacity-100" : "opacity-0"
                  )}
                />
                {item.replace("mm", " мм")}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default FilterSelector;
