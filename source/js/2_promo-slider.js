(function() {
  var promo = document.querySelector(".promo");
  var promoSlider = promo.querySelector(".promo__slider");
  var buttonPrevious = promo.querySelector(".promo__button--prev");
  var buttonNext = promo.querySelector(".promo__button--next");
  var pagination = promo.querySelector(".swiper-pagination");

  var promoSwiper = new Swiper(promoSlider, {
    slidesPerView: 1,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
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
