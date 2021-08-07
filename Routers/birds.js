import express from "express";

let router = express.Router();
router.get("/", (req, res) => {
  res.send("Home page...");
});
router.get("/about", (req, res) => {
  res.send("About birds...");
});

// router.use() =>router middleware.....
export default router;
