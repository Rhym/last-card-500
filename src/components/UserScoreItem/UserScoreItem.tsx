import React, { useEffect, useState } from "react";

import { useDispatch, UserType, useTrackedState } from "../../store/store";
import { Text, TextInput, View } from "react-native";

type Props = UserType;

const UserScoreItem: React.FC<Props> = ({ id, score, title }) => {
  const dispatch = useDispatch();
  const state = useTrackedState();
  const [value, setValue] = useState("");

  // Lifecycle
  // -------------------------------------------

  useEffect(() => {
    if (typeof value !== "undefined" && value !== "") {
      dispatch({ type: "ADD_USER_ROUND_SCORE", id, round: state.round, value });
    }
  }, [value]);

  useEffect(() => {
    setValue("");
  }, [state.round]);

  // Render
  // -------------------------------------------

  return (
    <View>
      <Text>Name: {title}</Text>
      <TextInput
        keyboardType="numeric"
        value={value}
        onChangeText={(text) => setValue(text)}
      />
      <Text>Score:</Text>
      {score.map((node) => (
        <Text
          key={`${id}-${node.round}`}
        >{`Round: ${node.round}, Value: ${node.value}`}</Text>
      ))}
    </View>
  );
};

export default React.memo(UserScoreItem);
