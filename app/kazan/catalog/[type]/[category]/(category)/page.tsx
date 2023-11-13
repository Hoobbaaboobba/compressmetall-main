import { Metadata, ResolvingMetadata } from "next";

import { Suspense } from "react";
import Loading from "./loading";
import DynamicPage from "@/components/Home/MainSection/DynamicPage";
import getAllProducts from "@/components/servers/getProducts";
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
    title: `${products[0].metaType} в Казани с доставкой по России | Купить ${products[0].metaType} в компании Компресс Металл`,
    description: `${products[0].metaType} в Казани по доступным ценам — ${products[0].metaType} в Казани от компании Компремм Металл. Заказать ${products[0].metaType} по выгодной цене с бесплатной доставкой по всей России и СНГ`,
    keywords: [
      `${decodeURI(products[0].label)} в Казани оптом и в розницу`,
      `Компресс металл ${decodeURI(
        products[0].metaType
      )} в Казани оптом и в розницу`,
      `Купить ${decodeURI(products[0].metaType)} в Казани оптом и в розницу`,
      `Металлопрокат ${products[0].metaType} в Казани оптом и в розницу`,
      `Компресс металл ${products[0].metaType} в Казани оптом и в розницу`,
      `Купить ${decodeURI(products[0].label)} в Казани оптом и в розницу`,
      `Металлопрокат ${decodeURI(
        products[0].metaType
      )} в Казани оптом и в розницу`,
    ],
    openGraph: {
      title: `${decodeURI(products[0].metaType)} в Казани | Компресс Металл`,
      description: `${products[0].metaType} по доступным ценам — ${products[0].metaType} в Казани от компании Компремм Металл. Заказать ${products[0].metaType} по выгодной цене с бесплатной доставкой по всей России и СНГ`,
      url: `https://www.kometal.ru/kazan/catalog/${params.type}/${params.category}`,
      siteName: "Компресс Металл",
      images: [
        {
          url: "/logo.png",
          width: 800,
          height: 600,
        },
      ],
    },
  };
}

export async function generateStaticParams() {
  return products.map((product: any) => ({
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
