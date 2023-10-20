import React from 'react';
import {View, Text} from 'react-native';
import {WrapperContainer} from './src/compoents/tools';
import Navigation from './src/navigation';

function App() {
  return (
    <WrapperContainer>
      <Navigation />
    </WrapperContainer>
  );
}

export default App;
