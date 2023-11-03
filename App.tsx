import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {ThemeProvider} from 'styled-components/native';
import {WrapperContainer} from './src/compoents/tools';
import {theme} from './src/infrastructure/theme';
import Navigation from './src/navigation';

function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ThemeProvider theme={theme}>
        <WrapperContainer>
          <Navigation />
        </WrapperContainer>
      </ThemeProvider>
    </SafeAreaView>
  );
}

export default App;
