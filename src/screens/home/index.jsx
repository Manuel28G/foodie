import React, { useEffect, useState } from "react";
import { View, FlatList, Text } from "react-native";
import CardItem from "../../components/organisms/card-item";
import { styles } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { getReviews } from "../../store/actions/review.action";
import SplashIcon from "../../../assets/svg/splash-icon.svg";
import { colors } from "../../constants/themes/colors";
import useFirebase from "../../data/firebase";

function Home({ navigation }) {
  const dispatch = useDispatch();
  const { getAllReviews } = useFirebase();
  const { reviews } = useSelector((state) => {
    return state !== undefined ? state.reviews : [];
  });

  useEffect(() => {
    dispatch(getReviews(getAllReviews));
  }, [dispatch]);

  function onSelectItem(item) {
    navigation.navigate("ReviewDetail", {
      item: item,
      title: item.store,
    });
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Foodie App</Text>
        <SplashIcon
          stroke={colors.error}
          fill={colors.error}
          style={styles}
          marginTop={10}
          width="17%"
        />
      </View>
      <FlatList
        data={reviews}
        ListEmptyComponent={
          <View>
            <Text style={styles.emptyTitle}>
              No hay elementos para monstrar
            </Text>
          </View>
        }
        renderItem={({ item }) => (
          <CardItem setSelectedItem={onSelectItem} item={item} />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

export default Home;
