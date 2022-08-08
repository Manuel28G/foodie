import React from "react";
import { Text } from "react-native";
import { Chip } from "react-native-paper";
import { colors } from "../../constants/themes/colors";

const Chips = ({
  title,
  onActionPress,
  icon,
  style,
  mode = "outlined",
  textStyle = {},
}) => {
  return (
    <Chip
      mode={mode}
      onPress={onActionPress}
      icon={icon}
      style={{
        borderRadius: 15,
        borderBottomWidth: 3,
        borderWidth: 1,
        backgroundColor: colors.information,
        ...style,
      }}
    >
      <Text style={textStyle}> {title}</Text>
    </Chip>
  );
};

export default Chips;
