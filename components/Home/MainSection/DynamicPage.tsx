import Image from "next/image";
import ShowButtonPrice from "./ShowPriceBottom";
import SizeSelector from "./SizeSelector";
import { getProducts } from "@/actions/getProducts";
import { ImageDialog } from "@/components/AboutCompany/Blagodarnosti/ImageDialog";
import HyperLinks from "./HyperLinks";
import { Badge } from "@/components/ui/badge";
import { searchProducts } from "@/actions/searchProducts";

type Props = {
  params: {
    type: string;
    category: string;
    variant: string;
    id: string;
    size: string;
  };
  searchParams: { [key: string]: string | string[] | undefined };
};

export default async function DynamicPage({ params, searchParams }: Props) {
  const products = await getProducts(
    params.type,
    params.category,
    params.variant
  );

  return (
    <div className="max-w-[1300px] flex flex-col gap-4">
      <div className="relative w-full mt-4 lg:mt-auto flex flex-col-reverse lg:flex-row justify-center text-center sm:items-center px-6 xl:px-12">
        <div className="w-full h-full flex flex-col justify-center items-start pt-4">
          <div className="flex flex-col sm:flex-col gap-2 justify-center sm:justify-start items-center sm:items-start w-full">
            <HyperLinks
              categoryTitle={products[0].pageTitle}
              categoryLink={products[0].category}
              typeLink={products[0].type}
              variantTitle={products[0].label}
              variantLink={products[0].variety}
              last
            />
            <div className="text-2xl md:text-3xl font-bold text-center md:text-start text-black/80">
              <h1>{searchParams.label}</h1>
            </div>
            <ul className="flex h-full w-full flex-col gap-2 mt-4">
              <li className="flex">
                <span className="dash">Марка</span>
                <span className="order-2">
                  {decodeURI(params.id)
                    .replace(".", ",")
                    .replace("|", "/")
                    .replace("[", "/")}
                </span>
              </li>
              <li className="flex">
                <span className="dash">{products[0].firstTypeOfSize}</span>
                <span className="order-2">
                  {decodeURI(
                    params.size
                      .replace("mm", " мм")
                      .replace(".", ",")
                      .replace("%2B", "+")
                  )}
                </span>
              </li>
              {searchParams.secondsize && (
                <li className="flex">
                  <span className="dash">{products[0].secondTypeOfSize}</span>
                  <span className="order-2">
                    {searchParams.secondsize
                      .toString()
                      .replace("mm", " мм")
                      .replace(".", ",")}
                  </span>
                </li>
              )}
              {searchParams.thirdsize && (
                <li className="flex">
                  <span className="dash">{products[0].thirdTypeOfSize}</span>
                  <span className="order-2">
                    {searchParams.thirdsize
                      .toString()
                      .replace("mm", " мм")
                      .replace(".", ",")}
                  </span>
                </li>
              )}
              {searchParams.forthsize && (
                <li className="flex">
                  <span className="dash">{products[0].forthTypeOfSize}</span>
                  <span className="order-2">
                    {searchParams.forthsize
                      .toString()
                      .replace("mm", " мм")
                      .replace(".", ",")}
                  </span>
                </li>
              )}
              {searchParams.fifthsize && (
                <li className="flex">
                  <span className="dash">{products[0].fifthtypeOfSize}</span>
                  <span className="order-2">
                    {searchParams.fifthsize
                      .toString()
                      .replace("mm", " мм")
                      .replace(".", ",")}
                  </span>
                </li>
              )}
              <li className="flex">
                <span className="dash">В наличии</span>
                <Badge
                  variant="outline"
                  className="ml-2 bg-orange-text text-white border-none"
                >
                  {products[0].isInStock}
                </Badge>
              </li>
            </ul>
            <SizeSelector
              second={searchParams.secondsize?.toString()}
              third={searchParams.thirdsize?.toString()}
              forth={searchParams.forthsize?.toString()}
              fifth={searchParams.fifthsize?.toString()}
              products={products}
              params={params}
            />
          </div>
          <div className="w-full flex flex-col justify-center items-center sm:justify-start sm:items-start">
            <p className="font-bold text-xl pb-4 pt-3 text-center text-black/80">
              Цена: {products[0].price}
            </p>
            <ShowButtonPrice />
          </div>
        </div>
        <div className="w-full flex justify-center items-center">
          <ImageDialog
            width={462}
            height={641}
            image={`${products[0].image}.png`}
            title={params.id}
          >
            <Image
              src={require(`../../../public/${products[0].image}.png`)}
              alt={params.id}
              width={500}
              height={400}
              priority
              className="border border-light-gray rounded-md lg:hover:shadow-md transition cursor-zoom-in mt-4"
              placeholder="blur"
            />
          </ImageDialog>
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
    </div>
  );
}
