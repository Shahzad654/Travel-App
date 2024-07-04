import React from "react";
import {StyleSheet} from 'react-native'
import { createStackNavigator } from "@react-navigation/stack";
import TabNav from "./TabNav";
import Welcome from "./screens/Welcome";
import Details from "./screens/Details";

const Stack = createStackNavigator();

const StackNav = () => {
  return (
    <Stack.Navigator initialRouteName="TabNav">
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="details"
        component={Details}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="TabNav"
        component={TabNav}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  
})

export default StackNav;
