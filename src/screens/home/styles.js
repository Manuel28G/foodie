import { StyleSheet } from "react-native";
import { colors } from "../../constants/themes/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondary,
  },
  headerContainer: {
    height: 80,
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "gray",
    borderRadius: 5,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 3,
    backgroundColor: colors.background,
  },
  headerText: {
    fontSize: 32,
    fontFamily: "PatrickHand",
    color: colors.error,
  },
  headerIcon: {
    marginLeft: 10,
  },
  emptyTitle: {
    alignSelf: "center",
    marginTop: 150,
    fontSize: 24,
    color: colors.error,
  },
});
