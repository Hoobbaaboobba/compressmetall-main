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
    )} в Ярославле с доставкой по России | Купить ${categories.map((item) =>
      decodeURI(item.label)
    )} в компании Компресс Металл`,
    description: `${products[0].metaType} ${products[0].title} Ярославле по доступным ценам — ${products[0].metaType} в Ярославле от компании Компремм Металл. Заказать ${products[0].metaType} по выгодной цене с бесплатной доставкой по всей России и СНГ`,
    keywords: [
      `${decodeURI(categories[0].label)} в Ярославле оптом и в розницу`,
      `Компресс металл ${decodeURI(
        categories[0].metaData
      )} в Ярославле оптом и в розницу`,
      `Купить ${decodeURI(
        categories[0].metaData
      )} в Ярославле оптом и в розницу`,
      `Металлопрокат ${categories[0].metaData} в Ярославле оптом и в розницу`,
      `Компресс металл ${categories[0].metaData} в Ярославле оптом и в розницу`,
      `Купить ${decodeURI(
        categories[0].metaData
      )} в Ярославле оптом и в розницу`,
      `Металлопрокат ${decodeURI(
        categories[0].metaData
      )} в Ярославле оптом и в розницу`,
    ],
    openGraph: {
      title: `${decodeURI(categories[0].label)} в Ярославле | Компресс Металл`,
      description: `${categories[0].label}, ${categories[0].metaData} по доступным ценам — ${products[0].metaType} в Ярославле от компании Компремм Металл. Заказать ${products[0].metaType} по выгодной цене с бесплатной доставкой по всей России и СНГ`,
      url: `https://kometal.ru/yaroslavl/catalog/${params.type}/`,
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
