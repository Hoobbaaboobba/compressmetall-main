import { Metadata, ResolvingMetadata } from "next";

import { ids } from "@/components/pagesLinks";
import DynamicPage from "@/components/Home/MainSection/DynamicPage";
import { Suspense } from "react";
import getAllProducts from "@/components/servers/getProducts";
import Loading from "../loading";
import { products } from "@/app/api/products/products";

type Props = {
  params: {
    id: string;
  };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const productsData: Promise<Product[]> = getAllProducts(
    params.id[0] || "",
    params.id[1] || ""
  );

  const products = await productsData;

  return {
    title: `${products.map((item) => item.title)} Москве с доставкой по России`,
    description: decodeURI(params.id[2]),
    keywords: [
      decodeURI(params.id[1]),
      `Компресс металл ${decodeURI(params.id[1])}`,
      `Купить ${decodeURI(params.id[1])}`,
      `Металлопрокат ${decodeURI(params.id[1])}`,
      decodeURI(params.id[2]),
      `Компресс металл ${decodeURI(params.id[2])}`,
      `Купить ${decodeURI(params.id[2])}`,
      `Металлопрокат ${decodeURI(params.id[2])}`,
    ],
    openGraph: {
      title: decodeURI(params.id[1]),
      description: decodeURI(params.id[2]),
    },
  };
}

export async function generateStaticParams() {
  const ids = products;

  return ids.map((item) => {
    return item;
  });
}
export default async function MetalPage({ params }: Props) {
  const productsData: Promise<Product> = getAllProducts(
    params.id[0] || "",
    params.id[1] || ""
  );

  return (
    <main className="mt-8 w-full">
      <Suspense fallback={<Loading />}>
        {/* @ts-expect-error Server Component */}
        <DynamicPage promise={productsData} />
      </Suspense>
    </main>
  );
}
