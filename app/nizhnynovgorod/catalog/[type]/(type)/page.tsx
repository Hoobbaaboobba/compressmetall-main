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

export const runtime = "edge";

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
    )} в Нижнем Новгороде с доставкой по России | Купить ${categories.map(
      (item) => decodeURI(item.label)
    )} в компании Компресс Металл`,
    description: `${products[0].metaType} ${products[0].title} Нижнем Новгороде по доступным ценам — ${products[0].metaType} в Нижнем Новгороде от компании Компремм Металл. Заказать ${products[0].metaType} по выгодной цене с бесплатной доставкой по всей России и СНГ`,
    keywords: [
      `${decodeURI(categories[0].label)} в Нижнем Новгороде оптом и в розницу`,
      `Компресс металл ${decodeURI(
        categories[0].metaData
      )} в Нижнем Новгороде оптом и в розницу`,
      `Купить ${decodeURI(
        categories[0].metaData
      )} в Нижнем Новгороде оптом и в розницу`,
      `Металлопрокат ${categories[0].metaData} в Нижнем Новгороде оптом и в розницу`,
      `Компресс металл ${categories[0].metaData} в Нижнем Новгороде оптом и в розницу`,
      `Купить ${decodeURI(
        categories[0].metaData
      )} в Нижнем Новгороде оптом и в розницу`,
      `Металлопрокат ${decodeURI(
        categories[0].metaData
      )} в Нижнем Новгороде оптом и в розницу`,
    ],
    openGraph: {
      title: `${decodeURI(
        categories[0].label
      )} в Нижнем Новгороде | Компресс Металл`,
      description: `${categories[0].label}, ${categories[0].metaData} по доступным ценам — ${products[0].metaType} в Нижнем Новгороде от компании Компремм Металл. Заказать ${products[0].metaType} по выгодной цене с бесплатной доставкой по всей России и СНГ`,
      url: `https://kometal.ru/nizhnynovgorod/catalog/${params.type}/`,
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

// export async function generateStaticParams() {
//   const ids = products;

//   const links = ids.map((product) =>
//     product.id.map((link) =>
//       product.ENGSize.map((sizes) => ({
//         id: `/moscow/${product.type}/${product.category}/${link}/${sizes}`,
//       }))
//     )
//   );

//   return [...links];
// }

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
