import { Platform, StyleSheet } from "react-native";
import { colors } from "../../constants/themes/colors";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
    height: "100%",
    flex: 1,
    marginTop: Platform.OS === "ios" ? 0 : 30,
  },
});
