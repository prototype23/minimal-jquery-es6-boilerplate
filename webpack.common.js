const webpack = require('webpack');
const path = require('path');

module.exports = {
  // Webpack main settings
  /*  cache: {
     type: 'filesystem'
   }, */
  entry: {
    index: path.resolve(__dirname, 'src/js/index.js'),
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist/js'),
    publicPath: '/dist/'
  },
  target: ['web', 'es5'],
  // Configure how modules are resolved.
  resolve: {
    alias: {
      // When calling '@import 'Ionicons';
      // Ionicons: path.resolve(__dirname, 'dist/fonts/ionicons/ionicons.css'),
      Compass: path.resolve(__dirname, 'node_modules/compass-sass-mixins/lib/_compass.sass'),
      CompassAnimate: path.resolve(__dirname, 'node_modules/compass-sass-mixins/lib/_animate.sass'),
      CompassReset: path.resolve(__dirname, 'node_modules/compass-sass-mixins/lib/compass/reset/_utilities.sass'),
      Milligram: path.resolve(__dirname, 'node_modules/milligram/src/milligram.sass'),
      AnimateCss: path.resolve(__dirname, 'node_modules/animate.css/animate.css'),
      PhotoSwipeCss: path.resolve(__dirname, 'node_modules/photoswipe/dist/photoswipe.css'),
      PhotoSwipeThemeCss: path.resolve(__dirname, 'node_modules/photoswipe/dist/default-skin/default-skin.css'),
      PhotoSwipe: path.resolve(__dirname, 'node_modules/photoswipe/dist/photoswipe.js'),
      PhotoSwipeUI: path.resolve(__dirname, 'node_modules/photoswipe/dist/photoswipe-ui-default.js'),
    }
  },
  // Define pre-compilers, linters for each file type
  module: {
    rules: [
      {test: /\.js$/, exclude: /node_modules/, use: ['babel-loader', 'eslint-loader']},
      {test: /\.css$/, use: ['style-loader', 'css-loader?url=false']},
      {
        test: /\.(html)$/,
        use: {
          loader: 'html-loader',
          options: {
            minimize: false,
            attrs: false
          }
        }
      }
    ]
  },
  // Expose jQuery
  /* plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    }),
  ], */
};
