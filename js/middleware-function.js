import express from "express";
const app = express();

let myfunc = (req, res, next) => {
  //middleware function
  console.log("My function");
  next();
};

let time = (req, res, next) => {
  req.requestTime = Date.now();
  next();
};

app.use(time);
app.use(myfunc);

app.get("/", (req, res) => {
  const data = "Hello world " + req.requestTime;
  res.send(data);
});
//next(route)........................................................................
app.get(
  "/user/:id",
  (req, res, next) => {
    if (req.params.id === "0") {
      next("route");
      console.log("Id==0");
    } else {
      console.log("Id!=0");
      next();
    }
  },
  (req, res, next) => {
    res.send("Regular");
  }
);

app.get("/user/:id", (req, res, next) => {
  res.send("Special");
});
//middleware declared as array......................................................
const logOriginalUrl = (req, res, next) => {
  console.log("Request URL:", req.originalUrl);
  next();
};

const logMethod = (req, res, next) => {
  console.log("Request Type:", req.method);
  next();
};

let logStuff = [logOriginalUrl, logMethod];
app.get("/users/:id", logStuff, function (req, res, next) {
  res.send("User Info");
});

//error handling middleware..............................................
app.use((err,req,res,next)=>{
    console.error(err.stack);
    res.status(500).send("Something broke..")
})

app.listen(3000);
