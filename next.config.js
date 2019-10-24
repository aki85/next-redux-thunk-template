const withCSS = require('@zeit/next-css')
const withFonts = require('next-fonts')
const withImages = require('next-images')
const withSass = require('@zeit/next-sass')

module.exports = withCSS(withSass(withFonts(withImages(
    {
        onDemandEntries: {
            maxInactiveAge: 1000 * 60 * 60
        },
        webpack(config, options) {
            config.resolve.alias = {
                ...config.resolve.alias,
                '~': __dirname
            }
            return config
        },
        publicRuntimeConfig: {
            NODE_ENV: process.env.NODE_ENV,
        }
    }
))))