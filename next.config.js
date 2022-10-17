const { i18n } = require("./next-i18next.config");

const nextConfig = {
  async redirects() {
    return [
      {
        source: '/admin',
        destination: '/admin/dashboard',
        permanent: true,
        experimental: {
          // Defaults to 50MB
          isrMemoryCacheSize: 0,
        },
      },
    ]
  },
  // other stuff
  i18n,
};

module.exports = nextConfig;
