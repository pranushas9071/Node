import { blueBright, cyanBright, green, greenBright, magentaBright, redBright, rgb, whiteBright, yellowBright } from "chalk";
import ProgressBar from "progress";
//output to command line

//console.count()...............................................................

let x = 1;
console.count(x);
console.count(x);
console.count(x);

let mango = ["mango", "mango", "apple", "apple"];
mango.forEach((fruit) => {
  console.count(fruit);
});
console.countReset("mango");
console.countReset("apple");

mango.forEach((fruit) => {
  console.count(fruit);
});

//console.trace().............................................................

// const function2 = () => console.trace();
// const function1 = () => function2();
// function1();

//console.time()...............................................................

console.time();
for (let i = 0; i < 1000; i++) {}
console.timeEnd();

//Coloring text in console.......................................................

console.log(
  yellowBright("Pranusha") +
    blueBright("Pranusha") +
    cyanBright("Pranusha") +
    green("Pranusha") +
    greenBright("Pranusha") +
    magentaBright("Pranusha") +
    redBright("Pranusha") +
    rgb(123, 45, 67).inverse("pranusha") +
    whiteBright("Pranusha")
);

const bar = new ProgressBar(":bar", { total: 10 });//if :bar --> == if :percent -->10% to 100% if :current --> 1 to 10
const timer = setInterval(() => {
  bar.tick();
  if (bar.complete) {
    clearInterval(timer);
  }
}, 100);
