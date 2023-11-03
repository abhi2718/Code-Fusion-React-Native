import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, Pressable} from 'react-native';
import {CometChatConversationsWithMessages} from '@cometchat/chat-uikit-react-native';

import {theme} from '../../infrastructure/theme';
import {styles, Error} from './styles';
export const Home = () => {
  const {navigate} = useNavigation();
  const navigator = () =>
    navigate('/settings', {
      name: 'nihal',
      email: 'nihal123@gmail.com',
    });

  return (
    <View style={styles.conatiner}>
      <CometChatConversationsWithMessages />
      {/* <Text> Home</Text>
      <Error color={theme.colors.ui.success}>Error</Error>
      <Pressable onPress={navigator}>
        <Text> Go To Setting</Text>
      </Pressable> */}
    </View>
  );
};
