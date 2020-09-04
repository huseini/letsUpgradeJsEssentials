/* Programme to display only elements containing 'a' in them from a array */

var searchFor = "i";

var arrayOfStrings = ["Hello", "Every", "Thing", "Is", "Possible"];

arrayOfStrings.forEach((element) => {
  if (element.indexOf(searchFor) >= 0) {
    console.log(element);
  }
});
