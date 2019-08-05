import React from "react";
import PropTypes from "prop-types";
import { Text, View, TouchableOpacity } from "react-native";
import styles from "./Item.style";
import Icon from "react-native-dynamic-vector-icons";
import Ripple from "react-native-material-ripple";

const Item = props => {
  const { text, isRipple, ...rest } = props;
  return isRipple ? (
    <Ripple
      rippleColor="#757575"
      rippleContainerBorderRadius={50}
      {...rest}
      style={{
        alignItems: "center",
        alignContent: "center",
        justifyContent: "center",
        flexDirection: "column",
        padding: 8,
        marginLeft: 3,
        marginRight: 3
      }}
    >
      <Icon {...rest} />
      <Text style={{ fontSize: 13, color: "#7d8094" }}>{text}</Text>
    </Ripple>
  ) : (
    <TouchableOpacity
      style={{
        alignItems: "center",
        alignContent: "center",
        justifyContent: "center",
        flexDirection: "column",
        padding: 8,
        marginLeft: 3,
        marginRight: 3
      }}
    >
      <Icon {...rest} />
      <Text style={{ fontSize: 13, color: "#7d8094" }}>{text}</Text>
    </TouchableOpacity>
  );
};

Item.propTypes = {
  text: PropTypes.string
};

Item.defaultProps = {
  text: "Home"
};

export default Item;
