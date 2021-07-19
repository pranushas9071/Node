function addNewBreed() {
  const input = document.getElementById("addBreed");
  const breed = input.elements[0].value;
  const species = input.elements[1].value;
//   let msg=`?breed=${breed}&species=${species}`
  let url = "http://localhost:8090/dog/newBreed/";
  let request = new XMLHttpRequest();
  request.open("POST", url);
  request.responseType = "json";
  request.send();
//   console.log(msg);
  request.onload = function () {
    const data = request.response;
    display(data);
  };
}
function getSpecies() {
  const input = document.getElementById("Species");
  const breed = input.elements[0].value;
  let url = `http://localhost:8090/dog/${breed}`;
  let request = new XMLHttpRequest();
  request.open("GET", url);
  request.responseType = "json";
  request.send();
  request.onload = function () {
    const data = request.response;
    displaySpecies(data);
  };
}
function displaySpecies(data) {
  console.log(data);
  const ul = document.getElementById("dispSpecies");
  for (let i in data) {
    const li = document.createElement("li");
    li.innerText = data[i];
    console.log(data[i]);
    ul.append(li);
  }
}
function dispAll() {
  let url = "http://localhost:8090/dog";
  let request = new XMLHttpRequest();
  request.open("GET", url);
  request.responseType = "json";
  request.send();
  request.onreadystatechange = (ev) => {
    let t = document.getElementById("loader");
    if (request.readyState === XMLHttpRequest.LOADING) {
      t.style.display = "block";
    } else if (request.readyState === XMLHttpRequest.DONE) {
      document.body.removeChild(t);
    }
  };
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
