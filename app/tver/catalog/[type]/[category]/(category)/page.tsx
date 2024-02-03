import { Metadata, ResolvingMetadata } from "next";

import { Suspense } from "react";
import Loading from "./loading";
import DynamicPage from "@/components/Home/MainSection/DynamicPage";
import { getProducts } from "@/actions/getProducts";

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
  const products = await getProducts(
    params.type,
    params.category,
    params.variant
  );

  return {
    title: `${products[0].pageTitle} в Твери с доставкой по России | Купить ${products[0].pageTitle} в компании Компресс Металл`,
    description: `${products[0].pageTitle} в Твери по доступным ценам — ${products[0].pageTitle} в Твери от компании Компремм Металл. Заказать ${products[0].pageTitle} по выгодной цене с бесплатной доставкой по всей России и СНГ`,
    keywords: [
      `${products[0].label} в Твери оптом и в розницу`,
      `Компресс металл ${decodeURI(
        products[0].pageTitle
      )} в Твери оптом и в розницу`,
      `Купить ${decodeURI(products[0].pageTitle)} в Твери оптом и в розницу`,
      `Металлопрокат ${products[0].pageTitle} в Твери оптом и в розницу`,
      `Компресс металл ${products[0].pageTitle} в Твери оптом и в розницу`,
      `Купить ${products[0].label} в Твери оптом и в розницу`,
      `Металлопрокат ${decodeURI(
        products[0].pageTitle
      )} в Твери оптом и в розницу`,
    ],
    openGraph: {
      title: `${decodeURI(products[0].pageTitle)} в Твери | Компресс Металл`,
      description: `${products[0].pageTitle} по доступным ценам — ${products[0].pageTitle} в Твери от компании Компремм Металл. Заказать ${products[0].pageTitle} по выгодной цене с бесплатной доставкой по всей России и СНГ`,
      url: `https://www.kometal.ru/tver/catalog/${params.type}/${params.category}`,
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

export async function generateStaticParams({ params }: Props) {
  const products = await getProducts(
    params.type,
    params.category,
    params.variant
  );

  return products.map((product) => ({
    type: product.type,
    category: product.category,
  }));
}

export default async function MetalPage({ params }: Props) {
  return (
    <main className="mt-1 w-full">
      <Suspense fallback={<Loading />}>
        <DynamicPage params={params} />
      </Suspense>
    </main>
  );
}
