import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

const Login = () => {
  return (
    <View style={styles.Container}>
      <Text>Login</Text>
      <View>
        <TextInput placeholder="Enter Your Username or Mobilenumber" />
        <TextInput placeholder="Enter Your Password" />
        <TouchableOpacity style={styles.btnContainer}>
          <Text>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text>Create a New Acocunt Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  Container: {
    padding: 50,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    paddingHorizontal: 10,
  },
  btnContainer: {
    backgroundColor: "#1b48ddff",
    padding: 10,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    color: "#f3f0f0ff",
  },
});
