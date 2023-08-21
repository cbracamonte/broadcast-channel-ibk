declare class BroadcastChannelIbk {
    private channel;
    private listeners;
    constructor(channelName: string);
    private handleMessage;
    addListener(type: string, callback: (data: any) => void): void;
    removeListener(type: string, callback: (data: any) => void): void;
    sendMessage(type: string, data: any): void;
    close(): void;
}
export default BroadcastChannelIbk;
//# sourceMappingURL=index.d.ts.map