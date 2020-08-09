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
import Chatbot from "./Chatbot";

goChat = () => {
	return Chatbot;
};

goSymtoms = () => this.props.navigation.navigate("Signup");

goHome = () => this.props.navigation.navigate("Home");

const { width: WIDTH } = Dimensions.get("window");

export default function Home() {
	return (
		<View style={styles.container}>
			<Text>Home</Text>
			<Button styles={styles.buttons} title="Chat" onPress={this.goChat} />
			<Button
				styles={styles.buttons}
				title="Symtoms"
				onPress={this.goSymtoms}
			/>
			<Button styles={styles.buttons} title="Home" onPress={this.goHome} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	buttons: {
		width: WIDTH - 55,
		height: 45,
		borderRadius: 25,
		fontSize: 16,
		paddingLeft: 45,
		backgroundColor: Colors.darkteal,
		marginHorizontal: 25,
		marginBottom: 5,
	},
});
