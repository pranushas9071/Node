"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var async_hooks_1 = __importDefault(require("async_hooks"));
var eid = async_hooks_1.default.executionAsyncId();
var tid = async_hooks_1.default.triggerAsyncId();
console.log("EID : " + eid + "\nTID : " + tid);
var init = function (asyncId, type, triggerAsyncId, resource) { };
var before = function (asyncId) { };
var after = function (asyncId) { };
var destroy = function (asyncId) { };
var promiseResolve = function (asyncId) { };
var asyncHook = async_hooks_1.default.createHook({
    init: init,
    before: before,
    after: after,
    destroy: destroy,
    promiseResolve: promiseResolve,
});
asyncHook.enable();
asyncHook.disable();
