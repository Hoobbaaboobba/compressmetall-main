"use client";

import { getProducts } from "@/actions/getProducts";
import { Skeleton } from "@/components/ui/skeleton";
import { Product } from "@prisma/client";
import { useEffect, useState, useTransition } from "react";
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

  const filteredProducts = products
    ?.filter(
      (item) =>
        item.label[0].toLowerCase().includes(searchValue.toLowerCase()) ||
        item.marks
          .join("")
          .toLowerCase()
          .includes(searchValue.toLocaleLowerCase())
    )
    .slice(0, 30);
  return (
    <div className="rounded-md absolute top-12 bg-white p-2 h-[300px] w-full overflow-y-auto z-30 flex flex-col gap-2">
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
          <div key={index} className="flex text-black gap-2">
            <Image
              className="rounded-md"
              src={`/${item.image}.png`}
              width={100}
              height={100}
              alt={item.label[0]}
            />
            <div className="flex flex-col justify-between">
              <Link
                href={`/moscow/catalog/${item.type}/${item.category}/${item.variety}`}
                className="text-sm"
              >
                {item.label[0]}
              </Link>
            </div>
          </div>
        ))
      )}
    </div>
  );
};
