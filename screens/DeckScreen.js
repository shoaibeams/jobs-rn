import React, { Component } from "react";
import { Text, View, Platform } from "react-native";
import { connect } from "react-redux";
import * as actions from "../actions";
import { Card, Button, Icon } from "react-native-elements";
import { MapView } from "expo";
import Swipe from "../components/Swipe";

class DeckScreen extends Component {
  static navigationOptions = {
    title: "Jobs",
    tabBarIcon: ({ tintColor }) => {
      return <Icon name="description" size={30} color={tintColor} />;
    }
  };
  renderCard(job) {
    const initialRegion = {
      longitude: job.longitude,
      latitude: job.latitude,
      latitudeDelta: 0.045,
      longitudeDelta: 0.02
    };
    return (
      <Card title={job.jobtitle}>
        <View style={{ height: 300 }}>
          <MapView
            scrollEnabled={false}
            style={{ flex: 1 }}
            cacheEnabled={Platform.OS === "android"}
            initialRegion={initialRegion}
          />
          {/* cacheEnabled true means MapView will be static */}
        </View>
        <View style={styles.detailWrapper}>
          <Text>{job.company}</Text>
          <Text>{job.formattedRelativeTime}</Text>
        </View>
        <Text>{job.snippet.replace(/<b>/g, "").replace(/<\/b>/g, "")}</Text>
      </Card>
    );
  }

  renderNoMoreCards = () => {
    return (
      <Card title="No More Jobs">
        <Button
          title="Back To Map"
          large
          icon={{ name: "my-loction" }}
          backgroundColor="#03A9F4"
          onPress={() => {
            this.props.navigation.navigate("map");
          }}
        />
      </Card>
    );
  };

  render() {
    return (
      <View style={{ marginTop: 10 }}>
        <Swipe
          data={this.props.jobs}
          renderCard={this.renderCard}
          renderNoMoreCards={this.renderNoMoreCards}
          onSwipeRight={job => this.props.likeJobAction(job)}
          keyProp="jobkey"
        />
      </View>
    );
  }
}

const styles = {
  detailWrapper: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20
  }
};

const mapStateToProps = ({ jobs }) => {
  return { jobs: jobs.result };
};

export default connect(
  mapStateToProps,
  actions
)(DeckScreen);
