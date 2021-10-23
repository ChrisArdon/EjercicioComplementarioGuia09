import React from "react";
import { StyleSheet, View } from "react-native";
import ContentView from "./src/ContentView";

export default function App(){
  return(
    <View style={styles.container}>
      <ContentView></ContentView>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
})