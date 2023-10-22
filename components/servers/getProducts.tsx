export default async function getAllProducts(
  type?: string | "",
  variety?: string | "",
  category?: string | "",
  id?: string | "",
  size?: string | ""
) {
  const res = await fetch(
    `https://kometal.ru/api/products/${type}/${variety}/${category}/${id}/${size}`
  );

  if (!res.ok) {
    throw new Error("Неудалось получить товар");
  }

  return res.json();
}
