(function() {
  var burgers = document.querySelectorAll('.burger');

  for (var i = 0; i < burgers.length; i++) {
    var burger = burgers[i];
    burger.addEventListener('click', showBurgerTarget);
  }

  function showBurgerTarget() {
    var targetId = this.getAttribute('data-target-id');
    var targetClassToggle = this.getAttribute('data-target-class-toggle');
    if (targetId && targetClassToggle) {
      this.classList.toggle('burger--close');
      document.getElementById(targetId).classList.toggle(targetClassToggle);
    }
  }

})();

/*var swiper = new Swiper('.swiper-container', {
  // Default parameters
  slidesPerView: 1,
  spaceBetween: 10,
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 0
    },
    // when window width is >= 480px
    765: {
      slidesPerView: 2,
      spaceBetween: 0
    },
    // when window width is >= 640px
    1170: {
      slidesPerView: 3,
      spaceBetween: 0
    }
  }
})
*/
