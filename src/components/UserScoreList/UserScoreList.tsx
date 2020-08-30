import React from "react";

import { useDispatch, useTrackedState } from "../../store/store";
import { Button, View } from "react-native";
import UserScoreItem from "../UserScoreItem/UserScoreItem";
import styled from "styled-components";

const Actions = styled(View)`
  margin-top: 24px;
  display: flex;
  flex-direction: row;

  > * {
    flex: 1 1 auto;
  }

  > * + * {
    margin-left: 16px;
  }
`;

const UserScoreList: React.FC = () => {
  const dispatch = useDispatch();
  const state = useTrackedState();

  return (
    <View>
      {state.users.map((node, index) => (
        <UserScoreItem key={node.id} index={index} {...node} />
      ))}
      <Actions>
        {state.round > 1 && (
          <Button
            onPress={() => dispatch({ type: "DECREMENT_ROUND" })}
            title="Previous round"
          />
        )}
        <Button
          onPress={() => dispatch({ type: "INCREMENT_ROUND" })}
          title="Next round"
        />
      </Actions>
    </View>
  );
};

export default UserScoreList;
