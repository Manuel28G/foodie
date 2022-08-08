import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import AddPostScreen from "../screens/add-post";
import SearchScreen from "../screens/search";
import MainNavigator from "./main";
import AddPostIcon from "../../assets/svg/add-post.svg";
import SearchIcon from "../../assets/svg/search-icon.svg";
import HomeIcon from "../../assets/svg/home-icon.svg";
import { colors } from "../constants/themes/colors";

const Tab = createMaterialBottomTabNavigator();

const bottomTabs = () => {
  return (
    <Tab.Navigator
      activeColor={colors.error}
      inactiveColor={colors.text}
      labeled
      barStyle={{ backgroundColor: colors.background }}
      initialRouteName="Home"
    >
      <Tab.Screen
        name="Home"
        component={MainNavigator}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: () => <HomeIcon />,
        }}
      />
      <Tab.Screen
        name="AddPost"
        component={AddPostScreen}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: () => <AddPostIcon />,
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: () => <SearchIcon />,
        }}
      />
    </Tab.Navigator>
  );
};

export default bottomTabs;
