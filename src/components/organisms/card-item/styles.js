import { StyleSheet } from "react-native";
import { colors } from "../../../constants/themes/colors";

export const styles = StyleSheet.create({
  container: {
    borderRadius: 15,
    margin: 20,
    minHeight: 150,
    borderWidth: 1,
    borderColor: colors.black,
    backgroundColor: colors.primary,
  },
  containerTouchable: {
    width: "100%",
    borderRadius: 15,
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  title: {
    marginTop: 15,
    fontSize: 22,
    fontFamily: "PatrickHand",
  },
  subtitle: {
    fontSize: 16,
    fontFamily: "PatrickHand",
    color: colors.text,
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
