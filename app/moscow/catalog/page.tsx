import CatalogSelectorPage from "@/components/Catalog/CatalogSelectorPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Металлопрокат оптом и в розницу в Москве | Купить металл в компании Копресс металл недорого | Компресс металл | Каталог",
  description: "Продажа металлопроката в по всей территории России и СНГ",
};

export default function Catalog() {
  return <CatalogSelectorPage />;
}
