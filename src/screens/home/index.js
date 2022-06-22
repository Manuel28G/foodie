import React, { useState } from "react";
import { View, FlatList } from "react-native";
import CardItem from "../../components/organisms/card-item";
import { reviews } from "../../data/Reviews";
import ReviewDetail from "../review-detail";
import { styles } from "./styles";

function Home() {
  const [selectedItem, setSelectedItem] = useState(null);

  const list = (
    <View style={styles.container}>
      <FlatList
        data={reviews}
        renderItem={({ item, index, separators }) => (
          <CardItem setSelectedItem={setSelectedItem} item={item} />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
  const reviewDetail = <ReviewDetail item={selectedItem} />;

  return selectedItem === null ? list : reviewDetail;
}

export default Home;
