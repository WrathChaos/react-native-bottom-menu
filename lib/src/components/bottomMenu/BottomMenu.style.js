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
    minWidth: 220,
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 8,
    paddingRight: 8,
    flexDirection: "row",
    justifyContent: "space-evenly",
    minHeight: 60,
    backgroundColor,
    maxWidth: "95%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: height ? height / 2 : 100
  };
}

export default {
  container: {
    flex: 1,
    marginBottom: 36,
    alignSelf: "center",
    justifyContent: "flex-end"
  }
};
