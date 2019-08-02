export function _shadowStyle(shadowColor) {
  return {
    shadowRadius: 7.49,
    shadowOpacity: 0.37,
    shadowColor: shadowColor,
    shadowOffset: {
      width: 0,
      height: 6
    }
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
