document.addEventListener("DOMContentLoaded", ready, false);

function ready() {
  var i1 = document.getElementById("input1");
  var i2 = document.getElementById("input2");
  var copy = document.getElementById("copy");

  copy.addEventListener("click", function () {
    i2.value = i1.value;
  });
}
