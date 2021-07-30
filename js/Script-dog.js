function dispAll() {
  let url = "http://localhost:8090/dog";
  let request = new XMLHttpRequest();
  request.open("GET", url);
  request.responseType = "json";
  request.send();
  request.onload = function () {
    const data = request.response;
    display(data);
  };
}

function display(data) {
  const a = Object.keys(data.message);
  const b = Object.values(data.message);
  const tbl = document.getElementById("disp");
  tbl.style.padding = "3px";
  tbl.style.width = "100%";
  tbl.style.border = "1px solid black";
  const row = document.createElement("tr");
  tbl.append(row);
  const head1 = document.createElement("th");
  head1.innerHTML = "BREED";
  row.append(head1);
  const head2 = document.createElement("th");
  head2.innerHTML = "CONTENTS";
  row.append(head2);
  row.style.backgroundColor = "#ffe6e6";
  head1.style.border = "1px solid black";
  head2.style.border = "1px solid black";
  tbl.style.borderCollapse = "collapse";
  for (let i = 0; i < a.length; i++) {
    const tr = document.createElement("tr");
    const td1 = document.createElement("td");
    const td2 = document.createElement("td");
    td1.innerHTML = a[i];
    tr.append(td1);
    td2.innerHTML = b[i];
    tr.append(td2);
    td1.style.border = "1px solid black";
    td2.style.border = "1px solid black";
    tbl.append(tr);
    if (i % 2 != 0) tr.style.backgroundColor = "#d9d9d9";
    tbl.style.borderCollapse = "collapse";
  }
}
function dispSpecies(e) {
  e.preventDefault();
  const sp = document.getElementById("Species");
  let url = `http://localhost:8090/dog/selectBreed?${sp.elements[0].name}=${sp.elements[0].value}`;
  let request = new XMLHttpRequest();
  request.open("GET", url);
  request.responseType = "json";
  request.send();
  request.onload = function () {
    const data = request.response;
    showSpecies(data);
  };
}

function showSpecies(data) {
  console.log("data", data);
  const ul = document.getElementById("dispSpecies");
  data.forEach((val) => {
    const li = document.createElement("li");
    li.innerText = val;
    ul.append(li);
  });
}

function addBreed(ev) {
  ev.preventDefault();
  const input = document.getElementById("addingBreed");
  let url = `http://localhost:8090/dog/newBreed?${input.elements[0].name}=${input.elements[0].value}&${input.elements[1].name}=${input.elements[1].value}`;
  let request = new XMLHttpRequest();
  request.open("POST", url);
  request.send();
  request.onload = function () {
    const data = request.response;
    showMessage(data);
  };
}

function showMessage(data) {
  console.log("data", data);
  const msg = document.getElementById("update");
  msg.innerText = data;
}

function addSpecies(ev) {
  ev.preventDefault();
  const input = document.getElementById("addSpecies");
  let url = `http://localhost:8090/dog/newSpecies?${input.elements[0].name}=${input.elements[0].value}&${input.elements[1].name}=${input.elements[1].value}`;
  let request = new XMLHttpRequest();
  request.open("PUT", url);
  request.send();
  request.onload = function () {
    const data = request.response;
    showMessage(data);
  };
}
