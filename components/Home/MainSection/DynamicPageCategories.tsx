import { Product } from "@prisma/client";
import DynamicItem from "./dynamicItem";

type Props = {
    products: Product[];
    searchParams: { [key: string]: string | string[] | undefined };
};

export default async function DynamicPageCategories({ products, searchParams }: Props) {
    return (
        <div className="flex flex-col justify-center items-end">
            <div className={`w-full ${searchParams?.variant === "list" ? "flex flex-col gap-1" : "grid gap-4"} grid-cols-2 md:grid-cols-3 xl:grid-cols-4 p-4`}>
                {products.map((product, index) => (
                    <DynamicItem
                        variant={searchParams?.variant}
                        key={index}
                        img={product.image.toString()}
                        label={product.label[0]}
                        sublabel={product.label[0]}
                        id={product.marks[0]}
                        href={product.type}
                        category={product.category}
                        variety={product.variety}
                        price={product.price}
                        size={product.sizes[0]}
                        secondsize={product.secondSizes[0]}
                        thirdsize={product.thirdSizes[0]}
                        fourthsize={product.forthSizes[0]}
                        fifthsize={product.fifthSizes[0]}
                    />
                ))}
            </div>
        </div>
    );
}
