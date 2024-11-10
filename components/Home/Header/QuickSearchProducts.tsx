"use client";

import { getProducts } from "@/actions/getProducts";
import { Skeleton } from "@/components/ui/skeleton";
import { Product } from "@prisma/client";
import { useEffect, useMemo, useState, useTransition } from "react";
import Image from "next/image";
import Link from "next/link";

interface QuickSearchProductsProps {
    searchValue: string;
}

export const QuickSearchProducts = ({
    searchValue,
}: QuickSearchProductsProps) => {
    const [products, setProducts] = useState<Product[]>();
    const [isPending, startTransition] = useTransition();

    useEffect(() => {
        startTransition(async () => {
            const products = await getProducts();
            setProducts(products);
        });
    }, []);

    const filteredProducts = useMemo(() => {
        return products
            ?.sort((a, b) => a.label[0].localeCompare(b.label[0]))
            .filter(
                (item) =>
                    item.label[0].toLowerCase().includes(searchValue.toLowerCase()) ||
                    item.marks
                        .join("")
                        .toLowerCase()
                        .includes(searchValue.toLowerCase())
            )
            .slice(0, 30)
    }, [products, searchValue]);

    return (
        <div className="rounded-md absolute top-12 bg-white p-2 h-[300px] w-[700px] overflow-y-auto z-30 flex flex-col gap-2">
            {isPending ? (
                <>
                    <div className="flex gap-2">
                        <Skeleton className="w-[100px] h-[70px]" />
                        <div className="flex flex-col w-full gap-2">
                            <Skeleton className="w-full h-5" />
                            <Skeleton className="w-2/3 h-5" />
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <Skeleton className="w-[100px] h-[70px]" />
                        <div className="flex flex-col w-full gap-2">
                            <Skeleton className="w-full h-5" />
                            <Skeleton className="w-3/4 h-5" />
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <Skeleton className="w-[100px] h-[70px]" />
                        <div className="flex flex-col w-full gap-2">
                            <Skeleton className="w-full h-5" />
                            <Skeleton className="w-1/3 h-5" />
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <Skeleton className="w-[100px] h-[70px]" />
                        <div className="flex flex-col w-full gap-2">
                            <Skeleton className="w-full h-5" />
                            <Skeleton className="w-2/4 h-5" />
                        </div>
                    </div>
                </>
            ) : (
                filteredProducts?.map((item, index) => (
                    <Link
                        key={index}
                        href={`/moscow/catalog/${item.type}/${item.category}/${item.variety}`}
                        className="text-sm flex text-black gap-2 hover:bg-slate-100 p-1 transition rounded-md"
                    >
                        <Image
                            className="rounded-md"
                            src={`/${item.image}.png`}
                            width={100}
                            height={100}
                            alt={item.label[0]}
                        />
                        <div className="flex flex-col justify-between w-full">
                            <h4 className="font-medium">{item.label[0]}</h4>
                            <div className="flex flex-col justify-start items-start w-full">
                                <div className="flex justify-start items-start gap-2 text-black/50 w-full">
                                    <span className="text-sm">Марки:</span>
                                    <ul className="flex gap-1 text-sm">
                                        {item.marks.slice(0, 8).map((marka) => (
                                            <li key={marka}>
                                                {marka}
                                            </li>
                                        ))}
                                    </ul>
                                    {item.marks.length > 10 && <span>...</span>}
                                </div>
                            </div>
                        </div>
                    </Link>
                ))
            )}
        </div>
    );
};
