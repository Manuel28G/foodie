import React from "react";
import { View } from "react-native";
import CardItem from "../../components/organisms/card-item";
import { styles } from "./styles";

function ReviewDetail({ route }) {
  const { item } = route.params;
  return (
    <View style={styles.container}>
      <CardItem item={item} setSelectedItem={() => {}} />
    </View>
  );
}

export default ReviewDetail;
