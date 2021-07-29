import mongoose from "mongoose";

mongoose
  .connect("mongodb://localhost:27017/Dog-data", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then((result) => console.log("Connected to db.."))
  .catch((err) => console.log(err));

// const db = mongoose.connection;
// db.once("open", () => {
//   console.log("Connection established!!");
// });

const Schema = mongoose.Schema;

const dogSchema = new Schema({
  breed: {type:Schema.Types.String,index:true},
  species: {type:[Schema.Types.String]},
});
dogSchema.index({ breed: 1},{unique:true});

// const Details = mongoose.model("Detail", dogSchema);

// const data = new Details({ message: "Welcome", status: "Success" });

// data.save();
