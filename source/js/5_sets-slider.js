(function() {
  var sets = document.querySelector(".sets");
  var setsSlider = sets.querySelector(".sets__slider");
  var buttonPrevious = sets.querySelector(".sets__button--prev");
  var buttonNext = sets.querySelector(".sets__button--next");
  var pagination = sets.querySelector(".sets-pagination");

  var promoSwiper = new Swiper(setsSlider, {
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
      clickable: true
    }
  });

})();
