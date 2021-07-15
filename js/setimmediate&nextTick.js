function timeout() {
  console.log("set Timeout......");
}
function nexttick() {
  console.log("Next tick .....");
}
function setimmediate() {
  console.log("Set immediate....");
}

setTimeout(timeout, 1000); //fourth
setImmediate(setimmediate); //third  -->low priority when compared with nextTick
process.nextTick(nexttick); //second  --> it calls the callback function once the current block of code is over
console.log("End"); //first

//timeinterval..............................................................
let x = 0;
const si = setInterval(timeinterval, 500, x);
function timeinterval() {
  if (x < 4) {
    console.log(x);
    x++;
  }
  else{
    clearInterval(si); //clears timeinterval
  }
}

//recursive timeout.........................................................

let i = 10;
setTimeout(function run() {
  console.log(i);
  i++;
  if (i < 14) {
    setTimeout(run, 500);
  }
}, 500);
