import { useFonts } from "expo-font";
import React from "react";
import { ActivityIndicator } from "react-native";
import Home from "./src/screens/home";

export default function App() {
  const [loaded] = useFonts({
    "Lato-Regular": require("./assets/fonts/Lato-Regular.ttf"),
    "Lato-Bold": require("./assets/fonts/Lato-Bold.ttf"),
    "Lato-Light": require("./assets/fonts/Lato-Light.ttf"),
    "Lato-Regular": require("./assets/fonts/Lato-Regular.ttf"),
    "Lato-Thin": require("./assets/fonts/Lato-Thin.ttf"),
  });

  if (!loaded) {
    return <ActivityIndicator />;
  }

  return <Home />;
}
