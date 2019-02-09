import React, { Component } from "react";
import { Text, View, AsyncStorage } from "react-native";
import { connect } from "react-redux";
import * as actions from "../actions";

class AuthScreen extends Component {
  componentDidMount() {
    this.props.facebookLoginAction();
    AsyncStorage.removeItem("fb_token");
  }

  render() {
    return (
      <View>
        <Text> AuthScreen </Text>
        <Text> AuthScreen </Text>
        <Text> AuthScreen </Text>
        <Text> AuthScreen </Text>
        <Text> AuthScreen </Text>
      </View>
    );
  }
}

export default connect(
  null,
  actions
)(AuthScreen);
