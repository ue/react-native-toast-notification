import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 100,
    zIndex: 9999,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    maxWidth: Dimensions.get("window").width,
    minWidth: Dimensions.get("window").width / 1.9,
    height: 44,
    borderRadius: 30,
    backgroundColor: "#788187",
    margin: 5,
    shadowOffset: {
      height: 5
    },
    shadowColor: "#5f5f5fbf",
    shadowOpacity: 0.3,
    elevation: 3
  },
  text: {
    color: "white",
    fontWeight: "bold",
    fontSize: 14
  }
});
