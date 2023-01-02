import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./AuthStack";
import MainStack from "./MainStack";
import { useSelector } from "react-redux";

export default function RootNavigator() {
  return (
    <NavigationContainer>
      {useSelector((state) =>
        state.auth.userToken === null ? <AuthStack /> : <MainStack />
      )}
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}