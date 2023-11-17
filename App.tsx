import React, { useEffect } from 'react';
import {View, Text, SafeAreaView, StatusBar} from 'react-native';
import {ThemeProvider} from 'styled-components/native';
import {WrapperContainer} from './src/compoents/tools';
import {theme} from './src/infrastructure/theme';
import Navigation from './src/navigation';

function App() {
  useEffect(() => {
    console.log(StatusBar.currentHeight);
  },[])
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar backgroundColor="#61dafb" />
      <ThemeProvider theme={theme}>
        <WrapperContainer>
          <Navigation />
        </WrapperContainer>
      </ThemeProvider>
    </SafeAreaView>
  );
}

export default App;
