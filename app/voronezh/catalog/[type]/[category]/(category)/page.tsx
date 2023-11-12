import { Metadata, ResolvingMetadata } from "next";

import { Suspense } from "react";
import Loading from "./loading";
import DynamicPage from "@/components/Home/MainSection/DynamicPage";
import getAllProducts from "@/components/servers/getProducts";

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
    title: `${products[0].metaType} ${products[0].title} Воронеже с доставкой по России | Купить ${products[0].metaType} в компании Компресс Металл`,
    description: `${products[0].metaType} ${products[0].title} Воронеже по доступным ценам — ${products[0].metaType} в Воронеже от компании Компремм Металл. Заказать ${products[0].metaType} по выгодной цене с бесплатной доставкой по всей России и СНГ`,
    keywords: [
      `${decodeURI(products[0].label)} в Воронеже оптом и в розницу`,
      `Компресс металл ${decodeURI(
        products[0].metaType
      )} в Воронеже оптом и в розницу`,
      `Купить ${decodeURI(products[0].metaType)} в Воронеже оптом и в розницу`,
      `Металлопрокат ${products[0].metaType} в Воронеже оптом и в розницу`,
      `Компресс металл ${products[0].metaType} в Воронеже оптом и в розницу`,
      `Купить ${decodeURI(products[0].label)} в Воронеже оптом и в розницу`,
      `Металлопрокат ${decodeURI(
        products[0].metaType
      )} в Воронеже оптом и в розницу`,
    ],
    openGraph: {
      title: `${decodeURI(products[0].metaType)} в Воронеже | Компресс Металл`,
      description: `${products[0].metaType}, ${products[0].title} по доступным ценам — ${products[0].metaType} в Воронеже от компании Компремм Металл. Заказать ${products[0].metaType} по выгодной цене с бесплатной доставкой по всей России и СНГ`,
      url: `https://kometal.ru/voronezh/catalog/${params.type}/${params.category}`,
      siteName: "Компресс Металл",
      images: [
        {
          url: "https://www.kometal.ru/_next/image?url=%2Flogo.png&w=256&q=75",
          width: 800,
          height: 600,
        },
      ],
    },
  };
}

export async function generateStaticParams() {
  const ids = await fetch("https://www.kometal.ru/api/products").then((res) =>
    res.json()
  );

  return ids.map((product: any) => ({
    type: product.type,
    category: product.category,
  }));
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
