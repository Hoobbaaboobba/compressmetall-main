export default async function getAllProducts(id1: string, id2: string) {
  const res = await fetch(`http://localhost:3000/api/products/${id1}/${id2}`);

  if (!res.ok) {
    throw new Error("Неудалось получить товар");
  }

  return res.json();
}
