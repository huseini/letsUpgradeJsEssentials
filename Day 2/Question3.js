/* Programme to search for a element in a array of strings */

var searchFor = "Hello";

var arrayOfStrings = ["Hello", "Every", "Thing", "Is", "Possible"];

if (arrayOfStrings.indexOf(searchFor) >= 0) {
  console.log(
    "Element Exist and it exists at",
    arrayOfStrings.indexOf(searchFor) + 1
  );
} else {
  console.log("Element Does not Exist");
}
