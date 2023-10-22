export default async function getAllCategories(
  type: string | "",
  variety: string | "",
  category: string | "",
  id: string | "",
  size: string | ""
) {
  const res = await fetch(
    `http://localhost:3000/api/products/${type}/${variety}/${category}/${id}/${size}`
  );

  if (!res.ok) {
    throw new Error("Неудалось получить товар");
  }

  return res.json();
}
