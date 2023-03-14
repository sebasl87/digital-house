import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#fff",
    flex: 1,
    justifyContent: "center",
  },
  titleWelcomme: {
    color: "#020202",
    fontFamily: "Avenir",
    fontSize: 20,
    fontStyle: "normal",
    fontWeight: "800",
    lineHeight: 27,
  },
  titleSection: {
    color: "#9B9898",
    fontFamily: "Avenir",
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "800",
    lineHeight: 19,
  },
  blueBox: {
    backgroundColor: "#334FFA",
    borderRadius: 20,
    height: 143,
    paddingLeft: 18,
    paddingTop: 21,
    shadowOffset: { height: 6 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    width: 286,
  },
  monthBlueBox: {
    color: "#FFF",
    fontFamily: "Avenir",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "800",
    lineHeight: 22,
  },
  totalBlueBox:{
    color: "#FFF",
    fontFamily: "Avenir",
    fontSize: 32,
    fontStyle: "normal",
    fontWeight: "800",
    lineHeight: 44,
    marginTop: 7,
    textAlign: "center"
  },
});
