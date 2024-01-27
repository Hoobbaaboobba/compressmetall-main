import Image from "next/image";
import ShowButtonPrice from "./ShowPriceBottom";
import SizeSelector from "./SizeSelector";
import DynamicItem from "./dynamicItem";
import HyperLinks from "./HyperLinks";
import QueryLabel from "./QueryLabel";
import { useEffect } from "react";
import ReactGA from "react-ga";

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

  // useEffect(() => {
  //   ReactGA.pageview(window.location.pathname);

  //   ReactGA.event({
  //     category: products[0].title,
  //     action: "Page view",
  //     label: products[0].label,
  //   });
  // }, []);

  // const router = useRouter();

  // if (
  //   params.variant !== products[0].variety ||
  //   products[0].id.find((ids) => ids === params.id) === undefined ||
  //   products[0].ENGSize.find((sizes) => sizes === params.size) === undefined
  // ) {
  //   return
  // }

  return (
    <>
      <div className="max-w-[1300px] flex flex-col gap-4">
        {products.map((product, index) => (
          <>
            {params.variant && (
              <>
                <div
                  key={index}
                  className="relative w-full mt-4 lg:mt-auto flex flex-col-reverse lg:flex-row justify-center text-center sm:items-center px-6 xl:px-12"
                >
                  <div className="w-full h-full flex flex-col gap-6 justify-center items-start pt-4">
                    <HyperLinks
                      categoryTitle={product.metaType}
                      variantTitle={product.subLabel}
                      pageTitle=""
                    />
                    <div className="flex flex-col sm:flex-col gap-2 justify-center sm:justify-start items-center sm:items-start w-full">
                      <h1 className="text-3xl font-bold text-center md:text-start text-black/80">
                        <QueryLabel />
                      </h1>
                      <div
                        className={`block sm:hidden w-4 h-1 sm:w-1 sm:h-4 sm:mx-3 bg-black/50`}
                      ></div>
                      <h2 className="text-black/60 text-2xl underline">
                        {decodeURI(params.id)
                          .replace(".", ",")
                          .replace("|", "/")
                          .replace("[", "/")}
                      </h2>
                      <div
                        className={`block sm:hidden w-4 h-1 sm:w-1 sm:h-4 sm:mx-3 bg-black/50`}
                      ></div>
                      <h3 className="text-black/60 text-2xl underline">
                        {product.ENGSize.map((ENG) =>
                          ENG === decodeURI(params.size)
                            ? ENG.replace("mm", " мм").replace(".", ",")
                            : ""
                        )}
                      </h3>
                    </div>
                    <div className="w-full flex flex-col justify-center items-center sm:justify-start sm:items-start">
                      <p className="text-start text-lg hidden sm:block text-black/50 font-bold">
                        {product.isInStock}
                      </p>
                      <h3 className="font-bold text-xl pb-4 pt-3 text-center">
                        {product.price}
                      </h3>
                      <ShowButtonPrice />
                      <SizeSelector products={products} params={params} />
                    </div>
                  </div>
                  <div className="w-full flex justify-center items-center">
                    <Image
                      src={require(`../../../public/${product.img}.png`)}
                      alt={product.label}
                      width={500}
                      height={400}
                      priority
                      className="border border-light-gray rounded-md lg:hover:shadow-md transition cursor-zoom-in mt-4"
                      placeholder="blur"
                    />
                  </div>
                </div>
                {/* <hr className="border border-light-gray my-2" /> */}
                <div className="w-full px-6 xl:px-12 mt-4">
                  <div className="w-full mb-4 flex flex-col justify-center items-center">
                    <h1 className="text-3xl font-bold text-black text-center xl:text-start">
                      Описание
                    </h1>
                    <div className="bg-black h-[5px] w-[80px] mt-4"></div>
                  </div>
                  <p className="text-black">{products[0].description}</p>
                </div>
              </>
            )}
          </>
        ))}
      </div>
      <div className="flex flex-col pt-6">
        {params.variant ? (
          ""
        ) : (
          <>
            <div className="w-full mb-4 flex flex-col justify-center items-center">
              <h1 className="text-3xl font-bold text-black text-center xl:text-start">
                {products[0].metaType}
              </h1>
              <div className="bg-black h-[5px] w-[80px] mt-4"></div>
            </div>
            <HyperLinks categoryTitle={products[0].metaType} lastCategory />
          </>
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
                  sublabel={product.subLabel[0]}
                  href={product.type}
                  category={product.category}
                  variety={product.variety}
                />
              )
          )}
        </div>
      </div>
    </>
  );
}
