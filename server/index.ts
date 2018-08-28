import * as Koa from "koa";
import * as logger from "koa-logger";
import * as Router from "koa-router";
import * as send from "koa-send";
import * as serve from "koa-static";
import * as path from "path";
import SocketServer from "./socketserver";

const app = new Koa();
const router = new Router();

/**
 * start up websocketd
 */
const socketserver = new SocketServer(3030, __dirname + "/../socketserver.sh");
socketserver.start();

app.use(logger());
app.use(serve(__dirname + "/../public"));

router.get("/", async ctx => {
  await send(ctx, path.resolve("/../public/index.html"));
});

app.use(router.routes());

app.listen(3000);

console.log("Server running on port 3000");
