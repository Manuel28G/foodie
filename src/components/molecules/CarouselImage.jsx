import { Dimensions, Image } from "react-native";
import React from "react";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { useState } from "react";

let carousel = null;
let mBorderRadiusTop;
let mImageHeight;
const renderItem = ({ item, _ }) => {
  return (
    <Image
      style={{
        height: mImageHeight,
        backgroundColor: "#EEEEEE",
        borderTopRightRadius: mBorderRadiusTop,
        borderTopLeftRadius: mBorderRadiusTop,
      }}
      source={{ uri: item }}
    />
  );
};

const CarouselImage = ({
  photos,
  scale = 0.89,
  borderRadiusTop = 15,
  imageHeight = 200,
}) => {
  mBorderRadiusTop = borderRadiusTop;
  mImageHeight = imageHeight;
  const [activeSlide, setActiveSlide] = useState(0);
  const { width } = Dimensions.get("window");
  const ITEM_LENGTH = width * scale; // Item is a square. Therefore, its height and width are of the same length.
  return (
    <>
      <Carousel
        layout={"default"}
        ref={(c) => {
          carousel = c;
        }}
        data={photos}
        hasParallaxImages={true}
        renderItem={renderItem}
        sliderWidth={ITEM_LENGTH}
        itemWidth={ITEM_LENGTH}
        onSnapToItem={(index) => setActiveSlide(index)}
      />
      <Pagination
        activeDotIndex={activeSlide}
        dotsLength={3}
        activeOpacity={0.9}
        dotStyle={{ height: 10, width: 10, borderRadius: 500 }}
        dotColor={"black"}
        containerStyle={{
          display: "flex",
          bottom: 0,
          alignSelf: "center",
          justifyContent: "center",
          paddingVertical: 5,
        }}
        inactiveDotColor="black"
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.8}
        carouselRef={carousel}
        tappableDots={!!carousel}
      />
    </>
  );
};

export default CarouselImage;
