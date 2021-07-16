const EventEmitter = require("events");
const ee = new EventEmitter("myevent");
ee.on("myevent", (num) => {
  console.log(`My event has started in Node.js with an arguement ${num}`);
});
ee.emit("myevent",5);
