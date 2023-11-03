import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from '../../screens/home';
import {Settings} from '../../screens/settings';
const Stack = createNativeStackNavigator();

export function StackNavigator() {
  const options = {
    headerShown: !false,
  };
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{...options, title: 'Home'}}
        name="/home"
        component={Home}
      />
      <Stack.Screen
        options={{...options, title: 'Setting'}}
        name="/settings"
        component={Settings}
      />
    </Stack.Navigator>
  );
}
