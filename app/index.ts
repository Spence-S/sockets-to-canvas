import CanvasRectangle from "./helpers/CanvasRectangle";
import WS from "./helpers/WS";

const app = () => {
  console.log("starting app");
  const canvas = new CanvasRectangle(800, 100);
  const { ctx } = canvas;

  const root = document.getElementById("root");
  const status = document.getElementById("status");
  canvas.appendTo(root);

  const ws = new WS("ws://localhost:3030");

  const loadingMesage = document.createTextNode("Loading...");
  const renderedMessage = document.createTextNode("Rendered");

  /**
   * Since we have a Symbol.asyncIterator property we can use
   * for await (... of iterable)
   */
  const run = async () => {
    status.appendChild(loadingMesage);
    for await (const message of ws) {
      if (message === "1") {
        ctx.fillRect(canvas.x, canvas.y, 1, 1);
      }
      canvas.iterateNextFillPosition();
      if (canvas.x * canvas.y === 80000) {
        status.replaceChild(renderedMessage, loadingMesage);
      }
    }
  };

  run().catch(console.error);
};

document.addEventListener("DOMContentLoaded", app);
