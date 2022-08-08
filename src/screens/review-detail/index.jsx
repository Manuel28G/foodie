import React from "react";
import { View, Text, ScrollView } from "react-native";
import CarouselImage from "../../components/molecules/CarouselImage";
import ChipList from "../../components/molecules/ChipList";
import { styles } from "./styles";

function ReviewDetail({ route }) {
  const { item } = route.params;
  return (
    <ScrollView style={styles.container}>
      <CarouselImage
        photos={item.pics}
        scale={1}
        borderRadiusTop={0}
        imageHeight={300}
      />
      <ChipList item={item} />
      <View style={{ height: 1 }}></View>
      <Text style={styles.title}> {item.store}</Text>
      <Text style={styles.subtitle}> {item.location}</Text>
      <Text style={styles.subtitle}> {item.description}</Text>
    </ScrollView>
  );
}

export default ReviewDetail;
