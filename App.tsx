import React from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {colors} from './assets/colors';
import MindSetProvider from './components/MindSetProvider';
import PersonalityProvider from './components/PersonalityProvider';
import MainNavigator from './navigators/MainNavigator';
import {Provider as JotaiProvider} from 'jotai';
import {store} from './stores/stores';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <JotaiProvider store={store}>
        <StatusBar barStyle={'light-content'} backgroundColor={colors.black} />
        <MindSetProvider>
          <PersonalityProvider>
            <MainNavigator />
          </PersonalityProvider>
        </MindSetProvider>
      </JotaiProvider>
    </NavigationContainer>
  );
}

export default App;
