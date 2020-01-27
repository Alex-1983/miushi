'use strict';

(function() {
  var aboutUsBtn = document.querySelector(".btn__about-us");
  var aboutUsItems = document.querySelectorAll(".about-us-open");
  var hidden = "about-us-hidden";

  var onAboutUsBtnClick = function() {
    window.utils.removeHidden(aboutUsItems, hidden, aboutUsBtn);
  };

  aboutUsBtn.addEventListener("click", onAboutUsBtnClick);

})();
