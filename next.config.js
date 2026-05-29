/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost", "images.pexels.com", "res.cloudinary.com"],
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.parivarsaathi.com' }],
        destination: 'https://parivarsaathi.com/:path*',
        permanent: true,
      },
      {
        source: '/blog-single/:id',
        destination: '/blog/:id',
        permanent: true,
      },
      {
        source: '/blog-list-1',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/tour-list-1',
        destination: '/',
        permanent: false,
      }
    ];
  },
};

module.exports = nextConfig;
