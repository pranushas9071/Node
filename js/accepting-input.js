import * as read from "readline"

const rl = read.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("What is your name?", (answer) => {
  //once ans is given and enter is pressed callback function will be called
  console.log("Welcome " + answer);
  rl.close();
});
