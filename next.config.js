// const isDev = process.env.NODE_ENV === 'development' || !process.env.NODE_ENV
const path = require('path')

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})

module.exports = withBundleAnalyzer({
  images: {
    domains: ['pbs.twimg.com']
  },
  target: 'serverless',
  webpack(config) {
    config.resolve.modules.push(path.resolve('./'))
    return config
  }
})
