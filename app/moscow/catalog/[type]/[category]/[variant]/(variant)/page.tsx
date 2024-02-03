import { Metadata, ResolvingMetadata } from "next";

import { Suspense } from "react";
import Loading from "./loading";
import DynamicVariants from "@/components/Home/MainSection/DynamicVariants";
import { products } from "@/app/api/products/products";
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
    title: `${products[0].label} по цене ${products[0].price} в Москве с доставкой по всей России`,
    description: `${products[0].label} в Москве по доступным ценам — ${products[0].label} в Москве от компании Компремм Металл. Заказать ${products[0].label} по выгодной цене с бесплатной доставкой по всей России и СНГ`,
    keywords: [
      `${products[0].label}`,
      `Компресс металл ${products[0].label} в Москве оптом и в розницу`,
      `Купить ${products[0].label} в Москве оптом и в розницу`,
      `Металлопрокат ${products[0].label} в Москве оптом и в розницу`,
      `Компресс металл ${products[0].label} в Москве оптом и в розницу`,
      `Купить ${products[0].label} в Москве оптом и в розницу`,
      `Металлопрокат ${products[0].label} в Москве оптом и в розницу`,
    ],
    openGraph: {
      title: `${products[0].label} в Москве | Компресс Металл`,
      description: `${products[0].label} по доступным ценам — ${products[0].label} в Москве от компании Компремм Металл. Заказать ${products[0].label} по выгодной цене с бесплатной доставкой по всей России и СНГ`,
      url: `https://www.kometal.ru/moscow/catalog/${params.type}/${params.category}/${params.variant}/${params.id}/${params.size}`,
      siteName: "Компресс Металл",
      images: [
        {
          url: `/logo.png`,
          width: 800,
          height: 600,
        },
      ],
    },
  };
}

export async function generateStaticParams({ params }: Props) {
  const products = await getProducts();

  return products.map((product) => ({
    type: product.type,
    category: product.category,
    variant: product.variety,
  }));
}

export default async function MetalPage({ params }: Props) {
  return (
    <main className="mt-1 w-full">
      <Suspense fallback={<Loading />}>
        <DynamicVariants params={params} />
      </Suspense>
    </main>
  );
}
