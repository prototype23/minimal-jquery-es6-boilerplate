import 'AnimateCss';
import '../sass/global.scss';
import '../sass/index/index.scss';

// import jquery from 'jquery';
// Expose jQuery globally so other plugins using global var can work!
// window.$ = window.jQuery = jquery;

import './simple-animation.js';

import flashMessage from './flash-message.js';
// import carousel from './carousel.js';

$(document).ready(function () {
  $('body').removeClass('display--none');

  setTimeout(() => flashMessage('js works'), 1500);

  // carousel.init();

  $('.test-animation:eq(0)')
    .animateCss('zoomIn', function() {
      // Do something after animation
    });
});




