function addEvents() {
  var mainButtons = document.querySelectorAll(".btn-main");
  for(var i=0; i<mainButtons.length; i++) {
    mainButtons[i].addEventListener("click", popUp);
  }
}

function popUp() {
  this.nextElementSibling.className += " active";
}

addEvents();