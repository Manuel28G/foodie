import { StyleSheet } from "react-native";
import { colors } from "../../constants/themes/colors";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: colors.primary,
  },
  title: {
    marginTop: 15,
    fontSize: 22,
    fontFamily: "PatrickHand",
  },
  subtitle: {
    fontSize: 16,
    marginTop: 10,
    fontFamily: "PatrickHand",
    color: colors.text,
  },
});
