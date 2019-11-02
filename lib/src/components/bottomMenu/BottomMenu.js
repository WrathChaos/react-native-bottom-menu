import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Dimensions } from "react-native";
import Androw from "react-native-androw";
import { _container, mainStyle, _shadowStyle } from "./BottomMenu.style";

const { width: ScreenWidth, height: ScreenHeight } = Dimensions.get("window");

class BottomMenu extends Component {
  render() {
    const {
      width,
      height,
      styles,
      children,
      shadowStyle,
      shadowColor,
      backgroundColor,
      shadowContainerWidth,
      shadowContainerHeight
    } = this.props;
    return (
      <Androw
        style={[
          styles || _container(shadowContainerHeight, shadowContainerWidth),
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
  backgroundColor: PropTypes.string,
  shadowContainerWidth: PropTypes.number,
  shadowContainerHeight: PropTypes.number
};

BottomMenu.defaultProps = {
  height: 75,
  shadowColor: "#000",
  backgroundColor: "white",
  width: ScreenWidth * 0.75,
  shadowContainerHeight: 75,
  shadowContainerWidth: ScreenWidth * 0.75
};

export default BottomMenu;
