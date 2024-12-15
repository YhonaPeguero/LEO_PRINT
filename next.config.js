/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [],
    unoptimized: false,
  },
  reactStrictMode: true,
  swcMinify: true,
  poweredByHeader: false,
};

module.exports = nextConfig; 