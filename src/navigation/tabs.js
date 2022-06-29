import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AddPostScreen from "../screens/add-post";
import SearchScreen from "../screens/search";
import MainNavigator from "./main";
import AddPostIcon from "../../assets/svg/add-post.svg";
import SearchIcon from "../../assets/svg/search-icon.svg";
import HomeIcon from "../../assets/svg/home-icon.svg";

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen
        name="Home"
        component={MainNavigator}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: () => <HomeIcon />,
        }}
      />
      <Tab.Screen
        name="AddPost"
        component={AddPostScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: () => <AddPostIcon />,
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: () => <SearchIcon />,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
