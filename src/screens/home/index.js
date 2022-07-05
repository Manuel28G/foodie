import React from "react";
import { View, FlatList } from "react-native";
import CardItem from "../../components/organisms/card-item";
import { styles } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { getAllReviews } from "../../store/actions/review.action";

function Home({ navigation }) {
  const dispatch = useDispatch();
  const reviews = useSelector((state) => state);
  dispatch(getAllReviews());

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
        ListEmptyComponent={<Text>No hay elementos para monstrar</Text>}
        renderItem={({ item }) => (
          <CardItem setSelectedItem={onSelectItem} item={item} />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

export default Home;
