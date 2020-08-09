import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  TouchableWithoutFeedback,
  StatusBar,
  SafeAreaView,
  Keyboard,
  KeyboardAvoidingView,
  KeyboardType,
  autoCompleteType,
} from "react-native";

export default class SignUp extends React.Component {
  render() {
    return (
      <View style={styles.SignUp}>
        <Text style={styles.header}>Sign Up</Text>
        <TextInput
          label="Name"
          style={styles.textinput}
          placeholder="Name"
          KeyboardType="email-address"
          underlineColorAndroid={"transparent"}
          returnKeyType="next"
          onChangeText={(text) => setName(text)}
        />
        <TextInput
          label="Email"
          style={styles.textinput}
          placeholder="Email"
          underlineColorAndroid={"transparent"}
          keyboardType="email-address"
          returnKeyType="next"
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          label="Password"
          style={styles.textinput}
          placeholder="Enter Password"
          secureTextEntry={"True"}
          keyboardType="visible-password"
          returnKeyType="next"
          underlineColorAndroid={"transparent"}
          onChangeText={(text) => setPassword(text)}
        />
        <Button styles={styles.btn} title="Sign Up" onPress={submitData()} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  SignUp: {
    alignSelf: "stretch",
  },
  header: {
    fontSize: 24,
    color: "#fff",
    paddingBottom: 10,
    marginBottom: 40,
    borderBottomColor: "#199187",
    borderBottomWidth: 1,
  },
  textinput: {
    alignSelf: "stretch",
    height: 40,
    marginBottom: 30,
    color: "#fff",
    borderBottomColor: "#f8f8f8",
    borderBottomWidth: 1,
  },
  btn: {
    alignSelf: "stretch",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#59cbbd",
    marginTop: 30,
  },
  // Jaideepcvl@gmail.com
  text: {
    color: "#fff",
    marginTop: 5,
  },
});
