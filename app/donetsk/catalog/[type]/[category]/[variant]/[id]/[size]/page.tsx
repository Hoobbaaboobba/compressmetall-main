import { Metadata, ResolvingMetadata } from "next";

import DynamicPage from "@/components/Home/MainSection/DynamicPage";
import { Suspense } from "react";
import Loading from "./loading";
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
    title: `${products[0].label} ${decodeURI(params.id)} ${params.size
      .replace("mm", " мм")
      .replace(".", ",")} по цене ${
      products[0].price
    } в Донецке с доставкой по всей России`,
    description: `${products[0].label} в Донецке по доступным ценам — ${products[0].label} в Донецке от компании Компремм Металл. Заказать ${products[0].label} по выгодной цене с бесплатной доставкой по всей России и СНГ`,
    keywords: [
      `${products[0].label}`,
      `Компресс металл ${products[0].label} в Донецке оптом и в розницу`,
      `Купить ${products[0].label} в Донецке оптом и в розницу`,
      `Металлопрокат ${products[0].label} в Донецке оптом и в розницу`,
      `Компресс металл ${products[0].label} в Донецке оптом и в розницу`,
      `Купить ${products[0].label} в Донецке оптом и в розницу`,
      `Металлопрокат ${products[0].label} в Донецке оптом и в розницу`,
    ],
    openGraph: {
      title: `${products[0].label} в Донецке | Компресс Металл`,
      description: `${products[0].label} по доступным ценам — ${products[0].label} в Донецке от компании Компремм Металл. Заказать ${products[0].label} по выгодной цене с бесплатной доставкой по всей России и СНГ`,
      url: `https://www.kometal.ru/donetsk/catalog/${params.type}/${params.category}/${params.variant}/${params.id}/${params.size}`,
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

export async function generateStaticParams() {
  const products = await getProducts();

  return products.map(
    (product) =>
      product.marks.length > 1 &&
      product.sizes.length > 1 && {
        type: product.type,
        category: product.category,
        variant: product.variety,
        id: product.marks[0],
        size: product.sizes[0],
      }
  );
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
