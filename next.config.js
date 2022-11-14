/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    fontLoaders: [
      { loader: '@next/font/google', options: { subsets: ['latin'] } },
    ],
  },
  images: {
    domains: ['picsum.photos', "lh3.googleusercontent.com"]
  },



  reactStrictMode: true
}

module.exports = nextConfig
