import { NextResponse } from "next/server";
import { products } from "../products";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  let currentProducts = products;

  if (params.id[1]) {
    currentProducts = products.filter((product) =>
      product.id.toLocaleLowerCase().includes(params.id[1].toLocaleLowerCase())
    );
  }

  return NextResponse.json(currentProducts);
}
