import express from "express";
const app = express();
app.get("/connect", (req, res) => {
  res.statusCode = 200;
  //   res.redirect("/manyCall")
  res.send("Hello world");
});

app.get(
  "/manyCall",
  (req, res, next) => {
    console.log("first call");
    next();
  },
  (req, res) => {
    res.send("second call");
  }
);

let c1 = (req, res, next) => {
  console.log("First");
  next();
};
let c2 = (req, res, next) => {
  console.log("Second");
  next();
};
let c3 = (req, res) => {
  res.send("Final");
};

app.get("/arrays", [c1, c2, c3]);

app
  .route("/book")
  .get((req, res) => {
    res.send("Get method");
  })
  .post((req, res) => {
    res.send("Post method");
  })
  .put((req, res) => {
    res.send("Put method");
  });
app.listen(8080);
