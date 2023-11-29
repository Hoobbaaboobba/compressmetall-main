import { Metadata, ResolvingMetadata } from "next";

import DynamicPage from "@/components/Home/MainSection/DynamicPage";
import { Suspense } from "react";
import getAllProducts from "@/components/servers/getProducts";
import Loading from "./loading";
import { products } from "@/app/api/products/products";
import DynamicVariants from "@/components/Home/MainSection/DynamicVariants";

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
  const productsData: Promise<Product[]> = getAllProducts(
    params.type || "",
    params.category || "",
    params.variant || "",
    params.id || "",
    params.size || ""
  );

  const products = await productsData;

  return {
    title: `${products.map(
      (item) => item.subLabel
    )} в Саратове с доставкой по всей России`,
    description: `${products[0].metaType} ${products[0].title} в Саратове по доступным ценам — ${products[0].metaType} в Саратове от компании Компремм Металл. Заказать ${products[0].metaType} по выгодной цене с бесплатной доставкой по всей России и СНГ`,
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
      title: `${decodeURI(products[0].metaType)} в Саратове`,
      description: `${products[0].metaType} ${products[0].title} по доступным ценам — ${products[0].metaType} в Саратове от компании Компремм Металл. Заказать ${products[0].metaType} по выгодной цене с бесплатной доставкой по всей России и СНГ`,
      url: `https://www.kometal.ru/saratov/catalog/${params.type}/${params.category}/${params.variant}/${params.id}/${params.size}`,
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
  return products.map((product: any) => ({
    type: product.type,
    category: product.category,
    variant: product.variety,
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
        <DynamicVariants promise={productsData || ""} />
      </Suspense>
    </main>
  );
}
