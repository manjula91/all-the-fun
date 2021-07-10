const path = require('path');

module.exports = {
  resolve: {
    alias: {
      pages: path.resolve(__dirname, 'reactor/pages/'),
      data: path.resolve(__dirname, 'reactor/data/'),
      components: path.resolve(__dirname, 'reactor/components'),
      logos: path.resolve(__dirname, 'reactor/logos/'),
      reactor: path.resolve(__dirname, 'reactor'),
    },
  },
};
