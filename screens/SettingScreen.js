import React, { Component } from "react";
import { View, Text, Platform } from "react-native";
import { Button } from "react-native-elements";
import { connect } from "react-redux";
import { clearLikedJobsAction } from "../actions";

class SettingScreen extends Component {
  static navigationOptions = {
    header: {
      style: {
        marginTop: Platform.OS === "android" ? 24 : 0
      }
    }
  };

  render() {
    return (
      <View>
        <Button
          title="Reset Liked Jobs"
          large
          icon={{ name: "delete-forever" }}
          backgroundColor="#F44336"
          onPress={this.props.clearLikedJobsAction}
        />
      </View>
    );
  }
}

export default connect(
  null,
  { clearLikedJobsAction }
)(SettingScreen);
