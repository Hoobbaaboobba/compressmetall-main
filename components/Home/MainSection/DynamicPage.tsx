import Image from "next/image";
import ShowButtonPrice from "./ShowPriceBottom";
import SizeSelector from "./SizeSelector";
import DynamicItem from "./dynamicItem";
import { Fragment } from "react";

type Props = {
  promise: Promise<Product[]>;
  params: {
    type: string;
    category: string;
    variant: string;
    id: string;
    size: string;
  };
};

export default async function DynamicPage({ promise, params }: Props) {
  const products = await promise;

  return (
    <>
      <div className="max-w-[1300px] flex flex-col gap-4">
        {products?.map((product, index) => (
          <>
            {params.variant && (
              <div
                key={index}
                className="relative w-full h-[400px] flex flex-col justify-center text-center sm:items-start px-6 xl:px-12"
              >
                {" "}
                <div className="absolute top-0 left-0 w-full h-[400px] -z-20">
                  <div className="w-full h-full bg-black/60 sm:bg-black/30  absolute top-0 left-0"></div>
                  <Image
                    src={require(`../../../public/${product.img}.png`)}
                    alt={product.label}
                    quality={100}
                    fill
                    priority
                    loading="eager"
                    sizes="(max-width: 1300px), (height: 400px)"
                    style={{
                      objectFit: "cover",
                      objectPosition: "center",
                    }}
                    className="top-0 left-0 absolute -z-10"
                    placeholder="blur"
                  />
                </div>
                <Image
                  src={require(`../../../public/productGridPhoto.png`)}
                  alt="сетка"
                  quality={100}
                  fill
                  priority
                  loading="eager"
                  sizes="(max-width: 1300px), (height: 400px)"
                  style={{
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                  className="top-0 left-0 absolute -z-10"
                  placeholder="blur"
                />
                <div className="flex flex-col gap-6 max-w-[800px] justify-center sm:justify-start items-center sm:items-start">
                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-0 justify-center sm:justify-start items-center w-full">
                    <h1 className="text-4xl font-bold text-center md:text-start text-black/80">
                      {product.subLabel}
                    </h1>
                    <div
                      className={`${
                        params.size ? "sm:block" : "sm:hidden"
                      } w-4 h-1 sm:w-1 sm:h-4 sm:mx-3 sm:block bg-black/50`}
                    ></div>
                    <h2 className="text-black/60 text-2xl underline">
                      {product.id.map((ids) =>
                        ids === decodeURI(params.id)
                          ? ids.replace(".", ",").replace("|", "/")
                          : ""
                      )}
                    </h2>
                    <div
                      className={`${
                        params.size ? "sm:block" : "sm:hidden"
                      } w-4 h-1 sm:w-1 sm:h-4 sm:mx-3 bg-black/50`}
                    ></div>
                    <h3 className="text-black/60 text-2xl underline">
                      {product.ENGSize.map((ENG) =>
                        ENG === decodeURI(params.size)
                          ? ENG.replace("mm", " мм").replace(".", ",")
                          : ""
                      )}
                    </h3>
                  </div>
                  <div className="flex flex-col justify-start items-start">
                    <p className="text-start text-lg hidden sm:block text-black/50 font-bold">
                      {product.isInStock}
                    </p>
                    <h3 className="font-bold text-xl pb-4 pt-3">
                      {product.price}
                    </h3>
                    <ShowButtonPrice />
                  </div>
                </div>
              </div>
            )}
          </>
        ))}
        <SizeSelector products={products} params={params} />
      </div>
      <div className="flex flex-col pt-6">
        {params.variant ? (
          ""
        ) : (
          <div className="w-full mb-4 flex flex-col justify-center items-center">
            <h1 className="text-3xl font-bold text-black text-center xl:text-start">
              <h1>{products[0].metaType}</h1>
            </h1>
            <div className="bg-black h-[5px] w-[80px] mt-4"></div>
          </div>
        )}
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4">
          {products.map(
            (product, index) =>
              params.type &&
              params.category &&
              !params.variant && (
                <DynamicItem
                  key={index}
                  img={product.img}
                  label={""}
                  sublabel={product.subLabel}
                  href={product.type}
                  category={product.category}
                  variety={product.variety}
                  id={product.id[0]}
                  size={product.ENGSize[0]}
                />
              )
          )}
        </div>
      </div>
    </>
  );
}
