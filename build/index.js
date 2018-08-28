"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Koa = require("koa");
const logger = require("koa-logger");
const Router = require("koa-router");
const send = require("koa-send");
const serve = require("koa-static");
const path = require("path");
const socketserver_1 = require("./socketserver");
const app = new Koa();
const router = new Router();
/**
 * start up websocketd
 */
const socketserver = new socketserver_1.default(3030, __dirname + "/../socketserver.sh");
socketserver.start();
app.use(logger());
app.use(serve(__dirname + "/../public"));
router.get("/", (ctx) => __awaiter(this, void 0, void 0, function* () {
    yield send(ctx, path.resolve("/../public/index.html"));
}));
app.use(router.routes());
app.listen(3000);
console.log("Server running on port 3000");
//# sourceMappingURL=index.js.map