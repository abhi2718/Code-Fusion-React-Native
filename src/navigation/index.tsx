import React from 'react';
import {View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {WrapperContainer} from '../compoents/tools';
import SplashScreen from '../screens/splash';
import { StackNavigator } from './stack.navigation';

// export default function Navigation() {
//   return (
//     <WrapperContainer>
//       <SplashScreen />
//     </WrapperContainer>
//   );
// }

export default function Navigation() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}
