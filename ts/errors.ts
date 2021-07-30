import { readFile } from "fs";

const fn = () => {
  console.log("A function");
  //   throw "Throwed an error!!";
  //   throw new Error("An error object");
};
fn();

const func1 = () => {
  try {
    const a = 5;
    console.log(5 / 0);
  } catch (e) {
    console.error(e);
  }
};
func1();

process.on("uncaughtException", (err) => {
  console.error(`There was an uncaught exception ${err.message}`);
});

try {
  const func2 = async () => {
    const promise = new Promise((res, rej) => {
      readFile("./js/test1.txt", { encoding: "utf8" }, (err, data) => {
        if (err) rej(err);
        res(data);
      });
    });
    const file = await promise;
    console.log(file);
  };
  func2();
} catch (e) {
  console.log(e);
}
