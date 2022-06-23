import React from "react";
import { View, FlatList } from "react-native";
import CardItem from "../../components/organisms/card-item";
import { reviews } from "../../data/Reviews";
import { styles } from "./styles";

function Home({ navigation }) {
  function onSelectItem(item) {
    navigation.navigate("ReviewDetail", {
      item: item,
      title: item.store,
    });
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <CardItem setSelectedItem={onSelectItem} item={item} />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

export default Home;
