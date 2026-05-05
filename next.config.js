/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost", "images.pexels.com", "res.cloudinary.com"],
  },
  async redirects() {
    return [
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
