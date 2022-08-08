import React, { useState } from "react";
import { SafeAreaView, View } from "react-native";
import { Searchbar } from "react-native-paper";
import { colors } from "../../constants/themes/colors";
import { styles } from "./styles";

const SearchScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <SafeAreaView style={styles.container}>
      <Searchbar
        placeholder="Buscar recetas"
        onChangeText={onChangeSearch}
        value={searchQuery}
      />
    </SafeAreaView>
  );
};

export default SearchScreen;
