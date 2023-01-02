import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import CallScreen from "../screens/CallScreen";
import FriendsScreen from "../screens/FriendsScreen";
import MapScreen from "../screens/MapScreen";
import SettingsScreen from "../screens/SettingsScreen";

const main = createBottomTabNavigator();

export default function MainStack() {
  return (
    <main.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Calls") {
            iconName = focused ? "call" : "call-outline";
          } else if (route.name === "Friends") {
            iconName = focused ? "people" : "people-outline";
          } else if (route.name === "Map") {
            iconName = focused ? "map" : "map-outline";
          } else if (route.name === "Settings") {
            iconName = focused ? "settings" : "settings-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "blue",
        tabBarInactiveTintColor: "gray",
        tabBarShowLabel: false,
      })}
    >
      <main.Screen name="Calls" component={CallScreen} options={{ tabBarBadge: 3 }}/>
      <main.Screen name="Friends" component={FriendsScreen} />
      <main.Screen name="Map" component={MapScreen} />
      <main.Screen name="Settings" component={SettingsScreen} />
    </main.Navigator>
  );
}
