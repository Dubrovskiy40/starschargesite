const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = function override(config, env) {
  if (!config.plugins) {
    config.plugins = [];
  }

  config.plugins.push(
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src', 'images'),
          to: path.join(__dirname, 'public', 'images'),
        },
      ],
    }),
  );
}