(function() {
  var wok = document.querySelector(".wok");
  var wokSlider = wok.querySelector(".wok__slider");
  var pagination = wok.querySelector(".pagination__slider");
  var buttonPrevious = wok.querySelector(".wok-button-prev");
  var buttonNext = wok.querySelector(".wok-button-next");

  var promoSwiper = new Swiper(wokSlider, {
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
