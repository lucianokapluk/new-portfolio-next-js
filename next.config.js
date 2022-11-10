/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true
  },
  images: {
    domains: ['picsum.photos', "lh3.googleusercontent.com"]
  },
  reactStrictMode: true
}

module.exports = nextConfig
