'use strict';

(function() {
  var rolls = document.querySelector(".pizza");
  var rollsSlider = rolls.querySelector(".pizza__slider");
  var pagination = rolls.querySelector(".pagination__slider");
  var buttonPrevious = rolls.querySelector(".pizza-button-prev");
  var buttonNext = rolls.querySelector(".pizza-button-next");

  var promoSwiper = new Swiper(rollsSlider, {
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
