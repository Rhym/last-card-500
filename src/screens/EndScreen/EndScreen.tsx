import { StatusBar } from "expo-status-bar";
import _minBy from "lodash/minBy";
import _filter from "lodash/filter";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { UserType, useTrackedState, useDispatch } from "../../store/store";

export default function Round() {
  const state = useTrackedState();
  const dispatch = useDispatch();

  const LOWEST_SCORE = _minBy(state.users, "total");
  let winners: UserType[] | undefined = undefined;
  if (LOWEST_SCORE) {
    winners = _filter(state.users, { total: LOWEST_SCORE.total });
  }

  // Render
  // -------------------------------------------

  return (
    <View style={styles.container}>
      <Text>Winner!</Text>
      {Array.isArray(winners) &&
        winners.map((user) => {
          return <Text key={user.id}>{user.title}</Text>;
        })}
      <Button onPress={() => dispatch({ type: "RESET_GAME" })} title="Reset" />
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
