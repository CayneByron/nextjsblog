/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    loader: 'default',
    domains: ['images.ctfassets.net'],
  },
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "no-cache",
          },
        ],
      },
    ];
  },
}
