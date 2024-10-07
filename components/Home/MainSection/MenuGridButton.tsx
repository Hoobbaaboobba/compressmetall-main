'use client'

import { Button } from "@/components/ui/button"
import { Command, CommandGroup, CommandItem, CommandList } from "@/components/ui/command"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import { CaretSortIcon } from "@radix-ui/react-icons"
import { CheckIcon, ChevronsUpDown, LayoutGrid, List } from "lucide-react"
import { useRouter } from "next/navigation"
import { useState } from "react"

export const MenuGridButton = () => {
    const [open, setOpen] = useState(false)
    const [value, setValue] = useState("grid")

    const router = useRouter()

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger className="flex" asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="px-2"
                 >
                    {value === "grid" ? <LayoutGrid className="h-5 w-5"/> : <List className="h-5 w-5"/>}
                    <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="flex flex-col w-[100px] p-1">
                <Command>
            <CommandList>
            <CommandGroup>
                <CommandItem
                  key={"grid"}
                  value={"grid"}
                  onClick={() => router.push("?variant=grid")}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue)
                    router.push("?variant=grid")
                    setOpen(false)
                  }}
                >
                    Сетка
                  <CheckIcon
                    className={cn(
                      "ml-auto h-4 w-4",
                      value === "grid" ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
                <CommandItem
                  key={"list"}
                  value={"list"}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue)
                    router.push("?variant=list")
                    setOpen(false)
                  }}
                >
                    Список
                  <CheckIcon
                    className={cn(
                      "ml-auto h-4 w-4",
                      value === "list" ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>

            </CommandGroup>
          </CommandList>
        </Command>
        </PopoverContent>
        </Popover>
    )
}
