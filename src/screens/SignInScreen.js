import {
  Text,
  StyleSheet,
  TextInput,
  Button,
  Alert,
  Pressable,
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch } from "react-redux";
import { signIn } from "../reducers/AuthSlice";

const schema = yup
  .object({
    email: yup.string().email().required(),
    password: yup.string().required(),
  })
  .required();

export default function SignInScreen({ navigation }) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(schema),
  });
  const dispatch = useDispatch();
  const onSubmit = (data) => dispatch(signIn(data));

  return (
    <SafeAreaView style={[styles.container]}>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder="Email"
          />
        )}
        name="email"
      />
      <Text>{errors.email?.message}</Text>

      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            secureTextEntry={true}
            placeholder="Password"
          />
        )}
        name="password"
      />
      <Text>{errors.password?.message}</Text>

      <Button title="Sign In" onPress={handleSubmit(onSubmit)} />
      <Button title="Sign Up" onPress={() => {navigation.navigate("SignUp")}} />
      <Button title="Forgot Password" onPress={() => {navigation.navigate("Forgot")}} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  input: {
    height: 48,
    width: 256,
    marginTop: 24,
    padding: 8,
    backgroundColor: "white",
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 10,
  },
});
