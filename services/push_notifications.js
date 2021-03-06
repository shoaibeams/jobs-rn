import { Permissions, Notifications } from "expo";
import { AsyncStorage } from "react-native";
import axios from "axios";

const PUSH_ENDPOINT = "http://rallycoding.herokuapp.com/api/tokens";

export default async () => {
  let previousToken = await AsyncStorage.getItem("pushtoken");
  if (previousToken) {
    return;
  } else {
    try {
      let { status } = await Permissions.askAsync(
        Permissions.REMOTE_NOTIFICATIONS
      );
      if (status !== "granted") {
        return;
      }
    } catch (error) {
      console.log(error);
    }

    let token = await Notifications.getExpoPushTokenAsync();
    await axios.post(PUSH_ENDPOINT, { token: { token } });
    AsyncStorage.setItem("pushtoken", token);
  }
};
