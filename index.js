/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {AppStack} from './src/Router';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => AppStack);
