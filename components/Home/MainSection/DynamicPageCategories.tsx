import { Product } from "@prisma/client";
import DynamicItem from "./dynamicItem";
import HyperLinks from "./HyperLinks";

type Props = {
  products: Product[];
};

export default async function DynamicPageCategories({ products }: Props) {
  return (
    <div className="pt-6">
      <div className="flex flex-col">
        <div className="w-full mb-4 flex flex-col justify-center items-center">
          <h1 className="text-3xl font-bold text-black text-center xl:text-start">
            {products[0].pageTitle}
          </h1>
          <div className="bg-black h-[5px] w-[80px] mt-4"></div>
        </div>
        <HyperLinks categoryTitle={products[0].pageTitle} />
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4">
          {products.map((product, index) => (
            <DynamicItem
              key={index}
              img={product.image}
              label={""}
              sublabel={product.label[0]}
              href={product.type}
              category={product.category}
              variety={product.variety}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
