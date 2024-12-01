import { Check } from "lucide-react";
import HyperLinks from "../Home/MainSection/HyperLinks";
import { LinkButton } from "../Home/MainSection/Link";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "../ui/command";
import { MenuCategoryLinks, Product } from "@prisma/client";

interface CategoryLayoutModelProps {
    products: Product[];
    categories: MenuCategoryLinks[] | undefined;
    children: React.ReactNode;
    params: {
        type: string;
        category: string;
        variant: string;
        id: string;
        size: string;
    };
}

export const CategoryLayoutModel = ({
    products,
    categories,
    children,
    params,
}: CategoryLayoutModelProps) => {
    return (
        <div className="pt-6 px-4">
            <div className="flex flex-col">
                <div className="w-full mb-4 flex flex-col justify-center items-center">
                    <h1 className="text-3xl font-bold text-black text-center xl:text-start">
                        {products[0].pageTitle}
                    </h1>
                    <div className="bg-black h-[5px] w-[80px] mt-4"></div>
                </div>
                <HyperLinks categoryTitle={products[0].pageTitle} />
                <div className="flex justify-center items-start gap-2">
                    <Command className="sticky hidden lg:flex border border-light-gray mt-5 px-1 top-[150px] max-w-[350px]">
                        <CommandInput placeholder="Найти категорию" />
                        <CommandList>
                            <CommandEmpty>Ничего не найдено.</CommandEmpty>
                            <CommandGroup className="overflow-y-auto max-h-[500px]">
                                {categories &&
                                    categories
                                        .slice(
                                            0,
                                            products[0].type === "kabelnaya-produkcia" ? 14 : 100
                                        )
                                        .map(
                                            (link, index) =>
                                                link.title !== "Ниобий" &&
                                                link.title !== "Окатыши железорудные" &&
                                                link.title !== "Припои серебряные" &&
                                                link.title !== "Специальные припои" &&
                                                link.title !== "Сурьма в чушках" &&
                                                link.title !== "Цинк в чушках" &&
                                                link.title !== "Кадмий" &&
                                                link.title !== "Олово" && (
                                                    <LinkButton
                                                        key={index}
                                                        catalog
                                                        type={products[0].type}
                                                        category={link.link}
                                                    >
                                                        <CommandItem
                                                            className="text-sm py-1 rounded-none border-b relative hover:underline w-full"
                                                        >
                                                            <Check
                                                                className={`w-3 h-3 mr-1 ${params.category === link.link
                                                                    ? "block"
                                                                    : "hidden"
                                                                    }`}
                                                            />
                                                            {link.title}
                                                        </CommandItem>
                                                    </LinkButton>
                                                )
                                        )}
                            </CommandGroup>{" "}
                        </CommandList>
                    </Command>
                    {children}
                </div>
            </div>
        </div>
    );
};
