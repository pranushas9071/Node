import express, { Request, Response } from "express";

const app = express();
const admin = express();

app.locals.name = "Pranusha";

admin.get("/details", (req: Request, res: Response) => {
  console.log("mount path : ", admin.mountpath);
  res.send("details..");
});

admin.on("mount", (parent) => {
  console.log("Admin mounted...");
//   console.log(parent);
});

app.use("/admin", admin); // mounting

app.get("/app", (req: Request, res: Response) => {
  console.log("Local var : ", app.locals.name);
  res.send("Hello world..");
});
app.listen(8080, () => {
  console.log("Server started..");
});
