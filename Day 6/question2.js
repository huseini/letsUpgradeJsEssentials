var Buses = getData();

displayBus(Buses);

document.getElementById("form").addEventListener("submit", function (e) {
  e.preventDefault();
  let bus = {};
  bus.name = document.getElementById("name").value;
  bus.destination = document.getElementById("destination").value;
  bus.source = document.getElementById("source").value;
  bus.number = document.getElementById("number").value;
  bus.capacity = document.getElementById("capacity").value;
  Buses.push(bus);
  storeData();
  displayBus(Buses);
});

document.querySelector(".search").addEventListener("keyup", function (e) {
  let searchString = e.target.value;
  searchCity(searchString);
});

function storeData() {
  localStorage.setItem("buses", JSON.stringify(Buses));
}

function getData() {
  if (localStorage.getItem("buses")) {
    let buses = JSON.parse(localStorage.getItem("buses"));
    return buses;
  } else {
    return [];
  }
}

function displayBus(showarray) {
  let showdata = showarray;
  document.getElementsByTagName("tbody")[0].innerHTML = "";
  let tabledata = "";
  let rowdata = "";
  showdata.forEach((bus, index) => {
    rowdata = "<tr>";
    rowdata += "<td>" + (index + 1) + "</td>";
    rowdata += "<td>" + bus.name + "</td>";
    rowdata += "<td>" + bus.source + "</td>";
    rowdata += "<td>" + bus.destination + "</td>";
    rowdata += "<td>" + bus.number + "</td>";
    rowdata += "<td>" + bus.capacity + "</td>";
    rowdata += "</tr>";
    tabledata += rowdata;
  });
  document.getElementsByTagName("tbody")[0].innerHTML = tabledata;
}

function searchCity(search) {
  let data = Buses.filter(function (bus) {
    if (
      bus.source.toUpperCase().indexOf(search.toUpperCase()) != -1 ||
      bus.destination.toUpperCase().indexOf(search.toUpperCase()) != -1
    ) {
      return true;
    }
  });
  displayBus(data);
}
