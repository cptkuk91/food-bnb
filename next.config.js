const path = require('path');

module.exports = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.resolve.alias['@components'] = path.join(__dirname, 'components');
    // config.resolve.alias['@styles'] = path.join(__dirname, 'styles');
    // 필요한 만큼 alias 추가...

    return config;
  },
};
