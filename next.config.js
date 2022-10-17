const { i18n } = require("./next-i18next.config");

const nextConfig = {
  experimental: {
    // Defaults to 50MB
    isrMemoryCacheSize: 0,
  },
  async redirects() {
    return [
      {
        source: '/admin',
        destination: '/admin/dashboard',
        permanent: true,
      },
    ]
  },
  // other stuff
  i18n,
};

module.exports = nextConfig;
