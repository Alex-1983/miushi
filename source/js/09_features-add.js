(function() {
  var featuresBtn = document.querySelector(".btn__features");
  var featuresItems = document.querySelectorAll(".features__item");
  var hidden = "features-hidden";

  var onFeaturesBtnClick = function() {
    for (var i = 0; i < featuresItems.length; i++) {
      featuresItems[i].classList.remove(hidden);
    }

    featuresBtn.style.display = "none";
  };

  featuresBtn.addEventListener("click", onFeaturesBtnClick);

})();
