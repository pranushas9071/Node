import router from "../Routers/birds.js";
import express from "express";
const app = express();
app.use("/birds", router);
app.use(express.static("public")); //http://localhost:8080/front.html =>html page
// app.use("/static", express.static("public")); //http://localhost:8080/static/front.html
app.listen(8080);
