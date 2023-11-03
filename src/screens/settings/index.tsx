import React from 'react';
import {View, Text, Pressable} from 'react-native';
import { styles } from './styles';

export const Settings = (props: any) => {
  const {navigation} = props;
  const {route} = props;
  console.log(route.params);
  //const navigator = () => navigation.navigate('/notifications');

  return (
    <View style={styles.conatiner}>
      <Text> Home</Text>
      <Pressable onPress={() => {}}>
        <Text> Go To Home</Text>
      </Pressable>
    </View>
  );
};
