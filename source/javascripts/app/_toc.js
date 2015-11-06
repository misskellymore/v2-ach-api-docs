//= require ../lib/_jquery_ui
//= require ../lib/_jquery.tocify
(function (global) {
  'use strict';

  var closeToc = function() {
    $(".tocify-wrapper").removeClass('open');
    $("#nav-button").removeClass('open');
  };

  var makeToc = function() {
    global.toc = $("#toc").tocify({
      selectors: 'h1, h2',
      extendPage: false,
      theme: 'none',
      smoothScroll: false,
      showEffectSpeed: 0,
      hideEffectSpeed: 180,
      ignoreSelector: '.toc-ignore',
      highlightOffset: 60,
      scrollTo: -1,
      scrollHistory: true,
      hashGenerator: function (text, element) {
        return element.prop('id');
      }
    }).data('toc-tocify');

    $("#nav-button").click(function() {
      $(".tocify-wrapper").toggleClass('open');
      $("#nav-button").toggleClass('open');
      return false;
    });

    $(".page-wrapper").click(closeToc);
    $(".tocify-item").click(closeToc);
  };

  // Hack to make already open sections to start opened,
  // instead of displaying an ugly animation
  var HEADER_HEIGHT = 143;

  function animate () {
    setTimeout(function() {
      toc.setOption('showEffectSpeed', 180);
    }, 50);
  }

  // Handels gap of header
  function updateTocPos () {
    var topPos = HEADER_HEIGHT - $(window).scrollTop();

    if(topPos < 0) {
      $('.tocify-wrapper').removeAttr('style');
    }else {
      $('.tocify-wrapper').css('height', $(window).height() - topPos);
      $('.tocify-wrapper').css('top', topPos);
    }
  }

  function addListeners () {
    $(window).on('scroll', updateTocPos);
  }

  $(makeToc);
  $(animate);
  $(updateTocPos);
  $(addListeners);

})(window);
