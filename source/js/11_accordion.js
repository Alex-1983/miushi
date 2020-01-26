(function() {
  var accordionTitle = document.querySelectorAll(".footer-menu__title");
  var accordionItem = document.querySelectorAll(".accordion-item");
  var accordionOpen = "accordion-open";

  for (var i = 0; i < accordionTitle.length; i++) {
    accordionTitle[i].addEventListener("click", function() {
      if (!(this.classList.contains(accordionOpen))) {
        for (var i = 0; i < accordionTitle.length; i++) {
          accordionTitle[i].classList.remove(accordionOpen);
        }
        this.classList.add(accordionOpen);
      }
    });
  }

})();
