"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = __importDefault(require("util"));
var dotenv_1 = __importDefault(require("dotenv"));
var fs_1 = __importDefault(require("fs"));
dotenv_1.default.config();
//format...........................................................
var aString = "Hello,  I am %s";
var res = util_1.default.format(aString, "Pranusha");
console.log("Using util format : " + res);
var str = "The object is %o";
var res2 = util_1.default.formatWithOptions({ colors: true }, str, { foo: 72 });
console.log("Using util formatwithoption : " + res2);
//inspect with colors..............................................
console.log(util_1.default.inspect({ x: 100, y: "y" }, false, 2, true));
//callbackify......................................................
var fn = function () { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
    return [2 /*return*/, "hello world"];
}); }); };
var callbackFunction = util_1.default.callbackify(fn);
callbackFunction(function (err, ret) {
    if (err)
        throw err;
    console.log(ret);
});
//debuglog...........................................................
var dbug = util_1.default.debuglog("foo1");
var dbug2 = util_1.default.debuglog("foo2");
dbug("Good morning1!!");
dbug("Good morning2!!");
dbug2("welcome1..");
dbug2("welcome2..");
console.log("Env : ", process.env.NODE_DEBUG);
//debuglog().enabled..................................................
// const d=util.debuglog("foo").enabled;//??
//deprecate..........................................................
var myfunc = function () {
    console.log("Inside Deprecated function!!");
};
var fn1 = util_1.default.deprecate(myfunc, "Using a Deprecated function", "DEP0012");
fn1();
//SystemErrorName and map .....................................................
fs_1.default.access("file/that/does/not/exist", function (err) {
    // util.getSystemErrorName(err.errno);
    var errorMap = util_1.default.getSystemErrorMap();
    console.log("Inside SystemErrorMap : ", err === null || err === void 0 ? void 0 : err.errno);
    var name = errorMap.get((err === null || err === void 0 ? void 0 : err.errno) || 0);
    console.error(name);
});
