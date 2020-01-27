'use strict';

(function() {

  var removeHidden = function(arr, className, btn) {
    for (var i = 0; i < arr.length; i++) {
      arr[i].classList.remove(className);
    }

    btn.style.display = "none";
  };

  window.utils = {
    removeHidden: removeHidden
  };

})();
