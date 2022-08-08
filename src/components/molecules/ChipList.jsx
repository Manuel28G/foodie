import { View } from "react-native";
import React from "react";
import { FlatList } from "react-native";
import Chips from "../atoms/Chips";

const ChipList = ({ itemList }) => {
  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={itemList}
      ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
      renderItem={({ item }) => <Chips title={item} onActionPress={() => {}} />}
    />
  );
};

export default ChipList;
