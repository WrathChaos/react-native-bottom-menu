import React from "react";
import PropTypes from "prop-types";
import { Text, View, TouchableOpacity } from "react-native";
import styles, { _textStyle } from "./Item.style";
import Icon from "react-native-dynamic-vector-icons";
import Ripple from "react-native-material-ripple";

const Item = props => {
  const {
    text,
    onPress,
    fontSize,
    isActive,
    textStyle,
    textColor,
    activeColor,
    inactiveColor,
    ...rest
  } = props;
  return (
    <TouchableOpacity style={styles.container} {...rest} onPress={onPress}>
      <Icon color={isActive ? activeColor : inactiveColor} {...rest} />
      <Text
        style={_textStyle(isActive ? activeColor : inactiveColor, fontSize)}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};

Item.propTypes = {
  text: PropTypes.string,
  fontSize: PropTypes.number,
  activeColor: PropTypes.string,
  inactiveColor: PropTypes.string
};

Item.defaultProps = {
  text: "Home",
  fontSize: 13,
  activeColor: "#f8a300",
  inactiveColor: "#7d8094"
};

export default Item;
