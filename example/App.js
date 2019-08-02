import React, { Fragment } from "react";
import { StyleSheet, View, StatusBar } from "react-native";
import BottomMenu from "./lib/src/BottomMenu";

const App = () => {
  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <View style={{ flex: 1, backgroundColor: "#ccc" }}>
        <BottomMenu />
      </View>
    </Fragment>
  );
};

export default App;
