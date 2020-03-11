'use strict';

(function() {
  var openMenuBtn = document.querySelector(".burger");
  var closeMenuBtn = document.querySelector(".close");
  var openMenu = document.querySelector(".main-nav");
  var overlay = document.querySelector(".overlay");
  var body = document.querySelector("body");
  var openMenuClassName = "main-nav--open";
  var overlayShow = "overlay-show";
  var noScroll = "no-scroll";

  var onOpenMenuBtnClick = function() {
    openMenu.classList.add(openMenuClassName);
    overlay.classList.add(overlayShow);
    body.classList.add(noScroll);
  };

  var onCloseMenuBtnClick = function() {
    openMenu.classList.remove(openMenuClassName);
    overlay.classList.remove(overlayShow);
    body.classList.remove(noScroll);
  };

  openMenuBtn.addEventListener("click", onOpenMenuBtnClick);
  closeMenuBtn.addEventListener("click", onCloseMenuBtnClick);

})();
