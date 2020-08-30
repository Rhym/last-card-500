import React from "react";

import { useDispatch, useTrackedState } from "../../store/store";
import { Button, View } from "react-native";
import UserScoreItem from "../UserScoreItem/UserScoreItem";

const UserScoreList: React.FC = () => {
  const dispatch = useDispatch();
  const state = useTrackedState();

  return (
    <View>
      <View>
        {state.users.map(({ id, score, title }) => (
          <UserScoreItem key={id} id={id} score={score} title={title} />
        ))}
        <Button
          onPress={() => dispatch({ type: "INCREMENT_ROUND" })}
          title="Next round"
        />
      </View>
    </View>
  );
};

export default UserScoreList;
