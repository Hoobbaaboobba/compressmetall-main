import { Metadata, ResolvingMetadata } from "next";

import { Suspense } from "react";
import Loading from "./loading";
import getAllCategories from "@/components/servers/getCategories";
import DynamicPageCategories from "@/components/Home/MainSection/DynamicPageCategories";
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
  const categoriesData: Promise<Catergories[]> = getAllCategories(
    params.type || "",
    params.category || "",
    params.variant || "",
    params.id || "",
    params.size || ""
  );
  const categories = await categoriesData;

  return {
    title: `${decodeURI(categories[0].metaData)}, ${decodeURI(
      categories[0].label
    )} в Воронеже с доставкой по России | Купить ${
      categories[0].label
    } в компании Компресс Металл`,
    description: `${categories[0].metaData} в Воронеже по доступным ценам — ${categories[0].metaData} в Воронеже от компании Компремм Металл. Заказать ${categories[0].metaData} по выгодной цене с бесплатной доставкой по всей России и СНГ`,
    keywords: [
      `${decodeURI(categories[0].label)} в Воронеже оптом и в розницу`,
      `Компресс металл ${decodeURI(
        categories[0].metaData
      )} в Воронеже оптом и в розницу`,
      `Купить ${decodeURI(
        categories[0].metaData
      )} в Воронеже оптом и в розницу`,
      `Металлопрокат ${categories[0].metaData} в Воронеже оптом и в розницу`,
      `Компресс металл ${categories[0].metaData} в Воронеже оптом и в розницу`,
      `Купить ${decodeURI(
        categories[0].metaData
      )} в Воронеже оптом и в розницу`,
      `Металлопрокат ${decodeURI(
        categories[0].metaData
      )} в Воронеже оптом и в розницу`,
    ],
    openGraph: {
      title: `${decodeURI(categories[0].label)} в Воронеже | Компресс Металл`,
      description: `${categories[0].label}, ${categories[0].metaData} по доступным ценам — ${categories[0].metaData} в Воронеже от компании Компремм Металл. Заказать ${categories[0].metaData} по выгодной цене с бесплатной доставкой по всей России и СНГ`,
      url: `https://www.kometal.ru/voronezh/catalog/${params.type}/`,
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
  }));
}

export default async function MetalPage({ params }: Props) {
  const categoriesData: Promise<Catergories[]> = getAllCategories(
    params.type || "",
    params.category || "",
    params.variant || "",
    params.id || "",
    params.size || ""
  );

  return (
    <main className="mt-1 w-full">
      <Suspense fallback={<Loading />}>
        <DynamicPageCategories
          params={params}
          categories={categoriesData || ""}
        />
      </Suspense>
    </main>
  );
}
