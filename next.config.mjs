/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: '/port_anime', // 🔥 this MUST match your repo name
};

export default nextConfig;
