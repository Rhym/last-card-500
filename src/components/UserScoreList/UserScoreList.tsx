import React from "react";

import { useDispatch, useTrackedState } from "../../store/store";
import { Keyboard, View } from "react-native";
import UserScoreItem from "../UserScoreItem/UserScoreItem";
import styled from "styled-components";
import StyledButton from "../StyledButton";

const Actions = styled(View)`
  margin-top: 24px;
  display: flex;
  flex-direction: row;
`;

const UserItemSibling = styled(View)`
  margin-top: 8px;
  border-top-width: 1px;
  border-color: rgba(255, 255, 255, 0.15);
  padding-top: 8px;
`;

const UserScoreList: React.FC = () => {
  const dispatch = useDispatch();
  const state = useTrackedState();

  return (
    <View>
      {state.users.map((node, index) =>
        index === 0 ? (
          <UserScoreItem key={node.id} index={index} {...node} />
        ) : (
          <UserItemSibling key={node.id}>
            <UserScoreItem index={index} {...node} />
          </UserItemSibling>
        )
      )}
      <Actions>
        {state.round > 1 && (
          <View style={{ marginRight: 8 }}>
            <StyledButton
              bordered
              onPress={() => {
                dispatch({ type: "DECREMENT_ROUND" });
                Keyboard.dismiss();
              }}
              title="Previous round"
            />
          </View>
        )}
        <StyledButton
          onPress={() => {
            dispatch({ type: "INCREMENT_ROUND" });
            Keyboard.dismiss();
          }}
          title="Save round"
        />
      </Actions>
    </View>
  );
};

export default UserScoreList;
