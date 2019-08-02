import React, { Component } from "react";
import PropTypes from "prop-types";
import { Text, View } from "react-native";
import { ScreenWidth } from "@freakycoder/react-native-helpers";
import Androw from "react-native-androw";
import styles, { _shadowStyle } from "./BottomMenu.style";

class BottomMenu extends Component {
  render() {
    const { shadowColor } = this.props;

    return (
      <Androw style={[styles.container, _shadowStyle(shadowColor)]}>
        <View
          style={{
            height: 70,
            borderRadius: 70 / 2,
            alignItems: "center",
            justifyContent: "center",
            width: ScreenWidth * 0.8,
            backgroundColor: "#ffffff"
          }}
        >
          <Text> textInComponent </Text>
        </View>
      </Androw>
    );
  }
}

BottomMenu.propTypes = {
  shadowColor: PropTypes.string
};

BottomMenu.defaultProps = {
  shadowColor: "#000"
};

export default BottomMenu;
