import React from 'react';
import {View, Text, Button} from 'react-native';
import {useViewModal} from './signinViewModal';
import {styles} from './signInStyle';

export default function SignInScreen() {
  const {count, countUp, countDown} = useViewModal();
  return (
    <View style={styles.containerStyle}>
      <Text>{count}</Text>
      <View style={styles.btnContainer}>
        <Button title="Count UP" onPress={countUp} />
      </View>
      <View style={styles.btnContainer}>
        <Button title="Count Down" onPress={countDown} />
      </View>
    </View>
  );
}
