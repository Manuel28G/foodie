import React from "react";
import { TouchableOpacity, View, Text, Image } from "react-native";
import { styles } from "./styles";

function onSelected(item) {}

const CardItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{ ...styles.containerTouchable, backgroundColor: item.color }}
        onPress={() => onSelected(item)}
      >
        <View style={styles.store}>
          <Text style={styles.title}>Tienda</Text>
          <Text style={styles.subtitle}>Nombre: {item.store}</Text>
          <Text style={styles.subtitle}>Ubicación: {item.location}</Text>
        </View>
        <View style={styles.review}>
          <Text style={styles.title}>Review</Text>
          <Text style={styles.subtitle}>Nombre: {item.review.reviewer}</Text>
          <Text style={styles.subtitle}>Calficación: {item.review.points}</Text>
          <Text style={styles.subtitle}>Comentario: {item.review.comment}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CardItem;
