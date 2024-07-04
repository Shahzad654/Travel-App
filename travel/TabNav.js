import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Welcome from "./screens/Welcome";
import Favorties from "./screens/Favorties";
import User from "./screens/User";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Tab = createMaterialBottomTabNavigator();

const TabNav = () => {
  return (
    <Tab.Navigator initialRouteName="Welcome">
      <Tab.Screen
        name="Welcome"
        component={Welcome}
        options={{
          tabBarLabel: "Welcome",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Favorties"
        component={Favorties}
        options={{
          tabBarLabel: "Favorites",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="heart" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="User"
        component={User}
        options={{
          tabBarLabel: "User",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNav;
