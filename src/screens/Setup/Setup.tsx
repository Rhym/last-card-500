import { StatusBar } from "expo-status-bar";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import UserList from "../../components/UserList";
import { useDispatch, useTrackedState } from "../../store/store";

export default function Setup() {
  const dispatch = useDispatch();
  const state = useTrackedState();

  return (
    <View style={styles.container}>
      <Text>{state.round}</Text>
      <UserList />
      <Button
        disabled={state.users.length <= 1}
        onPress={() => dispatch({ type: "INCREMENT_ROUND" })}
        title="Start"
      />
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
