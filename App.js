import React from "react";
import {
  createBottomTabNavigator,
  createStackNavigator,
  createAppContainer
} from "react-navigation";
import { Provider } from "react-redux";
import { Icon } from "react-native-elements";
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
        navigationOptions: {
          tabBarVisible: false
        },
        screen: createBottomTabNavigator(
          {
            deck: { screen: DeckScreen },
            map: {
              screen: MapScreen
            },
            review: {
              screen: createStackNavigator({
                review: { screen: ReviewScreen },
                setting: { screen: SettingScreen }
              }),
              navigationOptions: () => ({
                title: `Review Jobs`,
                tabBarIcon: ({ tintColor }) => {
                  return <Icon name="favorite" size={30} color={tintColor} />;
                }
              })
            }
          }
          // {
          //   tabBarOptions: {
          //     labelStyle: { fontSize: 12 }
          //   }
          // }
        )
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
