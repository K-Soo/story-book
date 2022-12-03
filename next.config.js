/**
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
  compiler: {
    styledComponents: true,
    // reactRemoveProperties: true, //data 속성 삭제
    // removeConsole: process.env.NODE_ENV === 'production', 콘솔 삭제
  },
  // experimental: {
  //   modularizeImports: {
  //     lodash: {
  //       transform: 'lodash/{{number}}',
  //     },
  //   },
  // },
  images: {
    domains: ['via.placeholder.com', 'k.kakaocdn.net', 'shopping-phinf.pstatic.net'],
  },
};

module.exports = nextConfig;
