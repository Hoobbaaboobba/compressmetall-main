import { Metadata, ResolvingMetadata } from "next";

import DynamicPage from "@/components/Home/MainSection/DynamicPage";
import { Suspense } from "react";
import getAllProducts from "@/components/servers/getProducts";
import Loading from "./loading";
import { products } from "@/app/api/products/products";

type Props = {
  params: {
    type: string;
    category: string;
    variant: string;
    id: string;
    size: string;
  };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const productsData: Promise<Product[]> = getAllProducts(
    params.type || "",
    params.category || "",
    params.variant || "",
    params.id || "",
    params.size || ""
  );

  const products = await productsData;

  return {
    title: `${products.map((item) => item.subLabel)} ${decodeURI(
      params.id
    )} ${params.size
      .replace("mm", " мм")
      .replace(".", ",")} по цене ${products.map(
      (item) => item.price
    )} в Саратове с доставкой по всей России`,
    description: `${products[0].metaType} ${products[0].title} Саратове по доступным ценам — ${products[0].metaType} в Саратове от компании Компремм Металл. Заказать ${products[0].metaType} по выгодной цене с бесплатной доставкой по всей России и СНГ`,
    keywords: [
      decodeURI(products[0].label),
      `Компресс металл ${decodeURI(
        products[0].metaType
      )} в Саратове оптом и в розницу`,
      `Купить ${decodeURI(products[0].metaType)} Саратове оптом и в розницу`,
      `Металлопрокат ${products[0].metaType} Саратове оптом и в розницу`,
      `Компресс металл ${products[0].metaType} Саратове оптом и в розницу`,
      `Купить ${decodeURI(products[0].label)} Саратове оптом и в розницу`,
      `Металлопрокат ${decodeURI(
        products[0].metaType
      )} Саратове оптом и в розницу`,
    ],
    openGraph: {
      title: `${decodeURI(products[0].metaType)} в Саратове | Компресс Металл`,
      description: `${products[0].metaType} ${products[0].title} по доступным ценам — ${products[0].metaType} в Саратове от компании Компремм Металл. Заказать ${products[0].metaType} по выгодной цене с бесплатной доставкой по всей России и СНГ`,
      url: `http://localhost:3000/saratov/catalog/${params.type}/${params.category}/${params.variant}/${params.id}/${params.size}`,
      siteName: "Компресс Металл",
      images: [
        {
          url: `https://www.kometal.ru/_next/image?url=%2Flogo.png&w=256&q=75`,
          width: 800,
          height: 600,
        },
      ],
    },
  };
}

export async function generateStaticParams() {
  return products.map(
    (product: any) =>
      product.id.length > 1 &&
      product.ENGSize.length > 1 && {
        type: product.type,
        category: product.category,
        variant: product.variety,
        id: encodeURI(product.id[0]),
        size: encodeURI(product.ENGSize[0]),
      }
  );
}

export default async function MetalPage({ params }: Props) {
  const productsData: Promise<Product[]> = getAllProducts(
    params.type || "",
    params.category || "",
    params.variant || "",
    params.id || "",
    params.size || ""
  );

  return (
    <main className="mt-1 w-full">
      <Suspense fallback={<Loading />}>
        <DynamicPage promise={productsData || ""} params={params} />
      </Suspense>
    </main>
  );
}
