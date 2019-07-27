const path = require('path');
const { addWebpackAlias } = require('customize-cra');

module.exports = function override(config) {
    config = addWebpackAlias({
        Components: path.resolve(__dirname, 'src', 'components'),
        '@src': path.resolve(__dirname, 'src'),
    })(config);

    return config;
};
