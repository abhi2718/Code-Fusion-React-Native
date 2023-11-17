import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, Pressable, Platform, Dimensions} from 'react-native';
import {theme} from '../../infrastructure/theme';
import {useHeaderHeight} from '@react-navigation/elements';
import {styles, Error} from './styles';
import {dimensions} from '../../compoents/tools';
export const Home = () => {
  const {navigate} = useNavigation();
  const navigator = () =>
    navigate('/settings', {
      name: 'nihal',
      email: 'nihal123@gmail.com',
    });
  const viewHeight =
    dimensions.height -
    (dimensions.androidStatusBarHeight! + useHeaderHeight());

  if (dimensions.isAndroid) {
    return (
      <View style={{height: viewHeight, backgroundColor: 'blue'}}>
        <Text> Home</Text>
        <Error color={theme.colors.ui.success}>Error</Error>
        <Pressable onPress={navigator}>
          <Text> Go To Setting From Android</Text>
        </Pressable>
        <Text>{dimensions.height}</Text>
        <Text>{dimensions.width}</Text>
      </View>
    );
  }
  return (
    <View style={styles.conatiner}>
      <Text> Home</Text>
      <Error color={theme.colors.ui.success}>Error</Error>
      <Pressable onPress={navigator}>
        <Text> Go To Setting iOS</Text>
        <Text>{dimensions.height}</Text>
        <Text>{dimensions.width}</Text>
      </Pressable>
    </View>
  );
};
