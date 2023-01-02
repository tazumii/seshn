import { Provider} from "react-redux";
import { StyleSheet, Text, View } from "react-native";
import store from "./src/store";
import { SafeAreaProvider } from "react-native-safe-area-context";
import RootNavigator from "./src/navigation/RootNavigator";

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <RootNavigator />
      </SafeAreaProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
