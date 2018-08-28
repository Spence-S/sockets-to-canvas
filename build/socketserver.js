"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const child_process_1 = require("child_process");
class SocketServer {
    constructor(port, filepath) {
        this.port = port;
        this.filepath = filepath;
    }
    start() {
        const server = child_process_1.exec(`websocketd --port=${this.port} ${this.filepath}`);
        server.stdout.on("data", data => {
            console.log(`stdout: ${data}`);
        });
        server.stderr.on("data", data => {
            console.log(`stderr: ${data}`);
        });
        server.on("close", code => {
            console.log(`child process exited with code ${code}`);
        });
    }
}
exports.default = SocketServer;
//# sourceMappingURL=socketserver.js.map