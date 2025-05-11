import { AppRegistry, Text, TextInput } from 'react-native';

import App from '@/app/App';

import { name as appName } from './app.json';

import '@/app/i18n/i18n';

Text.defaultProps = Text.defaultProps || {};
Text.defaultProps.allowFontScaling = false;

TextInput.defaultProps = TextInput.defaultProps || {};
TextInput.defaultProps.allowFontScaling = false;

AppRegistry.registerComponent(appName, () => App);
