import url from "url";
import querystring from "querystring";
//parsing url.............................................................................
let ad = "http://localhost:8090/index.html?name=pranusha&place=coimbatore";
let q = url.parse(ad);
console.log(q);
console.log(q.host);
console.log(q.pathname);
console.log(q.search);
console.log(q.query);
console.log(q.port);
let qdata = querystring.parse(q.query); //querystring.decode() alias
console.log(qdata);
let qs = querystring.stringify({ name: "pranusha", place: "Coimbatore" }); // qeurystring.encode() alias
console.log(qs);

//constructing url using component parts...................................................
const myurl = new URL("http://localhost:8090");
myurl.pathname = "/index.html";
myurl.search = "?name=pranusha&place=coimbatore";
console.log(myurl.href);

//constructing url using template strings.................................................
const pathname = "/index.html";
const search = "?name=pranusha&place=coimbatore";
const anotherUrl = new URL(`http://localhost:8090${pathname}${search}`);
console.log(anotherUrl.href);
