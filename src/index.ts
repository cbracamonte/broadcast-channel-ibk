class BroadcastChannelIbk {
  private channel: BroadcastChannel;
  private listeners: { type: string; callback: (data: any) => void }[] = [];

  constructor(channelName: string) {
    this.channel = new BroadcastChannel(channelName);
    this.channel.onmessage = this.handleMessage.bind(this);
  }

  private handleMessage(event: MessageEvent<any>) {
    const { type, data } = event.data;
    this.listeners.forEach((listener) => {
      if (listener.type === type) {
        listener.callback(data);
      }
    });
  }

  addListener(type: string, callback: (data: any) => void) {
    this.listeners.push({ type, callback });
  }

  removeListener(type: string, callback: (data: any) => void) {
    this.listeners = this.listeners.filter((listener) => {
      return !(listener.type === type && listener.callback === callback);
    });
  }

  sendMessage(type: string, data: any) {
    this.channel.postMessage({ type, data });
  }

  close() {
    this.channel.close();
  }
}

export default BroadcastChannelIbk;
