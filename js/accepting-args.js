import minimist from "minimist"
//accepting args from command line

//In terminal---> node ./js/accepting-args.js name=pranusha aName=dharani

process.argv.forEach((val, index) => {
  console.log(`${index} ${val}`); //gives 4 values
});

console.log(process.argv[3]); // prints aName=dhrani

const ar = process.argv.slice(2);
console.log(ar); // gives ['name=pranusha','aName=dharani']

//minimist library to parse
//In terminal --> node ./js/accepting-args.js --name=pranusha --aName=dharani
const ar1 = minimist(process.argv.slice(2));
console.log(ar1["name"]);

// const args = require("minimist")(process.argv.slice(2));
// console.log(args["name"]);
