const withCss = require("@zeit/next-css")
const withSass = require("@zeit/next-sass")
const commonsChunkConfig = require("@zeit/next-css/commons-chunk-config")
const withOffline = require("next-offline")
const withBundleAnalyzer = require("@zeit/next-bundle-analyzer")
const withPlugins = require('next-compose-plugins')
const withOptimizedImages = require('next-optimized-images')

const nextConfig = {
  publicRuntimeConfig: {
    staticFolder: "./static"
  },
  cssModules: true,
  cssLoaderOptions: {
    localIdentName: '[path][name]__[local]--[hash:base64:5]'
  },
  webpack: (config) => {
    const newFontRule = {
      test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
      use: [
        {
          loader: "url-loader",
          options: {
            limit: 8192,
            fallback: "file-loader",
            publicPath: "/_next/static/",
            outputPath: "static/fonts/",
            name: "[name].[ext]"
          }
        }
      ]
    }

    config.module.rules.push(newFontRule)
    // Important: return the modified config
    return commonsChunkConfig(config, /\.(sass|scss|css)$/)
  },
  analyzeServer: ["server", "both"].includes(process.env.BUNDLE_ANALYZE),
  analyzeBrowser: ["browser", "both"].includes(process.env.BUNDLE_ANALYZE),
  bundleAnalyzerConfig: {
    server: {
      analyzerMode: 'static',
      reportFilename: '../../bundles/server.html'
    },
    browser: {
      analyzerMode: 'static',
      reportFilename: '../bundles/client.html'
    }
  }
}

module.exports = withPlugins([
  [withOptimizedImages, {
    // these are the default values so you don't have to provide them if they are good enough for your use-case.
    // but you can overwrite them here with any valid value you want.
    inlineImageLimit: 8192,
    imagesFolder: 'images',
    imagesName: '[name]-[hash].[ext]',
    optimizeImagesInDev: false,
    mozjpeg: {
      quality: 80,
    },
    optipng: {
      optimizationLevel: 3,
    },
    pngquant: true,
    gifsicle: {
      interlaced: true,
      optimizationLevel: 3,
    },
    svgo: {
      // enable/disable svgo plugins here
    },
    webp: {
      preset: 'default',
      quality: 80,
    },
  }],
  [withBundleAnalyzer],
  [withOffline],
  [withSass],
  [withCss],
], nextConfig)
