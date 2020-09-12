document.addEventListener("DOMContentLoaded", ready, false);

function ready() {
  var b1 = document.getElementById("b1");
  var b2 = document.getElementById("b2");
  var b3 = document.getElementById("b3");
  var img = document.getElementById("img");

  b1.addEventListener("click", function () {
    img.setAttribute("src", "images/02.png");
  });

  b2.addEventListener("click", function () {
    img.setAttribute("src", "images/03.png");
  });

  b3.addEventListener("click", function () {
    img.setAttribute("src", "images/01.png");
  });
}
