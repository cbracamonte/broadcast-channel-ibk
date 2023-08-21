"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BroadcastChannelIbk {
    constructor(channelName) {
        this.listeners = [];
        this.channel = new BroadcastChannel(channelName);
        this.channel.onmessage = this.handleMessage.bind(this);
    }
    handleMessage(event) {
        const { type, data } = event.data;
        this.listeners.forEach((listener) => {
            if (listener.type === type) {
                listener.callback(data);
            }
        });
    }
    addListener(type, callback) {
        this.listeners.push({ type, callback });
    }
    removeListener(type, callback) {
        this.listeners = this.listeners.filter((listener) => {
            return !(listener.type === type && listener.callback === callback);
        });
    }
    sendMessage(type, data) {
        this.channel.postMessage({ type, data });
    }
    close() {
        this.channel.close();
    }
}
exports.default = BroadcastChannelIbk;
