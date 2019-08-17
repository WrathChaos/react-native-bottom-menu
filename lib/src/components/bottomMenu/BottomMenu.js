import React, { Component } from "react";
import PropTypes from "prop-types";
import { View } from "react-native";
import Androw from "react-native-androw";
import { _container, mainStyle, _shadowStyle } from "./BottomMenu.style";

class BottomMenu extends Component {
  render() {
    const {
      width,
      height,
      backgroundColor,
      shadowColor,
      shadowStyle,
      styles,
      children
    } = this.props;
    return (
      <Androw
        style={[
          styles || _container(height),
          shadowStyle || _shadowStyle(shadowColor)
        ]}
      >
        <View style={mainStyle(height, width, backgroundColor)}>
          {children}
        </View>
      </Androw>
    );
  }
}

BottomMenu.propTypes = {
  height: PropTypes.number,
  width: PropTypes.number,
  shadowColor: PropTypes.string,
  backgroundColor: PropTypes.string
};

BottomMenu.defaultProps = {
  width: null,
  height: null,
  shadowColor: "#000",
  backgroundColor: "white"
};

export default BottomMenu;
