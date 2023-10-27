import React from 'react';
import {View, Text, Button} from 'react-native';
import {Container, Error, HeaderText} from '../../compoents/tools';
import {styles} from './splashStyle';
import useViewModal from './viewModal';

export default function SplashScreen() {
  const { counter, setCounter } = useViewModal();

  return (
    <Container>
      <Error>Error </Error>
      <HeaderText fontSize={67}>Header</HeaderText>
      <Button title="Click Me" onPress={() => setCounter(counter + 1)} />
    </Container>
  );
}
