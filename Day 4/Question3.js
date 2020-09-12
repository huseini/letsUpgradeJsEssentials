var group = Array();
var object1 = {
  name: "huseini",
  age: 31,
  country: "India",
  hobbies: ["Movies", "Football", "Cricket", "Pool"],
};

var object2 = {
  name: "huseini",
  age: 31,
  country: "India",
  hobbies: ["Movies", "Football", "Cricket", "Pool"],
};

group.push(object1);
group.push(object2);

function displayGroup() {
  var l = group.length;
  for (var i = 0; i < l; i++) {
    console.log(group[i]);
  }
}

displayGroup();
