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
    )} в Казани с доставкой по всей России`,
    description: `${products[0].metaType} ${products[0].title} Казани по доступным ценам — ${products[0].metaType} в Казани от компании Компремм Металл. Заказать ${products[0].metaType} по выгодной цене с бесплатной доставкой по всей России и СНГ`,
    keywords: [
      decodeURI(products[0].label),
      `Компресс металл ${decodeURI(
        products[0].metaType
      )} в Казани оптом и в розницу`,
      `Купить ${decodeURI(products[0].metaType)} Казани оптом и в розницу`,
      `Металлопрокат ${products[0].metaType} Казани оптом и в розницу`,
      `Компресс металл ${products[0].metaType} Казани оптом и в розницу`,
      `Купить ${decodeURI(products[0].label)} Казани оптом и в розницу`,
      `Металлопрокат ${decodeURI(
        products[0].metaType
      )} Казани оптом и в розницу`,
    ],
    openGraph: {
      title: `${decodeURI(products[0].metaType)} в Казани | Компресс Металл`,
      description: `${products[0].metaType} ${products[0].title} по доступным ценам — ${products[0].metaType} в Казани от компании Компремм Металл. Заказать ${products[0].metaType} по выгодной цене с бесплатной доставкой по всей России и СНГ`,
      url: `http://localhost:3000/kazan/catalog/${params.type}/${params.category}/${params.variant}/${params.id}/${params.size}`,
      siteName: "Компресс Металл",
      images: [
        {
          url: `https://www.kometal.ru/_next/image?url=%2Flogo.png&w=256&q=75`,
          width: 800,
          height: 600,
        },
      ],
    },
  };
}

// export async function generateStaticParams() {
//   const ids = await fetch("http://localhost:3000/api/products").then((res) =>
//     res.json()
//   );

//   return ids.map((product: any) => ({
//     type: product.type,
//     category: product.category,
//     variant: product.variety,
//   }));
// }

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