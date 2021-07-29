import * as Events from "events";
const ee=new Events.EventEmitter()
// const EventEmitter = require("events");
ee.on("myevent", (num) => {
  console.log(`My event has started in Node.js with an arguement ${num}`);
});
ee.emit("myevent",5);
