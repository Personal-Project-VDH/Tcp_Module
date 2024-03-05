declare module 'TcpLib' {
  class MAINMODULE {
    constructor();

    server: any;
    socket: any;
    count_send: number;
    time_online: any;
    check_online_enum: any;
    onData(readFunction: any): void;
    createServer(): void;
    listenPort(port: number): void;
    createCallback(key: string, func: any): void;
    addTime(): void;
    checkConnectTcp(amount_ping: number, time_offline: number): void;
    fontSize(size: number): void;
    resetCountSend(): void;
    resetWhenErr(): void;
    utils(): {
      UTILS: {
        getDateTimeCurrent(): void;
        numberWithCommas(x: any): void;
      };
    };
  }
  export {MAINMODULE};
}
