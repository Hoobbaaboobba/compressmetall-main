import { searchProducts } from "@/actions/searchProducts";
import { menuCatalog } from "@/components/Home/Header/menuData";
import SearchContent from "@/components/Search/SearchContent";
import getSearchProducts from "@/components/servers/getSearch";
import { Product } from "@prisma/client";
import { useSearchParams } from "next/navigation";

export default async function SearchPage() {
  const products: Product[] = await searchProducts("Кабель");

  return (
    <div className="mt-[200px]">
      {products.map((item) => (
        <div>{item.label}</div>
      ))}
    </div>
  );
}
