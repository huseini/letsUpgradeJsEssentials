/* Programmer to search for a particular character in a string  */

var character = "A";

var string = "Alphabets";

if (string.indexOf(character) >= 0) {
  console.log(
    "Character Exist and it exists at",
    string.indexOf(character) + 1
  );
} else {
  console.log("Character Not Found");
}
