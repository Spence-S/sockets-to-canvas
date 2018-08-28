export default class CanvasRectangle {
  public width: number;
  public height: number;
  public x: number;
  public y: number;
  private canvasEl: HTMLCanvasElement;

  constructor(width: number, height: number, x = 1, y = 1) {
    this.height = height;
    this.width = width;
    this.x = x;
    this.y = y;

    this.canvasEl = this._createCanvas();
  }

  get ctx() {
    return this.canvasEl.getContext("2d");
  }

  public appendTo(elem: HTMLElement) {
    elem.appendChild(this.canvasEl);
  }

  public iterateNextFillPosition() {
    if (this.x === this.width) {
      this.x = 1;
      this.y++;
    } else {
      this.x++;
    }
  }

  private _createCanvas() {
    const el = document.createElement("canvas");
    el.width = this.width;
    el.height = this.height;
    return el;
  }
}
