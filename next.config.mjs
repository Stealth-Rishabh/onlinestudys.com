/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'onlinestudys.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'noida.gla.ac.in',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'pagedone.io',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
