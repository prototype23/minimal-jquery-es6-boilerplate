# Milligram - jQuery - ES6 Boilerplate
A minimal, ES6 boilerplate, for simple landing pages.

## What's included
  - [webpack v4](https://webpack.js.org/guides/installation/) - Asset Bundler.
    - Configuration for multiple [environments](#environments) and CDNs.
    - [Bundle Analyser](https://github.com/webpack-contrib/webpack-bundle-analyzer)
  - [Babel v7](https://babeljs.io/) - ES6 javascript compiler.
    - Configuration for ie11 support.
  - [IDE tools - ESLint](#IDE-tools-ESLint)
  - [Sass](http://sass-lang.com/) and [Compass mixins](https://github.com/askucher/compass-sass-mixins) - Scss compiler and utils.
  - [Milligram](https://milligram.io/index.html]https://milligram.io/index.html) - A minimalist CSS framework.
  - [Ionicons](https://ionicons.com/) - Font icons.
    - Fonts are loaded by cdn url by default, but boilerplate contains an example if you prefer to load them with webpack.
  - [jQuery, v3.3.1](https://jquery.com/) - Event management and DOM manipulation.
    - Jquery is loaded by cdn url by default, but boilerplate contains a webpack configuration and a js example if you prefer to load it with webpack. Just uncomment `Expose jQuery` section on the `wepack.common.js` file and `src/index.js`.
  - [owl Carousel](https://owlcarousel2.github.io/OwlCarousel2/) - Carousel.

### Some custom js helpers:
  - A js helper for the carousel. (carousel.js)
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
  - _cdnPublicFolder.scss is loaded from './src/common/sass/cdnPublicFolder/live', "cdnFile" sass mixin and returns: '/_commonFiles'.

Concept:
  1. https://webpack.js.org/concepts/mode/
  2. [CDN public urls on scss](#CDN-public-urls-on-scss)


## NPM tasks
Watch files for changes and rebuild app:
```
npm run watch
```

Opens app on your default Browser and reloads page on changes.
```
npm run live-reload
```

Build the app for local development:
```
npm run build
```

Build the app for the production server:
```
npm run build:live
```

Make a bundle and view the stats:
```
npm run bundle-stats
```
Creates a `bundle-stats.json` file.

