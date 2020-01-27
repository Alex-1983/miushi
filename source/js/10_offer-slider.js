'use strict';

(function() {
  var offer = document.querySelector(".offer");
  var offerSlider = offer.querySelector(".offer__slider");
  var pagination = offer.querySelector(".pagination__slider");
  var buttonPrevious = offer.querySelector(".offer-button-prev");
  var buttonNext = offer.querySelector(".offer-button-next");

  var promoSwiper = new Swiper(offerSlider, {
    loop: true,
    slidesPerView: 4,
    spaceBetween: 25,

    breakpoints: {
      764: {
        slidesPerView: 1,
        spaceBetween: 0,
      },

      1169: {
        slidesPerView: 3,
        spaceBetween: 25,
      },
    },

    navigation: {
      nextEl: buttonNext,
      prevEl: buttonPrevious
    },

    pagination: {
      el: pagination,
      clickable: true,

      renderBullet: function(index, className) {
        return '<span class="' + className + '">' + (index + 1) + '</span>';
      },
    }
  });

})();
