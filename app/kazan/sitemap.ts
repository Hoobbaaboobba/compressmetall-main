import { products } from "../api/products/products";

export default function sitemap() {
  const city = "kazan";
  const baseUrl = "https://www.kometal.ru";

  return [
    { url: `${baseUrl}/${city}`, lastModified: new Date() },
    { url: `${baseUrl}/${city}/services`, lastModified: new Date() },
    { url: `${baseUrl}/${city}/information`, lastModified: new Date() },
    { url: `${baseUrl}/${city}/contacts`, lastModified: new Date() },
    { url: `${baseUrl}/${city}/clients`, lastModified: new Date() },
    { url: `${baseUrl}/${city}/catalog`, lastModified: new Date() },
    { url: `${baseUrl}/${city}/certificates`, lastModified: new Date() },
    { url: `${baseUrl}/${city}/about_company`, lastModified: new Date() },
    {
      url: `${baseUrl}/${city}/about_company/partners`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/${city}/about_company/requisites`,
      lastModified: new Date(),
    },
    ...products.map((link) => ({
      url: `${baseUrl}/${city}/catalog/${link.type}/`,
      lastModified: new Date(),
    })),
    ...products.map((link) => ({
      url: `${baseUrl}/${city}/catalog/${link.type}/${link.category}/`,
      lastModified: new Date(),
    })),
    ...products.map((link) => ({
      url: `${baseUrl}/${city}/catalog/${link.type}/${link.category}/${link.variety}/`,
      lastModified: new Date(),
    })),
  ];
}
