export default function sitemap() {
  const baseUrl = "https://www.kometal.ru";

  return [
    { url: baseUrl, lastModified: new Date() },
    { url: `${baseUrl}/services`, lastModified: new Date() },
    { url: `${baseUrl}/information`, lastModified: new Date() },
    { url: `${baseUrl}/contacts`, lastModified: new Date() },
    { url: `${baseUrl}/clients`, lastModified: new Date() },
    { url: `${baseUrl}/catalog`, lastModified: new Date() },
    { url: `${baseUrl}/certificates`, lastModified: new Date() },
    { url: `${baseUrl}/about_company`, lastModified: new Date() },
    {
      url: `${baseUrl}/about_company/partners`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/about_company/requisites`,
      lastModified: new Date(),
    },
  ];
}
