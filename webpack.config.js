module.exports = {
  devServer: {
    open: false,
    headers: {
        'Access-Control-Allow-Origin': '*'
    },
    // headers: {
    //   "Access-Control-Allow-Origin": "*",
    //   "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
    //   "Access-Control-Allow-Headers": "content-type",
    // },
    proxy: {
      '/api': {
        target: 'https://registry.npmjs.org',
        secure: false,
        pathRewrite: { '^/api': '' },
      },
    },
  },
};
