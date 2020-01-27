'use strict';

(function() {
  var subMenuDropdown = document.querySelector(".sub-menu-dropdown");
  var subMenuOpen = "sub-menu-open";

  var onSubMenuDropdownOpen = function () {
    subMenuDropdown.classList.add(subMenuOpen);
  };

  var onSubMenuDropdownClose = function () {
    subMenuDropdown.classList.remove(subMenuOpen);
  };

  subMenuDropdown.addEventListener("mouseover", onSubMenuDropdownOpen);
  subMenuDropdown.addEventListener("mouseout", onSubMenuDropdownClose)
  subMenuDropdown.addEventListener("focusin", onSubMenuDropdownOpen);
  subMenuDropdown.addEventListener("focusout", onSubMenuDropdownClose);

})();
