import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    alignContent: "center",
    justifyContent: "center",
    width: "95%",
  },

  wrapper: {
    borderWidth: "1px",
    borderColor: "black",
    border: "solid 1px",
  },
  card: {
    backgroundColor: "#424750",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
    width: "100px",
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.17,
    shadowRadius: 1.65,
    borderColor: "#353A40",
    borderWidth: 1,
    width: "95%",
    padding: 10,
    margin: 10,
    height: 80,
  },
  text: {
    fontSize: 18,
    fontFamily: "Montserrat_600SemiBold",
    color: "#C0C2C3",
  },
});
export default styles;
