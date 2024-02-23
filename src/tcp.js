import moment from 'moment';
import 'moment/locale/vi'; // without this line it didn't work
moment.locale('vi');

import {getDateTimeCurrent} from './utils';
import {CHECK_ONLINE} from './enum';
import {runCallback} from './callback';

class TCP {
  constructor() {
    this.count_send = 0;
    this.time_online;
    this.server;
    this.socket;
  }

  resetCountSend() {
    this.count_send = 0;
  }

  resetWhenErr(RNRestart) {
    RNRestart.restart();
  }

  addTime() {
    let dateNow = getDateTimeCurrent();
    this.time_online = dateNow;
    this.resetCountSend();
  }

  checkConnectTcp(amount_ping, time_offline) {
    if (this.time_online !== undefined) {
      if (moment().diff(moment(this.time_online), 'seconds') > time_offline) {
        this.count_send++;
        // send ping if client not response
        if (this.count_send > amount_ping) {
          return CHECK_ONLINE.NOT_CONNECT;
        }
        return CHECK_ONLINE.CHECK_CONNECT; // flag to know device is checking connect
      }

      return CHECK_ONLINE.CONNECT;
    }
    return CHECK_ONLINE.NOT_CONNECT;
  }

  createServer(net) {
    this.server = net.createServer(function (socket) {
      this.socket = socket;

      this.socket.on('data', data => {
        runCallback('READ', data.toString());
      });
    });

    this.server.on('error', error => {
      console.log('error ' + error);
      this.resetWhenErr();
    });

    this.server.on('close', () => {
      console.log('server close');
    });
  }

  listenPort(port) {
    console.log(this.server.listen, 'in class ?');
    this.server.listen(port, () => {
      console.log('opened server on ' + JSON.stringify(this.server.address()));
    });
  }
}

export {TCP};
