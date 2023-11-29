export default async function getSearchProducts() {
  const res = await fetch(`https://kometal-api.vercel.app/api/products/`);

  if (!res.ok) {
    throw new Error("Неудалось получить товар");
  }
  return res.json();
}
