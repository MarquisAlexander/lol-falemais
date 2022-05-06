import React from 'react';
import {StatusBar} from 'react-native';
import {GestureHandlerRootView} from  "react-native-gesture-handler"

import {FaleMais} from './src';

export function App() {
  return (
    <GestureHandlerRootView>
      <StatusBar barStyle="light-content" animated translucent />
      <FaleMais />
    </GestureHandlerRootView>
  );
}
