(function() {
  var aboutUsBtn = document.querySelector(".btn__about-us");
  var aboutUsItems = document.querySelectorAll(".about-us-open");
  var hidden = "about-us-hidden";

  var onAboutUsBtnClick = function() {
    for (var i = 0; i < aboutUsItems.length; i++) {
      aboutUsItems[i].classList.remove(hidden);
    }

    aboutUsBtn.style.display = "none";
  };

  aboutUsBtn.addEventListener("click", onAboutUsBtnClick);

})();
