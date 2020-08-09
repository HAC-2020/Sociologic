//AppNavigation.js
import { createStackNavigator } from "react-navigation-stack";
import Home from "../screens/Home";
import Chatbot from "../screens/Chatbot";
import Testing from "../screens/Testing";
import Symtoms from "../screens/Symtoms";

const AppNavigation = createStackNavigator(
  {
    Home: {screen:Home},
    Chatbot: {screen: Chatbot},
    Testing: {screen: Testing},
    Symtoms: {screen: Symtoms},
  },
  {
    initialRouteName: "Home",
  }
);

export default AppNavigation;
