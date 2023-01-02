import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CallScreen from '../screens/CallScreen';
import FriendsScreen from '../screens/FriendsScreen';
import MapScreen from '../screens/MapScreen';
import SettingsScreen from '../screens/SettingsScreen';

const main = createBottomTabNavigator();

export default function MainStack() {
  return (
    <main.Navigator>
      <main.Screen
        name="Calls"
        component={CallScreen}
      />
      <main.Screen
        name="Friends"
        component={FriendsScreen}
      />
      <main.Screen
        name="Map"
        component={MapScreen}
      />
      <main.Screen
        name="Settings"
        component={SettingsScreen}
      />
    </main.Navigator>
  );
}