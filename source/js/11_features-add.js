'use strict';

(function() {
  var featuresBtn = document.querySelector(".btn__features");
  var featuresItems = document.querySelectorAll(".features__item");
  var hidden = "features-hidden";

  var onFeaturesBtnClick = function() {
    window.utils.removeHidden(featuresItems, hidden, featuresBtn);
  };

  featuresBtn.addEventListener("click", onFeaturesBtnClick);

})();
