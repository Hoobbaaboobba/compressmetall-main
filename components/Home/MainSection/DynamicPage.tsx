import Image from "next/image";
import ShowButtonPrice from "./ShowPriceBottom";

type Props = {
  promise: Promise<Product[]>;
  params: {
    id: string;
  };
};

export default async function DynamicPage({ promise }: Props) {
  const products = await promise;

  return (
    <div className="max-w-[1000px] w-full flex flex-col gap-4 px-4">
      {products.map((product) => {
        return (
          <>
            <h1 className="text-xl font-bold text-center md:text-start text-gray-bg">
              {product.label}
            </h1>
            <div className="w-full flex flex-col md:flex-row justify-between items-center gap-3 ">
              <Image
                src={require(`../../../public/${product.img}.png`)}
                alt={product.id}
                width={400}
                height={250}
                className="border border-light-gray rounded-[15px]"
                placeholder="blur"
              />
              <div className="flex flex-col gap-3 justify-center items-center w-full">
                <h1 className="text-lg max-w-[400px] text-center">
                  {product.label} {product.id === "undefined" ? "" : product.id}
                </h1>
                <h2 className="opacity-60">
                  {product.isInStock} (
                  <span className="text-orange-bg">{product.amount}</span>)
                </h2>
                <ShowButtonPrice />
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
}
