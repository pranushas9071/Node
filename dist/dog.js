"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
mongoose_1.default
    .connect("mongodb://localhost:27017/Dog-data", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
})
    .then(function (result) { return console.log("Connected to db.."); })
    .catch(function (err) { return console.log(err); });
// const db = mongoose.connection;
// db.once("open", () => {
//   console.log("Connection established!!");
// });
var Schema = mongoose_1.default.Schema;
var dogSchema = new Schema({
    breed: { type: Schema.Types.String, index: true },
    species: { type: [Schema.Types.String] },
});
dogSchema.index({ breed: 1 }, { unique: true });
// const Details = mongoose.model("Detail", dogSchema);
// const data = new Details({ message: "Welcome", status: "Success" });
// data.save();
