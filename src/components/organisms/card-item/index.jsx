import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import CarouselImage from "../../molecules/CarouselImage";
import ChipList from "../../molecules/ChipList";
import { styles } from "./styles";

const CardItem = ({ item, setSelectedItem }) => {
  return (
    <View style={styles.container}>
      <CarouselImage photos={item.pics} />
      <TouchableOpacity
        style={{ ...styles.containerTouchable, backgroundColor: item.color }}
        onPress={() => setSelectedItem(item)}
      >
        <View style={{ marginBottom: 10, marginTop: 5 }}>
          <ChipList itemList={item.tag} />
          <Text style={styles.title}>{item.store}</Text>
          <Text style={styles.subtitle}>{item.description}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CardItem;
