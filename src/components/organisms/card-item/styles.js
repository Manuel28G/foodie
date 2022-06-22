import { StyleSheet } from "react-native";
import { colors } from "../../../constants/themes/colors";

export const styles = StyleSheet.create({
  container: {
    borderRadius: 15,
    margin: 20,
    minHeight: 150,
    backgroundColor: colors.shadow,
  },
  containerTouchable: {
    width: "100%",
    borderRadius: 15,
    padding: 10,
  },
  title: {
    fontSize: 16,
    fontFamily: "Lato-Bold",
  },
  subtitle: {
    fontSize: 14,
    fontFamily: "Lato-Regular",
  },
  image: {
    height: 50,
    width: 50,
  },
  store: {
    borderBottomWidth: 1,
  },
  review: {
    marginTop: 10,
    borderRadius: 5,
    borderWidth: 1,
    padding: 5,
  },
});
