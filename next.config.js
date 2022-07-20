/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://api.giphy.com/v1/:path*',
      },
    ]
  },
}

module.exports = nextConfig
