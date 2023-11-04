export default async function getSearchProducts() {
  const res = await fetch(`http://localhost:3000/api/products/`);

  if (!res.ok) {
    throw new Error("Неудалось получить товар");
  }
  return res.json();
}
