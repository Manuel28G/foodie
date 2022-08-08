import { StyleSheet } from "react-native";
import { colors } from "../../constants/themes/colors";

export const styles = StyleSheet.create({
  container: { backgroundColor: colors.primary, height: "100%" },
  header: { backgroundColor: colors.background },
  headerContent: { alignItems: "center" },
  scrollView: { padding: 20 },
  inputText: {
    marginVertical: 20,
    height: 55,
    backgroundColor: colors.secondary,
  },
  spinner: {
    borderWidth: 0.5,
    borderColor: "gray",
    borderRadius: 5,
    backgroundColor: colors.secondary,
  },
  textArea: {
    marginVertical: 20,
    height: 200,
    backgroundColor: colors.secondary,
  },
  addPhotoContainer: { width: 150, marginTop: 20 },
  removePhotoButton: {
    position: "absolute",
    left: 15,
    top: 15,
    borderRadius: 100,
    zIndex: 1,
    backgroundColor: colors.error,
  },
  removeText: {
    color: "white",
    fontSize: 10,
  },
  photo: {
    height: 300,
    width: 350,
    backgroundColor: "#EEEEEE",
  },
  actionButton: { marginTop: 20, marginBottom: 40 },
  actionButtonContainer: {
    flexDirection: "row-reverse",
    paddingVertical: 5,
    backgroundColor: colors.confirmation,
  },
});
