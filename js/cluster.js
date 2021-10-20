import express from "express";
import * as os from "os";
import cluster from "cluster";

const app = express();
const cpus = os.cpus().length;
const clust = cluster;
// console.log("No of cpus : ", cpus);

if (clust.isMaster) {
  console.log("Master ..");
  for (let i = 0; i < cpus; i++) {
    clust.fork();
  }
  clust.on("exit", (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
  });
} else {
  // process.on("error", () => {  
  //   console.log("Error");
  // });
  console.log("worker connected? - ",clust.worker.isConnected());
  console.log("worker dead? - ",clust.worker.isDead());

  app.get("/", (req, res) => {
    const data = `Worker : ${process.pid}`;
    res.send(data);
  });
  app.listen(8080, () => {
    console.log("Server started at 8080");
  });
  console.log(`worker ${process.pid} started`);
}
