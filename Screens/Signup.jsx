import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";

const Signup = () => {
  return (
    <View style={styles.Container}>
      <Text>Signup</Text>
      <View>
        <TextInput placeholder="Enter Your Username or Mobilenumber" />
        <TextInput placeholder="Enter Your Password" />
        <TextInput placeholder="confirm Password" />
        <TouchableOpacity style={styles.btnContainer}>
          <Text>Signup</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text>Allready had account? Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Signup;
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
