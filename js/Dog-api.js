import express, { json } from "express";
import * as fs from "fs";
import cors from "cors";
const app = express();
app.use(json()); // middleware
app.use(cors());
app.use(express.urlencoded({ extended: false }));

const app = express();
app.use(json()); // middleware
app.use(cors());

app.get("/dog", (req, res) => {
  const data = JSON.parse(fs.readFileSync("./js/data.json"));
  res.header("Content-Type", "Application/json");
  res.send(data);
});

// getting specific species of particular breed
app.get("/dog/selectBreed", (req, res) => {
  const file = JSON.parse(fs.readFileSync("./js/data.json"));
  const key = req.query.Breed;
  console.log(key);
  console.log("url : " + req.url);
  console.log("query : ", req.query);
  const mainKeys = Object.keys(file);
  for (let x in mainKeys) {
    let breed = Object.keys(file[mainKeys[x]]);
    if (breed.includes(key)) {
      const val = file[mainKeys[x]][key];
      // res.download(
      //   "C:Userspranusha.sivasamyPicturesScreenshotsScreenshot(11).png"
      // );
      res.send(val);
      break;
    }
  }
});

app.post("/dog", (req, res) => {
  const file = JSON.parse(fs.readFileSync("./js/data.json"));
  const key = Object.keys(req.body);
  const val = Object.values(req.body);
  for (let i in key) {
    file[key[i]] = val[i];
  }
  fs.writeFileSync("./js/data.json", JSON.stringify(file));
  res.header("Content-Type", "Application/json");
  res.cookie("name", "Pranusha", {
    // expires: new Date(Date.now() + 900000),
    maxAge:900000,
    httpOnly: true,
  });
  res.send(file);
});

//to add data inside message key using post method
app.post("/dog/newBreed/", (req, res) => {
  const file = JSON.parse(fs.readFileSync("./js/data.json"));
  const key = req.query.breed;
  const val = req.query.species;
  console.log(key, val);
  let t = [];
  let v = val;
  t.push(v);
  file.message[key] = t;
  fs.writeFileSync("./js/data.json", JSON.stringify(file));
  res.header("Content-Type", "text/plain");
  res.send("Added successfully");
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
  const key = req.query.breed;
  const val = req.query.species;
  let t = [];
  t.push(file.message[key]);
  t.push(val);
  file.message[key] = t;
  fs.writeFileSync("./js/data.json", JSON.stringify(file));
  res.send("Successfully updated '-' ");
});

app.delete("/dog/:key", (req, res) => {
  const deletekey = req.params.key;
  const file = JSON.parse(fs.readFileSync("./js/data.json"));
  let mainKeys = Object.keys(file);
  for (let x in mainKeys) {
    if (mainKeys.includes(deletekey)) {
      delete file[mainKeys[x]];
    } else {
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

//................................................................................................

app.get("/countdown", (req, res) => {
  res.writeHead(200, {
    "Content-Type": "text/event-stream",
    "Cache-Control": "no-cache",
    Connection: "keep-alive",
  });
  countdown(res, 10);
});

const countdown = (res, count) => {
  res.write("data: " + count + "\n\n");
  if (count) setTimeout(() => countdown(res, count - 1), 1000);
  else res.end();
};

app.get("/connect", (req, res) => {
  res.writeHead(200, {
    "Content-Type": "text/event-stream",
    "Cache-Control": "no-cache",
    Connection: "keep-alive",
  });
  sendData(res);
});

function sendData(res) {
  let i = "hello";
  res.write("data: " + i + "\n\n");
  console.log("data sent");
  res.end();
}

app.listen(8090);


app.get("/files/:id", (req, res) => {
  console.log(req.baseUrl);
  console.log("fresh : ", req.fresh);
  console.log("host : ", req.host);
  console.log("hostname : ", req.hostname);
  console.log("ip : ", req.ip);
  console.log("ips : ", req.ips);
  console.log("method : ", req.method);
  console.log("originalurl : ", req.originalUrl);
  console.log("path : ", req.path);
  console.log("route : ", req.route);
  console.log("secure : ", req.secure);
  console.log("Stale : ", req.stale);
  console.log("xhr : ", req.xhr);
  // console.log(req.accepted);
  console.log(req.get("Content-Type"));
  console.log(req.is("text/html"));
  console.log(res.headersSent);
  console.log(res.locals);
  res.cookie("foo", "bar");
  res.setHeader("Content-Type","text/html")
  console.log(res.get("Content-Type"));
  res.links({
    next: 'http://api.example.com/users?page=2',
    last: 'http://api.example.com/users?page=5'
  })
  res.send("Hello world");
});