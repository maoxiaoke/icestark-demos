const webpack = require('webpack');

module.exports = ({ context, onGetWebpackConfig }) => {
  const { command } = context;
  onGetWebpackConfig((config) => {
    config
      .devtool(false)

    config.plugin('SourceMapDevToolPlugin')
      .use(new webpack.SourceMapDevToolPlugin({
        publicPath: 'http://localhost:3334/',
        filename: '[name].js.map'
      }))
  });
};
