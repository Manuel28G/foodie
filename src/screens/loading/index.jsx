import { View } from "react-native";
import React from "react";
import { colors } from "../../constants/themes/colors";
import { styles } from "./styles";
import { ActivityIndicator } from "react-native-paper";

const Loading = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator
        animating={true}
        color={colors.information}
        size={60}
      />
    </View>
  );
};

export default Loading;
