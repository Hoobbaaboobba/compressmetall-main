import Image from "next/image";
import ShowButtonPrice from "./ShowPriceBottom";
import SizeSelector from "./SizeSelector";
import QueryLabel from "./QueryLabel";
import { getProducts } from "@/actions/getProducts";
import { ImageDialog } from "@/components/AboutCompany/Blagodarnosti/ImageDialog";
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import { SlashIcon } from "@radix-ui/react-icons";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import HyperLinks from "./HyperLinks";

type Props = {
  params: {
    type: string;
    category: string;
    variant: string;
    id: string;
    size: string;
  };
};

export default async function DynamicPage({ params }: Props) {
  const products = await getProducts(
    params.type,
    params.category,
    params.variant
  );

  return (
    <div className="max-w-[1300px] flex flex-col gap-4">
      <div className="relative w-full mt-4 lg:mt-auto flex flex-col-reverse lg:flex-row justify-center text-center sm:items-center px-6 xl:px-12">
        <div className="w-full h-full flex flex-col gap-6 justify-center items-start pt-4">
          <div className="flex flex-col sm:flex-col gap-2 justify-center sm:justify-start items-center sm:items-start w-full">
            <HyperLinks
              categoryTitle={products[0].pageTitle}
              categoryLink={products[0].category}
              typeLink={products[0].type}
              variantTitle={products[0].label}
              variantLink={products[0].variety}
              last
            />
            <div className="text-3xl font-bold text-center md:text-start text-black/80">
              <QueryLabel />
            </div>
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
            />
            <h3 className="text-black/60 text-2xl underline">
              {products[0].sizes.map((ENG) =>
                ENG === decodeURI(params.size)
                  ? ENG.replace("mm", " мм").replace(".", ",")
                  : ""
              )}
            </h3>
          </div>
          <div className="w-full flex flex-col justify-center items-center sm:justify-start sm:items-start">
            <p className="text-start text-lg hidden sm:block text-black/50 font-bold">
              {products[0].isInStock}
            </p>
            <h3 className="font-bold text-xl pb-4 pt-3 text-center">
              {products[0].price}
            </h3>
            <ShowButtonPrice />
            <SizeSelector products={products} params={params} />
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
