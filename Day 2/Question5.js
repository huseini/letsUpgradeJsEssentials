/* Print an array in reverse order */

var arrayOfStrings = ["Hello", "Every", "Thing", "Is", "Possible"];

var arrayLength = arrayOfStrings.length;

var counter = arrayLength - 1;

for (var i = counter; i >= 0; i--) {
  console.log(arrayOfStrings[i]);
}
