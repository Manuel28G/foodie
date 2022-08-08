import { StyleSheet } from "react-native";
import { colors } from "../../constants/themes/colors";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    backgroundColor: colors.primary,
  },
  title: {
    fontSize: 48,
    marginBottom: 24,
    fontFamily: "PatrickHand",
    color: colors.error,
  },
});
