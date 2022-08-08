import { useFonts } from "expo-font";
import React, { useState } from "react";
import { Provider } from "react-redux";
import AppNavigator from "./src/navigation";
import store from "./src/store";
import Splash from "./src/screens/splash";

export default function App() {
  const [loaded, setLoaded] = useState(
    useFonts({
      PatrickHand: require("./assets/fonts/PatrickHand-Regular.ttf"),
      "Lato-Bold": require("./assets/fonts/Lato-Bold.ttf"),
      "Lato-Regular": require("./assets/fonts/Lato-Regular.ttf"),
    })
  );

  if (loaded) {
    setTimeout(() => setLoaded(false), 2000);
    return <Splash />;
  }

  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}
