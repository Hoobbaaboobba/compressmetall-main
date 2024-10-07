import { Metadata, ResolvingMetadata } from "next";

import { Suspense } from "react";
import Loading from "./loading";
import { getProducts } from "@/actions/getProducts";
import { Product } from "@prisma/client";
import DynamicPageCategories from "@/components/Home/MainSection/DynamicPageCategories";

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

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const products = await getProducts(
    params.type,
    params.category,
    params.variant
  );

  return {
    title: `${products[0].pageTitle} в Туле с доставкой по России | Купить ${products[0].pageTitle} в компании Компресс Металл`,
    description: `${products[0].pageTitle} в Туле по доступным ценам — ${products[0].pageTitle} в Туле от компании Компремм Металл. Заказать ${products[0].pageTitle} по выгодной цене с бесплатной доставкой по всей России и СНГ`,
    keywords: [
      `${products[0].label} в Туле оптом и в розницу`,
      `Компресс металл ${decodeURI(
        products[0].pageTitle
      )} в Туле оптом и в розницу`,
      `Купить ${decodeURI(products[0].pageTitle)} в Туле оптом и в розницу`,
      `Металлопрокат ${products[0].pageTitle} в Туле оптом и в розницу`,
      `Компресс металл ${products[0].pageTitle} в Туле оптом и в розницу`,
      `Купить ${products[0].label} в Туле оптом и в розницу`,
      `Металлопрокат ${decodeURI(
        products[0].pageTitle
      )} в Туле оптом и в розницу`,
    ],
    openGraph: {
      title: `${decodeURI(products[0].pageTitle)} в Туле | Компресс Металл`,
      description: `${products[0].pageTitle} по доступным ценам — ${products[0].pageTitle} в Туле от компании Компремм Металл. Заказать ${products[0].pageTitle} по выгодной цене с бесплатной доставкой по всей России и СНГ`,
      url: `https://www.kometal.ru/tula/catalog/${params.type}/${params.category}`,
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

// export async function generateStaticParams({ params }: Props) {
//   const products = await getProducts(
//     params.type,
//     params.category,
//     params.variant
//   );

//   return products.map((product) => ({
//     type: product.type,
//     category: product.category,
//   }));
// }

export default async function MetalPage({ params, searchParams }: Props) {
  const products: Product[] = await getProducts(params.type, params.category);
  return (
    <main className="mt-1 w-full">
      <Suspense fallback={<Loading />}>
        <DynamicPageCategories
          products={products}
          searchParams={searchParams}
        />
      </Suspense>
    </main>
  );
}
