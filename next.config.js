/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "standalone",
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'mc.yandex.ru',
      },
    ],
  },

};

module.exports = nextConfig;
