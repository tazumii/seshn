import { Text, StyleSheet, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch } from "react-redux";
import { signOut } from "../reducers/AuthSlice";

export default function SettingsScreen() {
  const dispatch = useDispatch();

  return (
    <SafeAreaView style={[styles.container]}>
      <Button title="Log Out" onPress={() => {dispatch(signOut())}} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
});