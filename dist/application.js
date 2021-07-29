"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = express_1.default();
var admin = express_1.default();
app.locals.name = "Pranusha";
admin.get("/details", function (req, res) {
    console.log("mount path : ", admin.mountpath);
    res.send("details..");
});
admin.on("mount", function (parent) {
    console.log("Admin mounted...");
    //   console.log(parent);
});
app.use("/admin", admin); // mounting
app.get("/app", function (req, res) {
    console.log("Local var : ", app.locals.name);
    res.send("Hello world..");
});
app.listen(8080, function () {
    console.log("Server started..");
});
