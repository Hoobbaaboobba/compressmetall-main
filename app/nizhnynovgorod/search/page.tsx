"use client";

import { menuCatalog } from "@/components/Home/Header/menuData";
import SearchContent from "@/components/Search/SearchContent";
import getSearchProducts from "@/components/servers/getSearch";
import { useSearchParams } from "next/navigation";

export default async function SearchPage() {
  const search = useSearchParams();
  const query = search.get("query");

  const products: Promise<Product[]> = getSearchProducts();

  let currentProducts = await products;
  let oldProsucts = await products;

  if (query) {
    currentProducts = oldProsucts.filter(
      (item) =>
        item.label.toLocaleLowerCase().includes(query.toLocaleLowerCase()) ||
        item..toLocaleLowerCase().includes(query.toLocaleLowerCase())
      // item.ENGSize.map((sizes) =>
      //   sizes.toLocaleLowerCase().includes(query.toLocaleLowerCase())
      // ) ||
      // item.id.map((ids) =>
      //   ids.toLocaleLowerCase().includes(query.toLocaleLowerCase())
      // )
    );
  }

  return <SearchContent query={query || ""} productsData={currentProducts} />;
}
