/** @type {import('next').NextConfig} */

const path = require('path');

const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    prependData: `
      @import "@/styles/variables.scss";
  `,
  },
  reactStrictMode: true,
  images: {
    domains: ['media.graphassets.com'],
  },
}

module.exports = nextConfig
