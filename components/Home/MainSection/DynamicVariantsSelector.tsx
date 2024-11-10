"use client";

import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import CloseIcon from "@mui/icons-material/Close";

import { Product } from "@prisma/client";
import FilterSelector from "./FilterSelector";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { FilterIcon } from "lucide-react";

interface Props {
    products: Product[];
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
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams()!;

    const labelQuery = searchParams.get("label") || "";
    const markaQuery = searchParams.get("marka") || "";
    const sizeQuery = searchParams.get("size") || "";
    const secondSizeQuery = searchParams.get("secondsize") || "";
    const thirdSizeQuery = searchParams.get("thirdsize") || "";
    const forthSizeQuery = searchParams.get("forthsize") || "";
    const fifthSizeQuery = searchParams.get("fifthsize") || "";

    const deleteQuery = () => {
        router.push(pathname);
    };

    const filtersArray = [
        {
            data: products[0].marks,
            label: "Найти по марке",
            emptyLabel: "Такой марки нет",
            queryLabel: "marka",
            query: markaQuery,
        },
        {
            data: products[0].sizes,
            label: products[0].firstTypeOfSize,
            emptyLabel: "Такого размера нет",
            queryLabel: "size",
            query: sizeQuery,
        },
        {
            data: products[0].secondSizes,
            label: products[0].secondTypeOfSize,
            emptyLabel: "Такого размера нет",
            queryLabel: "secondsize",
            query: secondSizeQuery,
        },
        {
            data: products[0].thirdSizes,
            label: products[0].thirdTypeOfSize,
            emptyLabel: "Такого размера нет",
            queryLabel: "thirdsize",
            query: thirdSizeQuery,
        },
        {
            data: products[0].forthSizes,
            label: products[0].forthTypeOfSize,
            emptyLabel: "Такого размера нет",
            queryLabel: "forthsize",
            query: forthSizeQuery,
        },
        {
            data: products[0].fifthSizes,
            label: products[0].fifthtypeOfSize,
            emptyLabel: "Такого размера нет",
            queryLabel: "fifthsize",
            query: fifthSizeQuery,
        },
    ];

    return (
        <>
            <Sheet>
                <SheetTrigger className="block md:hidden w-full text-md">
                    <Button className="w-full bg-orange-bg text-black hover:bg-orange-bg/70">
                        Фильтры <FilterIcon className="w-4 h-4 ml-1" />
                    </Button>
                </SheetTrigger>
                <SheetContent className="flex flex-col justify-between items-center">
                    <div className="w-full flex flex-col gap-4 justify-center items-center">
                        {filtersArray.map(
                            (filter, index) =>
                                filter.label && (
                                    <FilterSelector
                                        key={index}
                                        data={filter.data}
                                        label={filter.label}
                                        emptyLabel={filter.emptyLabel}
                                        queryLabel={filter.queryLabel}
                                        query={filter.query}
                                    />
                                )
                        )}
                        <Button
                            variant="secondary"
                            onClick={deleteQuery}
                            className={`${labelQuery.length > 0 ||
                                    markaQuery.length > 0 ||
                                    sizeQuery.length > 0 ||
                                    secondSizeQuery.length > 0 ||
                                    thirdSizeQuery.length > 0 ||
                                    forthSizeQuery.length > 0 ||
                                    fifthSizeQuery.length > 0
                                    ? "block"
                                    : "hidden"
                                } cursor-pointer`}
                        >
                            Очистить фильтры
                        </Button>
                    </div>
                    <SheetClose asChild className="w-full">
                        <Button className="w-full bg-orange-bg">Смореть</Button>
                    </SheetClose>
                </SheetContent>
            </Sheet>
            <div className="hidden md:flex bg-transparent left-0 w-full gap-2 justify-start items-center overflow-x-auto">
                {filtersArray.map(
                    (filter, index) =>
                        filter.label && (
                            <FilterSelector
                                key={index}
                                data={filter.data}
                                label={filter.label}
                                emptyLabel={filter.emptyLabel}
                                queryLabel={filter.queryLabel}
                                query={filter.query}
                            />
                        )
                )}
                <div
                    onClick={deleteQuery}
                    className={`${labelQuery.length > 0 ||
                            markaQuery.length > 0 ||
                            sizeQuery.length > 0 ||
                            secondSizeQuery.length > 0 ||
                            thirdSizeQuery.length > 0 ||
                            forthSizeQuery.length > 0 ||
                            fifthSizeQuery.length > 0
                            ? "block"
                            : "hidden"
                        } cursor-pointer`}
                >
                    <CloseIcon fontSize="large" />
                </div>
            </div>
        </>
    );
};

export default DynamicVariantsSelector;
