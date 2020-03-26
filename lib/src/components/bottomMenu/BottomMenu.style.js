import {
  isIPhoneX,
  getStatusBarHeight
} from "@freakycoder/react-native-helpers";

export function _shadowStyle(shadowColor) {
  return {
    shadowRadius: 8,
    shadowOpacity: 0.1,
    shadowColor: shadowColor,
    shadowOffset: {
      width: 0,
      height: 0
    }
  };
}

export function mainStyle(height, width, backgroundColor) {
  return {
    width,
    height,
    paddingTop: 8,
    paddingLeft: 32,
    backgroundColor,
    paddingRight: 32,
    paddingBottom: 8,
    position: "absolute",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    borderRadius: height ? height / 2 : 100,
    bottom: isIPhoneX ? getStatusBarHeight() : 8
  };
}

export function _container(height, width) {
  return {
    flex: 1,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    justifyContent: "flex-end"
  };
}

export default {};
