import async_hooks from "async_hooks";
import fs from "fs";

const eid = async_hooks.executionAsyncId();
const tid = async_hooks.triggerAsyncId();

console.log(`EID : ${eid}
TID : ${tid}`);

const write = (phase: string, id: string) => {
  fs.writeSync(
    1,
    `Phase : ${phase}, Exec.Id : ${async_hooks.executionAsyncId()}, ${id}\n`
  );
};

const init = (
  asyncId: any,
  type: any,
  triggerAsyncId: any,
  resource: any
) => {};

const before = (asyncId: number) => {
  write("Before", `async_id: ${asyncId}`);
};

const after = (asyncId: number) => {
  write("After", `async_id: ${asyncId}`);
};

const destroy = (asyncId: number) => {
  write("Destroy", `async_id: ${asyncId}`);
};

const promiseResolve = (asyncId: number) => {};

const asyncHook = async_hooks.createHook({
  init,
  before,
  after,
  destroy,
  promiseResolve,
});

asyncHook.enable();

write("Before call", ``);

const time = (tim: number) => {
  write("Inside timeout", ``);
  console.log(
    `ExecutionAsyncId inside timeout : ${async_hooks.executionAsyncId()}`
  );
  console.log(
    `TriggerAsyncId inside timeout : ${async_hooks.triggerAsyncId()}`
  );
  console.log(`This function is called after ${tim} ms`);
};

setTimeout(time, 2000, 2000);

// asyncHook.disable();
