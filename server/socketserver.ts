import { exec } from "child_process";

export default class SocketServer {
  public port: number;
  public filepath: string;
  constructor(port: number, filepath: string) {
    this.port = port;
    this.filepath = filepath;
  }

  public start() {
    const server = exec(`websocketd --port=${this.port} ${this.filepath}`);

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
