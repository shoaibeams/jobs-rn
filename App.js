import React from "react";
import {
  createBottomTabNavigator,
  createStackNavigator,
  createAppContainer
} from "react-navigation";

import AuthScreen from "./screens/AuthScreen";
import WelcomeScreen from "./screens/WelcomeScreen";
import DeckScreen from "./screens/DeckScreen";
import MapScreen from "./screens/MapScreen";
import ReviewScreen from "./screens/ReviewScreen";
import SettingScreen from "./screens/SettingScreen";

const MainNavigator = createBottomTabNavigator({
  welcome: { screen: WelcomeScreen },
  auth: { screen: AuthScreen },
  main: {
    screen: createBottomTabNavigator({
      deck: { screen: DeckScreen },
      map: { screen: MapScreen },
      review: {
        screen: createStackNavigator({
          review: { screen: ReviewScreen },
          setting: { screen: SettingScreen }
        })
      }
    })
  }
});

const App = createAppContainer(MainNavigator);

export default App;
