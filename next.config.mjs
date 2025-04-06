/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: '/port_anime', // ⛔️ Replace with your GitHub repo name
};

export default nextConfig;
