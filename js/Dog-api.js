import express, { json } from "express";
import * as fs from "fs";
const app = express();
app.use(json()); // middleware

app.get("/dog", (req, res) => {
  const data = JSON.parse(fs.readFileSync("./js/data.json"));
  res.header("Content-Type", "Application/json");
  res.send(data);
});
// getting specific species of particular breed
app.get("/dog/:species", (req, res) => {
  const file = JSON.parse(fs.readFileSync("./js/data.json"));
  const key = req.params.species;
  res.header("Content-Type", "Application/json");
  const mainKeys = Object.keys(file);
  for (let x in mainKeys) {
    let breed = Object.keys(file[mainKeys[x]]);
    // console.log(breed);
    if (breed.includes(key)) {
      const val = file[mainKeys[x]][key];
      res.send(val);
      break;
    }
  }
  // console.log(mainKeys);
  // const val=file.message[key];
  // console.log(val);
  // res.send(val);
});

app.post("/dog", (req, res) => {
  const file = JSON.parse(fs.readFileSync("./js/data.json"));
  const key = Object.keys(req.body);
  const val = Object.values(req.body);
  for (let i in key) {
    file[key[i]] = val[i];
    // console.log(key[i],val[i]);
  }
  // console.log(key,val);
  fs.writeFileSync("./js/data.json", JSON.stringify(file));
  res.header("Content-Type", "Application/json");
  res.send(file);
});

//to add data inside message key using post method
app.post("/dog/newBreed/", (req, res) => {
  const file = JSON.parse(fs.readFileSync("./js/data.json"));
  const key = Object.keys(req.body);
  const val = Object.values(req.body);
  for (let i in key) {
    let t = [];
    let v = val[i];
    t.push(v);
    t = t.flatMap((n) => n);
    file.message[key[i]] = t;
  }
  fs.writeFileSync("./js/data.json", JSON.stringify(file));
  res.header("Content-Type", "Application/json");
  res.send(file);
});

app.put("/dog", (req, res) => {
  const file = JSON.parse(fs.readFileSync("./js/data.json"));
  const key = Object.keys(req.body);
  const val = Object.values(req.body);
  file[key[0]] = val[0];
  fs.writeFileSync("./js/data.json", JSON.stringify(file));
  res.send("Successfully updated '-' ");
});

//adding data inside the existing species
app.put("/dog/newSpecies", (req, res) => {
  const file = JSON.parse(fs.readFileSync("./js/data.json"));
  const key = Object.keys(req.body);
  const val = Object.values(req.body);
  for (let i in key) {
    let t = file.message[key[i]];
    t.push(val[i]);
    t = t.flatMap((n) => n);
  }
  fs.writeFileSync("./js/data.json", JSON.stringify(file));
  res.send("Successfully updated '-' ");
});

app.delete("/dog/:key", (req, res) => {
  const deletekey = req.params.key;
  const file = JSON.parse(fs.readFileSync("./js/data.json"));
  let mainKeys=Object.keys(file);
  for(let x in mainKeys){
    if(mainKeys.includes(deletekey)){
      delete file[mainKeys[x]]
    }
    else{
    let breed = Object.keys(file[mainKeys[x]]);
    if (breed.includes(deletekey)) {
      delete file[mainKeys[x]][deletekey];
      break;
    }
  }
  }
  fs.writeFileSync("./js/data.json", JSON.stringify(file));
  res.send("Deleted successfully");
});

app.listen(8090);
