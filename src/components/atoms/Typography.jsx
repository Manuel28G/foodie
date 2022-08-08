<FlatList
  horizontal
  style={{
    width: "100%",
    height: 200,
    backgroundColor: "black",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  }}
  showsHorizontalScrollIndicator={false}
  data={item.pics}
  keyExtractor={(item) => item.id}
  renderItem={({ item }) => {
    return (
      <Image
        style={{
          width: "100%",
          height: 200,
          backgroundColor: "#EEEEEE",
        }}
        source={{ uri: item.uri }}
      />
    );
  }}
/>;
