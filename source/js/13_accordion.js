'use strict';

(function() {
  var ESC_KEYCODE = 13;
  var accordionBtn = document.querySelectorAll(".footer-menu__title");
  var accordionOpen = "accordion-open";

  var onAccordionBtnClick = function(evt) {
    evt.preventDefault();
    if (!(this.classList.contains(accordionOpen))) {
      for (var i = 0; i < accordionBtn.length; i++) {
        accordionBtn[i].classList.remove(accordionOpen);
      }
      this.classList.add(accordionOpen);
    }
  };

  for (var i = 0; i < accordionBtn.length; i++) {
    accordionBtn[i].addEventListener("click", onAccordionBtnClick);
  };

})();
