/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

export {MAINMODULE} from './src/main';

AppRegistry.registerComponent(appName, () => App);
