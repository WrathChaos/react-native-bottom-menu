import React, { Component } from "react";
import PropTypes from "prop-types";
import { Text, View } from "react-native";
import { ScreenWidth } from "@freakycoder/react-native-helpers";
import Androw from "react-native-androw";
import styles, { mainStyle, _shadowStyle } from "./BottomMenu.style";
import Item from "./components/item/Item";

class BottomMenu extends Component {
  render() {
    const { height, width, backgroundColor, shadowColor } = this.props;

    return (
      <Androw style={[styles.container, _shadowStyle(shadowColor)]}>
        <View style={mainStyle(height, width, backgroundColor)}>
          <Item
            isRipple
            size={22}
            name="home"
            text="Home"
            type="Octicons"
            color="#7d8094"
          />
          <Item
            isRipple
            size={22}
            type="Feather"
            text="Messages"
            color="#7d8094"
            name="message-circle"
          />
          <Item
            isRipple
            size={30}
            name="cart"
            text="Cart"
            color="#7d8094"
            type="EvilIcons"
          />
          <Item
            isRipple
            size={22}
            name="settings"
            text="Settings"
            color="#7d8094"
            type="SimpleLineIcons"
          />
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
