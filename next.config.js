/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        domains: ['images.unsplash.com'],
        unoptimized: true
    },
    basePath: process.env.NODE_ENV === 'production' ? '/landing_page' : '',
    assetPrefix: process.env.NODE_ENV === 'production' ? '/landing_page' : '',
    trailingSlash: true
}

module.exports = nextConfig
