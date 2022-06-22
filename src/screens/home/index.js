import React from "react";
import { View, FlatList } from "react-native";
import CardItem from "../../components/organisms/card-item";
import { reviews } from "../../data/Reviews";
import { styles } from "./styles";

function Home() {
  return (
    <View style={styles.container}>
      <FlatList
        data={reviews}
        renderItem={CardItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

export default Home;
