/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/utils/App';
import {name as appName} from './app.json';
import Login from './src/screens/Login'
import search from './src/screens/search'

AppRegistry.registerComponent(appName, () => search);
