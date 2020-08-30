import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useTrackedState } from "../../store/store";
import UserScoreList from "../../components/UserScoreList";

export default function Round() {
  const state = useTrackedState();

  return (
    <View style={styles.container}>
      <Text>{state.round}</Text>
      <UserScoreList />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
