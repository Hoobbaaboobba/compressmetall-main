export default async function getAllProducts(
  type?: string | "",
  variety?: string | "",
  category?: string | "",
  id?: string | "",
  size?: string | ""
) {
  const res = await fetch(
    `https://www.kometal.ru/api/products/${type && `${type}/`}${
      variety && `${variety}/`
    }${category && `${category}/`}${id && `${id}/`}${size && `${size}/`}`
  );

  if (!res.ok) {
    throw new Error("Неудалось получить товар");
  }

  return res.json();
}
