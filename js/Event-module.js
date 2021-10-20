import * as Event from "events";
// const Event = require("events");
const ee = new Event.EventEmitter();

const listener2 = () => {
  console.log("Listener2...");
};
const listener3 = () => {
  console.log("Listener3....");
};
const listener4 = () => {
  console.log("Listener4....");
};
ee.on("event1", () => {
  console.log("Listener1....");
});

ee.addListener("event2", listener2);
ee.addListener("event1", listener3);

ee.emit("event1");
ee.emit("event2");

console.log(ee.eventNames());
console.log(ee.getMaxListeners()); // default 10
console.log(ee.listenerCount("event1")); // anonymous, lis 2 : total -->2
console.log(ee.listeners("event1"));

ee.prependListener("event1", listener4); // adding listeners in front
console.log(ee.listenerCount("event1")); // anonymous, lis 2,lis 4 : total -->3
console.log(ee.listeners("event1"));

// ee.removeListener("event1",listener4);
// ee.removeAllListeners("event1");

ee.setMaxListeners(50);
console.log(ee.getMaxListeners());
