import { getProducts } from "@/actions/getProducts";
import SearchContent from "@/components/Search/SearchContent";
import { Product } from "@prisma/client";

export default async function SearchPage() {
  const products: Product[] = await getProducts();

  return <SearchContent productsData={products} />;
}
