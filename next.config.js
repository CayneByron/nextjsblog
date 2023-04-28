/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    loader: 'default',
    domains: ['images.ctfassets.net'],
  },
  reactStrictMode: true,
  headers: {
    source: "/(.*)",
    headers: [
      {
        key: "Cache-Control",
        value: "no-cache",
      },
    ],
  },
}
