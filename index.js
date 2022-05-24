/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import data from './app.json';

const appName = data.name;
AppRegistry.registerComponent(appName, () => App);
