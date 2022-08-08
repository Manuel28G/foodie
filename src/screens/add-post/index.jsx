import { Image, ScrollView, Text, View } from "react-native";
import React, { useState } from "react";
import {
  Appbar,
  Button,
  HelperText,
  Snackbar,
  TextInput,
} from "react-native-paper";
import DropDownPicker from "react-native-dropdown-picker";
import * as ImagePicker from "expo-image-picker";
import Chips from "../../components/atoms/Chips";
import CameraPlus from "../../../assets/svg/camera-plus.svg";
import { colors } from "../../constants/themes/colors";
import RightArrow from "../../../assets/svg/right-arrow.svg";
import useFirebase from "../../data/firebase";
import * as MediaLibrary from "expo-media-library";
import { styles } from "./style";
import Loading from "../loading";
import useCategory from "../../hooks/useCategories";
import { useEffect } from "react";

const AddPostScreen = ({ navigation }) => {
  const [storeName, setStoreName] = useState();
  const [storeAddress, setStoreAddress] = useState();
  const [image, setImage] = useState();
  const [review, setReview] = useState("");
  const [open, setOpen] = useState(false);
  const [reviewAdded, setReviewAdded] = useState(false);
  const [tags, setTags] = useState([]);
  const [tryToSend, setTryToSend] = useState();
  const { categories } = useCategory();
  const { addReview, isLoading } = useFirebase();
  const MAX_LENGHT = 150;
  const MAX_INPUT_LENGHT = 50;
  const PUBLISH_TITLE = "Publicar";
  const WRITE_REVIEW_TITLE = "Escribe tu reseña";
  const HEADER_TITLE = "Nueva Reseña";
  const LOCAL_NAME_TITLE = "Nombre del local";
  const DIRECTION_TITLE = "Dirección";
  const ADD_PHOTOS_TITLE = "Agregar fotos";
  const CATEGORY_TITLE = "Categoría";
  const REVIEW_ADDED = "Su reseña ha sido agregada";

  function isFormValid() {
    setTryToSend(true);
    return storeName && storeAddress && image && review ? true : false;
  }

  function hasErrors(text) {
    return !tryToSend ? false : text?.length > 0 ? false : true;
  }

  return (
    <View style={styles.container}>
      <Appbar.Header style={styles.header}>
        <Appbar.Content
          title={HEADER_TITLE}
          fontFamilly="PatrickHand"
          titleStyle={{
            fontFamily: "PatrickHand",
            fontSize: 30,
            color: colors.error,
          }}
          style={styles.headerContent}
        />
      </Appbar.Header>
      <ScrollView style={styles.scrollView}>
        <TextInput
          label={LOCAL_NAME_TITLE}
          maxLength={MAX_INPUT_LENGHT}
          value={storeName}
          error={hasErrors(storeName)}
          style={styles.inputText}
          onChangeText={(store) => setStoreName(store)}
        />
        <TextInput
          label={DIRECTION_TITLE}
          maxLength={MAX_INPUT_LENGHT}
          value={storeAddress}
          error={hasErrors(storeAddress)}
          style={styles.inputText}
          onChangeText={(address) => setStoreAddress(address)}
        />
        <DropDownPicker
          title={CATEGORY_TITLE}
          style={styles.spinner}
          textStyle={{ color: colors.text }}
          open={open}
          value={tags}
          items={categories}
          multiple
          showBadgeDot
          mode="BADGE"
          min={0}
          max={5}
          placeholder="¿Que categoría es?"
          setOpen={setOpen}
          setValue={setTags}
        />
        {hasErrors(tags) ? (
          <HelperText type="error" visible={image}>
            Debe seleccionar al menos una categoría
          </HelperText>
        ) : null}
        <TextInput
          label={WRITE_REVIEW_TITLE}
          maxLength={MAX_LENGHT}
          multiline
          value={review}
          error={hasErrors(review)}
          style={styles.textArea}
          onChangeText={(reviewChanged) => setReview(reviewChanged)}
        />
        <Text>
          {review.length}/{MAX_LENGHT}
        </Text>

        <View style={styles.addPhotoContainer}>
          {!image ? (
            <>
              <Chips
                title={ADD_PHOTOS_TITLE}
                icon={CameraPlus}
                onActionPress={() => {
                  ImagePicker.requestMediaLibraryPermissionsAsync().then(
                    (response) => {
                      if (response.granted) {
                        ImagePicker.launchCameraAsync({
                          mediaTypes: ImagePicker.MediaTypeOptions.All,
                          allowsEditing: true,
                          aspect: [4, 3],
                          quality: 1,
                        }).then((result) => {
                          setImage(result.uri);
                        });
                      }
                    }
                  );
                }}
              />
            </>
          ) : (
            <View>
              <Chips
                style={styles.removePhotoButton}
                textStyle={styles.removeText}
                title="x"
                onActionPress={() => {
                  setImage(null);
                }}
              >
                X
              </Chips>
              <Image style={styles.photo} source={{ uri: image }} />
            </View>
          )}

          {tryToSend && !image ? (
            <HelperText type="error" visible={image}>
              Debe agregar una foto
            </HelperText>
          ) : null}
        </View>
        <Button
          icon={RightArrow}
          mode="contained"
          onPress={() => {
            if (isFormValid()) {
              const filename = image.substring(image.lastIndexOf("/") + 1);
              MediaLibrary.createAssetAsync(image).then((asset) => {
                addReview(
                  {
                    description: review,
                    id: asset.id,
                    location: storeAddress,
                    review: review,
                    store: storeName,
                    tag: tags,
                  },
                  asset,
                  filename
                ).then(() => {
                  setReviewAdded(true);
                  navigation.navigate("Home");
                });
              });
            }
          }}
          contentStyle={styles.actionButtonContainer}
          textStyle={{ color: colors.text }}
          style={styles.actionButton}
        >
          {PUBLISH_TITLE}
        </Button>
      </ScrollView>
      {isLoading ? <Loading /> : null}
      <Snackbar visible={reviewAdded}>{REVIEW_ADDED}</Snackbar>
    </View>
  );
};

export default AddPostScreen;
