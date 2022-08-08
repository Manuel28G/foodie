import { initializeApp } from "firebase/app";
import {
  getDatabase,
  onValue,
  ref as databaseRef,
  push,
  set,
} from "firebase/database";
import {
  getStorage,
  ref as storageRef,
  uploadBytes,
  getDownloadURL,
} from "firebase/storage";
import Config from "../../constants/Config";
import { useState } from "react";

function useFirebase() {
  const [isLoading, setIsLoading] = useState(false);
  const REVIEW_FOLER = "reviews/";

  const firebaseConfig = {
    databaseURL: Config.DATA_BASE_URL,
    storageBucket: Config.STORAGE_URL,
    projectId: Config.PROJECT_ID,
    apiKey: Config.API_KEY,
  };

  const app = initializeApp(firebaseConfig);
  const dataBaseRT = getDatabase(app);
  const storage = getStorage(app);

  async function addReview(review, photo, photoName) {
    try {
      const url = await uploadImage(photo, photoName);
      const pushRef = push(databaseRef(dataBaseRT, REVIEW_FOLER));
      set(pushRef, {
        ...review,
        pics: [url],
      });
      return true;
    } catch (e) {
      return false;
    }
  }

  async function uploadImage(file, fileName) {
    try {
      setIsLoading(true);
      const imagesRef = storageRef(storage, REVIEW_FOLER + fileName);
      const fileFetch = await fetch(file.uri);
      const blob = await fileFetch.blob();
      await uploadBytes(imagesRef, blob);
      const url = await getDownloadURL(imagesRef);
      setIsLoading(false);
      return url;
    } catch (e) {
      setIsLoading(false);
    }
  }

  async function getAllReviews(callback) {
    setIsLoading(true);
    const starCountRef = databaseRef(dataBaseRT, REVIEW_FOLER);
    return onValue(starCountRef, (snapshot) => {
      setIsLoading(false);
      let response = [];
      snapshot.forEach((childSnapshot) => {
        response.push(childSnapshot.val());
      });
      callback(response);
    });
  }

  return { addReview, getAllReviews, uploadImage, isLoading };
}

export default useFirebase;
