import async_hooks from "async_hooks";

const eid = async_hooks.executionAsyncId();
const tid = async_hooks.triggerAsyncId();

console.log(`EID : ${eid}
TID : ${tid}`);

const init = (
  asyncId: any,
  type: any,
  triggerAsyncId: any,
  resource: any
) => {};
const before = (asyncId: any) => {};

const after = (asyncId: any) => {};

const destroy = (asyncId: any) => {};

const promiseResolve = (asyncId: any) => {};
const asyncHook = async_hooks.createHook({
  init,
  before,
  after,
  destroy,
  promiseResolve,
});

asyncHook.enable();
asyncHook.disable();
