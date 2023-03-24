/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {SafeAreaView} from 'react-native';
import ChatScreen from './src/component/ChatScreen';

function App(): JSX.Element {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ChatScreen />
    </SafeAreaView>
  );
}

export default App;
