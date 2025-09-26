

/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  images: {
    domains: ['dl.airtable.com'],
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '' : '',
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/HCB-006',
        destination: '/protfolio/HCB-006/index.html',
      },
      {
        source: '/HCB-006/',
        destination: '/protfolio/HCB-006/index.html',
      },
      {
        source: '/HCB-006/:path*',
        destination: '/protfolio/HCB-006/:path*',
      },
    ];
  },
};

module.exports = nextConfig;
