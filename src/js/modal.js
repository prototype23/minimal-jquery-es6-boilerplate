/*
  # How to use example (ES6)
  import jquery from 'jquery';
  window.$ = window.jQuery = jquery;
  import Modal from './modal.js';

  $(document).ready(function () {
    let myModal = new Modal({
      id: 'myModal',
      afterShow: function () {
      },
      afterHide: function () {
      }
    });
  });

  Add a custom html attribute `data-modal-open="your-modal-id"` on the element you want to use as the modal activator.

      OR

  Use the mini api:

  - `myModal.show();`
  - `myModal.hide();`

  # Html
  Example on the modal.scss
*/
let counter = 1;

export default class Modal {
  constructor(options) {
    this.options = jQuery.extend({}, options);
    this.hiddenClassName = 'modal--hidden';
    this.modalInstance = new Date().getTime() + counter;
    counter ++;

    $('#' + options.id)
      .attr('data-instance', this.modalInstance)
      .find('.modal__main')
      .off('click.namespace' + this.modalInstance)
      .on('click.namespace' + this.modalInstance, function(e) {
        e & e.stopPropagation();
      });

    $('[data-modal-open="' + options.id +'"]')
      .off('click.namespace' + this.modalInstance)
      .on('click.namespace' + this.modalInstance, this.show.bind(this));

    $('#' + options.id + '[data-modal-close], #' + options.id + ' [data-modal-close]')
      .off('click.namespace' + this.modalInstance)
      .on('click.namespace' + this.modalInstance, this.hide.bind(this));
  }


  hide() {
    $('.modal[data-instance="' + this.modalInstance + '"]')
      .addClass(this.hiddenClassName)
      .find('.modal__main')
      .removeClass('animated');

    $('body').removeClass('noScroll');

    if (typeof this.options.afterHide === 'function') {
      console.log('Running modal.afterHide()');
      this.options.afterHide();
    }
  }

  show() {
    /* console.log(this);
    console.log(this.modalInstance);
    console.log(this.hiddenClassName); */

    $('.modal[data-instance="' + this.modalInstance + '"]')
      .removeClass(this.hiddenClassName)
      .find('.modal__main')
      .addClass('animated');

    $('body').addClass('noScroll');

    if (typeof this.options.afterShow === 'function') {
      console.log('Running modal.afterShow()');
      this.options.afterShow();
    }
  }
}


