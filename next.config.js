/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
    // removeConsole: process.env.NODE_ENV === 'production',
  },
  // experimental: {
  //   modularizeImports: {
  //     lodash: {
  //       transform: 'lodash/{{number}}',
  //     },
  //   },
  // },
  images: {
    domains: ["via.placeholder.com", "k.kakaocdn.net", "shopping-phinf.pstatic.net"],
  },
};

module.exports = nextConfig;
