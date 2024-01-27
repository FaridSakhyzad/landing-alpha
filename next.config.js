/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: 'build',
  async redirects() {
    return [
      {
        source: '/signup',
        destination: '/',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
