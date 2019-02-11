import React, { Component } from "react";
import { Text, View, ActivityIndicator } from "react-native";
import { Button, Icon } from "react-native-elements";
import { MapView } from "expo";
import { connect } from "react-redux";
import * as actions from "../actions";

class MapScreen extends Component {
  static navigationOptions = {
    title: "Map",
    tabBarIcon: ({ tintColor }) => {
      return <Icon name="my-location" size={30} color={tintColor} />;
    }
  };

  state = {
    mapLoaded: false,
    region: {
      longitude: -122,
      latitude: 37,
      longitudeDelta: 0.04,
      latitudeDelta: 0.09
    }
  };

  componentDidMount() {
    this.setState({ mapLoaded: true });
  }

  onRegionChangeComplete = region => {
    this.setState({ region });
  };

  onButtonPress = () => {
    this.props.fetchJobsAction(this.state.region, () => {
      this.props.navigation.navigate("deck");
    });
  };

  render() {
    if (!this.state.mapLoaded) {
      return (
        <View style={{ flex: 1, justifyContent: "center" }}>
          <ActivityIndicator size="large" />
        </View>
      );
    }
    return (
      <View style={{ flex: 1 }}>
        <MapView
          style={{ flex: 1 }}
          region={this.state.region}
          onRegionChangeComplete={this.onRegionChangeComplete}
        />
        <View>
          <Button
            title="Search this area"
            icon={{ name: "search" }}
            onPress={this.onButtonPress}
            backgroundColor={"#009688"}
          />
        </View>
      </View>
    );
  }
}

const styles = {
  buttonContainer: {
    // flex: 1,
    // backgroundColor: "#009688",
    // position: "absolute",
    // bottom: 20,
    // left: 0,
    // right: 0
  }
};

export default connect(
  null,
  actions
)(MapScreen);
//https://jobs.github.com/positions.json?description=python&location=new+york
//http://api.indeed.com/ads/apisearch?publisher=123412341234123&q=java+developer&l=austin%2C+tx&sort=&radius=&st=&jt=&start=&limit=&fromage=&filter=&latlong=1&co=us&chnl=&userip=1.2.3.4&useragent=Mozilla/%2F4.0%28Firefox%29&v=2&format=json
