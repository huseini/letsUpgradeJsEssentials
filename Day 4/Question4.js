var group = Array();
var object1 = {
  name: "huseini",
  age: 31,
  country: "India",
  hobbies: ["Movies", "Football", "Cricket", "Pool"],
};

var object2 = {
  name: "huseini",
  age: 29,
  country: "World",
  hobbies: ["Movies", "Football", "Cricket", "Pool"],
};

group.push(object1);
group.push(object2);

function displayGroupWithAgeLess30() {
  var l = group.length;
  for (var i = 0; i < l; i++) {
    if (group[i]["age"] < 30) {
      console.log(group[i]);
    }
  }
}

function displayGroupWithCountryIndia() {
  var l = group.length;
  for (var i = 0; i < l; i++) {
    if (group[i]["country"] == "India") {
      console.log(group[i]);
    }
  }
}

displayGroupWithAgeLess30();
displayGroupWithCountryIndia();
