import React, { Component } from "react";
import { Text, View, Button, Platform } from "react-native";

class ReviewScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: "Review Jobs",
      headerRight: (
        <Button
          title="Go Right"
          onPress={() => navigation.navigate("setting")}
        />
      )
      // headerStyle: { marginTop: Platform.OS === "android" ? 20 : 0 }
    };
  };

  render() {
    return (
      <View>
        <Text> ReviewScreen </Text>
        <Text> ReviewScreen </Text>
        <Text> ReviewScreen </Text>
        <Text> ReviewScreen </Text>
        <Text> ReviewScreen </Text>
      </View>
    );
  }
}

export default ReviewScreen;
