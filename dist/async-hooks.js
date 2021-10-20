"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var async_hooks_1 = __importDefault(require("async_hooks"));
var fs_1 = __importDefault(require("fs"));
var eid = async_hooks_1.default.executionAsyncId();
var tid = async_hooks_1.default.triggerAsyncId();
console.log("EID : " + eid + "\nTID : " + tid);
var write = function (phase, id) {
    fs_1.default.writeSync(1, "Phase : " + phase + ", Exec.Id : " + async_hooks_1.default.executionAsyncId() + ", " + id + "\n");
};
var init = function (asyncId, type, triggerAsyncId, resource) { };
var before = function (asyncId) {
    write("Before", "async_id: " + asyncId);
};
var after = function (asyncId) {
    write("After", "async_id: " + asyncId);
};
var destroy = function (asyncId) {
    write("Destroy", "async_id: " + asyncId);
};
var promiseResolve = function (asyncId) { };
var asyncHook = async_hooks_1.default.createHook({
    init: init,
    before: before,
    after: after,
    destroy: destroy,
    promiseResolve: promiseResolve,
});
asyncHook.enable();
write("Before call", "");
var time = function (tim) {
    write("Inside timeout", "");
    console.log("ExecutionAsyncId inside timeout : " + async_hooks_1.default.executionAsyncId());
    console.log("TriggerAsyncId inside timeout : " + async_hooks_1.default.triggerAsyncId());
    console.log("This function is called after " + tim + " ms");
};
setTimeout(time, 2000, 2000);
// asyncHook.disable();
