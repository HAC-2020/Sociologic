/*
  Login.js
*/

import React from "react";
import {
  Dimensions,
  Text,
  Image,
  StyleSheet,
  View,
  Button,
  TextInput,
} from "react-native";
import { Colors } from "../assets/Colors.js";
import favicon from "../assets/favicon.png";
import Icon from "react-native-vector-icons/FontAwesome";

const { width: WIDTH } = Dimensions.get("window");

export default class Login extends React.Component {
  state = {
    email: "",
    password: "",
  };

  handleEmailChange = (email) => {
    this.setState({ email });
  };

  handlePasswordChange = (password) => {
    this.setState({ password });
  };

  /* onLogin: checking for email and password */
  onLogin = async () => {
    const { email, password } = this.state;
    try {
      // try email and password
      if (email.length > 0 && password.length > 0) {
        this.props.navigation.navigate("App");
      }
    } catch (error) {
      // catch error if either are less 1
      alert(error);
    }
  };

  /* goToSignup: moves the user to the Signup page */
  goToSignup = () => this.props.navigation.navigate("Signup");

  render() {
    const { email, password } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image source={favicon} style={styles.logo} />
          <Text style={styles.logoText}>COVID PATH</Text>
        </View>

        <View style={styles.usernameSection}>
          <TextInput
            style={styles.input}
            name="email"
            value={email}
            placeholder="Email"
            autoCapitalize="none"
            onChangeText={this.handleEmailChange}
          />
          <TextInput
            style={styles.input}
            name="password"
            value={password}
            placeholder="Enter password"
            secureTextEntry
            onChangeText={this.handlePasswordChange}
          />
          <Button
            styles={styles.buttons}
            title="Login"
            onPress={this.onLogin}
          />
          <Button
            styles={styles.buttons}
            title="Go to Signup"
            onPress={this.goToSignup}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.lightyellow,
  },
  logoContainter: {
    alignItems: "baseline",
  },
  logo: {
    width: 120,
    height: 120,
  },
  logoText: {
    color: "white",
    fontSize: 20,
    fontWeight: "500",
    marginTop: 10,
    paddingBottom: 25,
    paddingTop: 25,
  },
  input: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 25,
    fontSize: 16,
    paddingLeft: 45,
    backgroundColor: "rgba(0, 0, 0, 0.35)",
    color: "rgba(255, 255, 255, 0.3)",
    marginHorizontal: 25,
    marginBottom: 5,
  },
  buttons: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 25,
    fontSize: 16,
    paddingLeft: 45,
    backgroundColor: "rgba(0, 0, 0, 0.35)",
    color: "rgba(255, 255, 255, 0.3)",
    marginHorizontal: 25,
    marginBottom: 5,
  },
});
