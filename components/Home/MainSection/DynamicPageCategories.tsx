import { Product } from "@prisma/client";
import DynamicItem from "./dynamicItem";

type Props = {
  products: Product[];
};

export default async function DynamicPageCategories({ products }: Props) {
  return (
    <div className="w-full grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
      {products.map((product, index) => (
        <DynamicItem
          key={index}
          img={product.image.toString()}
          label={""}
          sublabel={product.label[0]}
          href={product.type}
          category={product.category}
          variety={product.variety}
        />
      ))}
    </div>
  );
}
