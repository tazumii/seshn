import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ForgotScreen from "../screens/ForgotScreen";
import SignInScreen from "../screens/SignInScreen";
import SingUpScreen from "../screens/SignUpScreen";

const auth = createNativeStackNavigator();

export default function AuthStack() {
  return (
    <auth.Navigator>
      <auth.Screen
        name="SignIn"
        component={SignInScreen}
      />
      <auth.Screen
        name="SignUp"
        component={SingUpScreen}
      />
      <auth.Screen
        name="Forgot"
        component={ForgotScreen}
      />
    </auth.Navigator>
  );
}