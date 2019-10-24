const withCSS = require('@zeit/next-css')
const withFonts = require('next-fonts')
const withImages = require('next-images')
const withSass = require('@zeit/next-sass')

module.exports = withCSS(withSass(withFonts(withImages(
    {
        webpack(config, options) {
            config.resolve.alias = {
                ...config.resolve.alias,
                '~': __dirname
            }
            return config
        },
    }
))))