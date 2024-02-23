const {getFontSize} = require('./fontsize');
const {getDateTimeCurrent, numberWithCommas} = require('./utils');
import {runCallback, assignCallback} from './callback';
import {CHECK_ONLINE} from './enum';
import {TCP} from './tcp';
export class MAINMODULE extends TCP {
  constructor() {
    super();
    this.check_online_enum = CHECK_ONLINE;
  }

  fontSize(size) {
    getFontSize(size);
  }

  utils() {
    return {
      UTILS: {getDateTimeCurrent, numberWithCommas},
    };
  }

  createCallback(key, func) {
    this.obj = {
      [`${key}`]: func,
    };
    assignCallback(this.obj);
  }

  excuteCallback(key, value) {
    runCallback(key, value);
  }
}
