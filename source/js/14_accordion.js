'use strict';

(function() {
  var accordionToggles = document.querySelectorAll('.footer-menu__accordeon-container button');
  var footerMenuDiv = document.querySelectorAll('.footer-menu div');
  var accordionOpen = "accordion-open";

  for (var i = 0; i < accordionToggles.length; i++) {
    accordionToggles[i].addEventListener('click', onToggleClicked);
  }

  function onToggleClicked(e) {
    var accordionContainer = e.target.closest('.footer-menu__accordeon-container').parentElement;
    if (accordionContainer.classList.contains(accordionOpen)) {
      accordionContainer.classList.remove(accordionOpen);
    } else {
      for (var i = 0; i < footerMenuDiv.length; i++) {
        footerMenuDiv[i].classList.remove(accordionOpen);
      }
      accordionContainer.classList.add(accordionOpen);
    }
  };
})();
