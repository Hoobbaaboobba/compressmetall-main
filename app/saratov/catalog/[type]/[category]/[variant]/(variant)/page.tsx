import { Metadata, ResolvingMetadata } from "next";

import { Suspense } from "react";
import Loading from "./loading";
import DynamicVariants from "@/components/Home/MainSection/DynamicVariants";
import { getProducts } from "@/actions/getProducts";
import { Product } from "@prisma/client";

type Props = {
  params: {
    type: string;
    category: string;
    variant: string;
    id: string;
    size: string;
  };
  searchParams?: { [key: string]: string | string[] | undefined };
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
    title: `${products[0].label} по цене ${products[0].price} в Саратове с доставкой по всей России`,
    description: `${products[0].label} в Саратове по доступным ценам — ${products[0].label} в Саратове от компании Компремм Металл. Заказать ${products[0].label} по выгодной цене с бесплатной доставкой по всей России и СНГ`,
    keywords: [
      `${products[0].label}`,
      `Компресс металл ${products[0].label} в Саратове оптом и в розницу`,
      `Купить ${products[0].label} в Саратове оптом и в розницу`,
      `Металлопрокат ${products[0].label} в Саратове оптом и в розницу`,
      `Компресс металл ${products[0].label} в Саратове оптом и в розницу`,
      `Купить ${products[0].label} в Саратове оптом и в розницу`,
      `Металлопрокат ${products[0].label} в Саратове оптом и в розницу`,
    ],
    openGraph: {
      title: `${products[0].label} в Саратове | Компресс Металл`,
      description: `${products[0].label} по доступным ценам — ${products[0].label} в Саратове от компании Компремм Металл. Заказать ${products[0].label} по выгодной цене с бесплатной доставкой по всей России и СНГ`,
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

// export async function generateStaticParams({ params }: Props) {
//   const products = await getProducts(
//     params.type,
//     params.category,
//     params.variant
//   );

//   return products.map((product) => ({
//     type: product.type,
//     category: product.category,
//     variant: product.variety,
//   }));
// }

export default async function MetalPage({ params, searchParams }: Props) {
  const products: Product[] = await getProducts(
    params.type,
    params.category,
    params.variant
  );
  return (
    <main className="mt-1 w-full">
      <Suspense fallback={<Loading />}>
        <DynamicVariants products={products} searchParams={searchParams} />
      </Suspense>
    </main>
  );
}
