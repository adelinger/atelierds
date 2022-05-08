/**
 * @type {import('next').NextConfig}
 */
 const nextConfig = {
  i18n: {
    defaultLocale: 'de',
    locales: ['en', 'de', 'fr', 'it'],
    localeDetection: false
  },
}

module.exports = nextConfig