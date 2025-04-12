module.exports = {
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.mycv-romanhorcicka.it.com' }],
        destination: 'https://mycv-romanhorcicka.it.com/:path*',
        permanent: true,
      },
    ];
  },
};