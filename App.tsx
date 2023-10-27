import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {WrapperContainer} from './src/compoents/tools';
import Navigation from './src/navigation';

function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <WrapperContainer>
        <Navigation />
      </WrapperContainer>
    </SafeAreaView>
  );
}

export default App;
