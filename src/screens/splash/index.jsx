import { View, Text } from "react-native";
import React from "react";
import SplashIcon from "../../../assets/svg/splash-icon.svg";
import { colors } from "../../constants/themes/colors";
import { styles } from "./styles";

const Splash = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Foodie app</Text>
      <SplashIcon stroke={colors.error} />
    </View>
  );
};

export default Splash;
