export default class WS extends WebSocket {
  constructor(url: string) {
    super(url);

    super.onopen = (e: any) =>
      console.log(`WebSocket now open on url: ${e.target.url}`);

    super.onclose = () => console.log(`WebSocket has now been closed!`);

    this.iterator = this.iterator.bind(this);
  }

  public [Symbol.asyncIterator]() {
    return this.iterator();
  }

  private oncePromise(emitter: any, event: any): Promise<any> {
    return new Promise(resolve => {
      const handler = (...args: any[]) => {
        emitter.removeEventListener(event, handler);
        resolve([...args][0]);
      };
      emitter.addEventListener(event, handler);
    });
  }

  private async *iterator() {
    while (super.readyState !== 3) {
      yield (await this.oncePromise(this, "message")).data;
    }
  }
}
