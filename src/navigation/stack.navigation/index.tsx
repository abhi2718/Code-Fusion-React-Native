import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {View, Text, Pressable} from 'react-native';
const Stack = createNativeStackNavigator();

const Home = (props: any) => {
  const {navigation} = props;
  const navigator =()=> navigation.navigate('/notifications');

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text> Home</Text>
      <Pressable onPress={navigator}>
        <Text> Go To Notification</Text>
      </Pressable>
    </View>
  );
};
const Notifications = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text> Notifications</Text>
    </View>
  );
};
const Profile = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text> Profile</Text>
    </View>
  );
};
const Settings = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text> Settings</Text>
    </View>
  );
};
export function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="/home" component={Home} />
      <Stack.Screen name="/notifications" component={Notifications} />
      <Stack.Screen name="/profile" component={Profile} />
      <Stack.Screen name="/settings" component={Settings} />
    </Stack.Navigator>
  );
}
