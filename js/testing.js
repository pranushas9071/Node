// const fs = require("fs");
import {readFile} from "fs";
try {
  //   fs.writeFile("./js/test.txt", "hello Pranusha", async (err) => {
  //     if (err) {
  //       console.error(err);
  //       return;
  //     }
  // const read = fs.readFileSync("./js/test.txt","utf8");
  // console.log(read);
  (async function () {
    const promise1 = new Promise((res, rej) => {
      readFile("C:/Users/pranusha.sivasamy/Documents/GitHub/Node/js/test1.txt", { encoding: "utf8" }, (err, data) => {
        if (err) rej(err);
        res(data);
      });
    });
    const promise2 = new Promise((res, rej) => {
      readFile("./js/test2.txt", { encoding: "utf8" }, (err, data) => {
        if (err) rej(err);
        res(data);
      });
    });
    const files = await Promise.all([promise1, promise2]);
    console.log(files);
  })();

  //   console.log(promise1);
  //   const data = await promise1;
  //   console.log(promise1);
  //   console.log(data);

  //   });
  //   fs.writeFileSync("./js/test.txt", "hello world");
} catch (err) {
  console.error(err);
}
