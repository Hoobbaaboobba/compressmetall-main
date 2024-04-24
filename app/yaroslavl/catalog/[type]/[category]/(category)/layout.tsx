import { getMenuCategory } from "@/actions/getMenuCategory";
import { getProducts } from "@/actions/getProducts";
import { CategoryLayoutModel } from "@/components/Layouts/CategoryLayout";
import { MenuCategoryLinks, Product } from "@prisma/client";

export default async function CategoryLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: {
    type: string;
    category: string;
    variant: string;
    id: string;
    size: string;
  };
}) {
  const products: Product[] = await getProducts(params.type, params.category);
  const categories: MenuCategoryLinks[] | undefined = await getMenuCategory(
    params.type
  );
  return (
    <CategoryLayoutModel
      products={products}
      categories={categories}
      params={params}
      children={children}
    />
  );
}
