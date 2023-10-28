import CatalogSelectorPage from "@/components/Catalog/CatalogSelectorPage";
import getAllProducts from "@/components/servers/getProducts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Металлопрокат оптом и в розницу в Москве | Купить металл в компании Копресс металл недорого | Компресс металл | Каталог",
  description: "Продажа металлопроката в по всей территории России и СНГ",
};

type Props = {
  params: {
    type: string;
    category: string;
    variant: string;
    id: string;
    size: string;
  };
};

export default async function Catalog({ params }: Props) {
  const productsData: Promise<Product[]> = getAllProducts(
    params.type || "",
    params.category || "",
    params.variant || "",
    params.id || "",
    params.size || ""
  );
  return <CatalogSelectorPage params={params} promise={productsData} />;
}
