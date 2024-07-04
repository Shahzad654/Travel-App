import React from 'react'
import "react-native-gesture-handler";
import StackNav from './StackNav';
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <NavigationContainer>
      <StackNav></StackNav>
    </NavigationContainer>
  );
}

