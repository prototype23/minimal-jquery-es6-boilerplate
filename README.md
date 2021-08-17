# Milligram - jQuery - ES6 Boilerplate
A minimal, ES6 boilerplate, for simple landing pages.

[Online Demo page](https://prototype23.github.io/minimal-jquery-es6-boilerplate/dist/)


## Demo page (Local)
1. Fork/ Download this project
2. [Install Nodejs/NPM](#Install-Nodejs/NPM) (Skip this if you already have nodejs installed)
3. From the project's root run:
```
  npm install
  npm run prod
```

## Development
```
  npm install
  npm run dev
```
- Watches source files and builds the app for development on changes
- Starts a nodejs web-server @ http://localhost:9000/
- Opens the app there with your default browser (you have to manually reload the page)


## Test app for Production
```
npm install
npm run prod
```
- Builds the app for production
- Starts a nodejs web-server @ http://localhost:9000/
- Opens the app there with your default browser

## Build app for Production
```
npm install
npm run build:prod
```

## Bundle-stats
```
npm install
npm run stats
```
Builds the app for production and opens an interactive page on your browser with bundle statistics.
This will help you to understand your bundle and optimize your app.
Also creates a `bundle-stats.json` file.


## What's included on package.json
  - [webpack v5](https://webpack.js.org) - Asset Bundler.
    - Configuration for multiple [environments](#environments) and CDNs.
    - [Bundle Analyser](https://github.com/webpack-contrib/webpack-bundle-analyzer)
  - [Babel v7](https://babeljs.io/) - ES6 javascript compiler.
    - Configuration for ie11 support.
  - [IDE tools - ESLint](#IDE-tools-ESLint)
  - [Sass](http://sass-lang.com/) and [Compass mixins](https://github.com/askucher/compass-sass-mixins) - Scss compiler and utils.
  - [Milligram](https://milligram.io/index.html]https://milligram.io/index.html) - A minimalist CSS framework.
  - [Animate.css 4.1.1](https://github.com/animate-css/animate.css)

## What's included with simple CDN or CSS load
  - [Ionicons 4.5.10-0](https://ionicons.com/v4/) - Font icons.
    - Fonts are loaded by cdn url by default, but boilerplate contains an example if you prefer to load them with webpack.
  - [jQuery, v3](https://jquery.com/) - Event management and DOM manipulation.
    - Jquery is loaded by cdn url by default, but boilerplate contains a webpack configuration and a js example if you prefer to load it with webpack. Just uncomment `Expose jQuery` section on the `wepack.common.js` file and `src/index.js`.
  - [photoswipe](https://photoswipe.com/) - Photo viewer.
  - [bootstrap-reboot.css](https://github.com/twbs/bootstrap/tree/v4-dev/dist/css) -  Bootstrap v4.5.3 reset css

### Some custom js helpers:
  - A js helper for the animateCss. (simple-animation.js). If you need something more complicated use [Actuate](https://github.com/lukejacksonn/Actuate) or [Anime.js](https://animejs.com/)
  - A minimal modal. (modal.js)
  - A minimal flash messenger. (flash-message.js)

### Some custom scss/css helpers:
  - Scss utils. (utils.scss)
  - Scss Typography utils. (typography.scss)
  - Scss font face example. (fonts.scss)
  - A flexbox scss mixin helper. (_flexbox.scss)
  - A missing scss mixin for the placeholder. (_input-placeholder.scss)
  - A custom grid system to use if needed - Milligram has it's own too. (_grid-system.scss)
  - Two sets of color variables. Milligram's vars and one extra set. (vars.scss)

### Batch files
For windows we included some batch files inside the folder `bat`. You can create shortcuts to your desktop an click them instead of typing the workflow commands.

## Folder structure
### Needed on Distribution / Live
```
|- /dist
```
Only the contents of the `dist` folder are needed for production.

### Needed for Development / Local
```
*.* (All project's files)
```

## IDE tools, ESLint
This boilerplate comes with these files on root:
- .editorconfig
- .eslintrc.json
- .eslintignore

 Your IDE might need some plugins to be installed in order to recognize those files. You can change the rules/configuration on these files based on your project needs.

Related Links:
- https://editorconfig.org/
- https://eslint.org/docs/user-guide/getting-started#installation-and-usage

## Environments
- Local aka dev.
  - webpack mode: 'development'.
  - _cdnPublicFolder.scss is loaded from './src/common/sass/cdnPublicFolder/dev', "cdnFile" sass mixin and returns: ''.

- Production aka live.
  - webpack mode: 'production'.
  - _cdnPublicFolder.scss is loaded from './src/common/sass/cdnPublicFolder/live', "cdnFile" sass mixin and returns: ''.

Concept:
  1. https://webpack.js.org/concepts/mode/
  2. [CDN public urls on scss](#CDN-public-urls-on-scss)

## CDN public urls on scss
**This might not work. Not tested with webpack 5**
If your website uses CDNs for the images, css might require different urls per
environment. For example an image preloader could have this url on development environment:

```scss
.preloader {
  background: transparent url("/img/ajax-loader.gif") no-repeat center center;
}
```
This on testing and live environment:
```scss
.preloader {
  background: transparent url("/_commonFiles/img/ajax-loader.gif") no-repeat center center;
}
```

For this purpose for each environment we will create a sass mixin `cdnFile` and use that instead of the `url` rule.

```scss
@import "_cdnPublicFolder.scss";

.preloader {
  background: transparent cdnFile("/img/ajax-loader.gif") no-repeat center center;
}
```

Edit these folders/files:
```
|- /src
  |- /sass
    |- /cdnPublicFolder
      |- /dev
        |- _cdnPublicFolder.scss
      |- /live
        |- _cdnPublicFolder.scss
```

`./src/sass/cdnPublicFolder/dev/_cdnPublicFolder.scss` contents:
```scss
// For Development environment.
$commonFileBasePath: '';

@function cdnFile($file) {
  @return url($commonFileBasePath + $file);
}
```

`./src/sass/cdnPublicFolder/live/_cdnPublicFolder.scss` contents:
```scss
// For Live environment.
$commonFileBasePath: '/_commonFiles';

@function cdnFile($file) {
  @return url($commonFileBasePath + $file);
}
```




