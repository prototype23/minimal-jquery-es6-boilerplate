import 'AnimateCss';
import 'PhotoSwipeCss';
import 'PhotoSwipeThemeCss';
import '../sass/global.scss';
import '../sass/index/index.scss';


// import jquery from 'jquery';
// Expose jQuery globally so other plugins using global var can work!
// window.$ = window.jQuery = jquery;

import PhotoSwipe from 'PhotoSwipe';
import PhotoSwipeUI from 'PhotoSwipeUI';
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

  // Initializes and opens PhotoSwipe
  (function() {
    var items = [
      {
        html: '<div style="padding-top: 100px; text-align: center;"><h1>Any HTML <a href="http://example.com">content</a></h1></div>'
      },
      {
        src: 'https://placekitten.com/600/400',
        w: 600,
        h: 400
      },
      {
        src: 'https://placekitten.com/1200/900',
        w: 1200,
        h: 900
      },
      {
        src: 'https://placekitten.com/3840/2160',
        w: 3840,
        h: 2160
      },
      {
        src: 'https://placekitten.com/1920/1080',
        w: 1920,
        h: 1080
      }
    ];


    $('#init-gallery')
      .off('click.main')
      .on('click.main', function(e) {
        e && e.preventDefault();
        var gallery = new PhotoSwipe( $('.pswp').get(0), PhotoSwipeUI, items, {index: 0, history: false, shareEl: false, tapToClose: false, clickToCloseNonZoomable: false, closeOnScroll:false});

        gallery.init();
      });

  }());
});




