var employees = Array();

var emp1 = {
  name: "one",
  age: 24,
  city: "Indore",
  salary: 25000,
};

var emp2 = {
  name: "Two",
  age: 27,
  city: "Mumbai",
  salary: 35000,
};

var emp3 = {
  name: "Three",
  age: 32,
  city: "Pune",
  salary: 45000,
};

var emp4 = {
  name: "Four",
  age: 42,
  city: "Hyderabad",
  salary: 125000,
};

var emp5 = {
  name: "Employee Five",
  age: 27,
  city: "Delhi",
  salary: 27000,
};

employees.push(emp1);
employees.push(emp2);
employees.push(emp3);
employees.push(emp4);
employees.push(emp5);

display(employees);

document.querySelector(".search").addEventListener("keyup", function (e) {
  let searchString = e.target.value;
  searchEmplyee(searchString);
});

function display(persons) {
  let data = "";

  persons.forEach(function (employee, index) {
    let row = `<tr>
      <td>${index + 1}</td>
      <td>${employee.name}</td>
      <td>${employee.age}</td>
      <td>${employee.city}</td>
      <td>${employee.salary}</td>
      <td>
      <button onclick='deleteEmployee(${index})'>delete</button>
      </td>
      </tr>`;

    data += row;
  });

  document.getElementsByTagName("tbody")[0].innerHTML = data;
}

function searchEmplyee(search) {
  let data = employees.filter(function (employee) {
    if (
      employee.name.toUpperCase().indexOf(search.toUpperCase()) != -1 ||
      employee.city.toUpperCase().indexOf(search.toUpperCase()) != -1
    ) {
      return true;
    }
  });
  display(data);
}

function deleteEmployee(ind) {
  let data = employees.filter(function (employee, index) {
    if (index != ind) {
      return true;
    }
    return false;
  });
  display(data);
}
