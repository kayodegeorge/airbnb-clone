/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['avaters.githubusercontent.com', 'lh3.googleusercontent.com'],
  },
}

module.exports = nextConfig
