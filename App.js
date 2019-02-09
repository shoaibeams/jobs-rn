import React from "react";
import {
  createBottomTabNavigator,
  createStackNavigator,
  createAppContainer
} from "react-navigation";
import { Provider } from "react-redux";
import store from "./store";
import AuthScreen from "./screens/AuthScreen";
import WelcomeScreen from "./screens/WelcomeScreen";
import MapScreen from "./screens/MapScreen";
import DeckScreen from "./screens/DeckScreen";
import SettingScreen from "./screens/SettingScreen";
import ReviewScreen from "./screens/ReviewScreen";

class App extends React.Component {
  render() {
    const MainNavigator = createBottomTabNavigator({
      welcome: {
        screen: WelcomeScreen,
        navigationOptions: {
          tabBarVisible: false
        }
      },
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

    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

export default App;
