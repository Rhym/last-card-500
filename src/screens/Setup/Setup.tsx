import { StatusBar } from "expo-status-bar";
import React from "react";
import { Button, View } from "react-native";
import UserList from "../../components/UserList";
import { useDispatch, useTrackedState } from "../../store/store";
import styled from "styled-components";

const Wrapper = styled(View)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 24px;
`;

const Actions = styled(View)`
  margin-top: 32px;
`;

export default function Setup() {
  const dispatch = useDispatch();
  const state = useTrackedState();

  return (
    <Wrapper>
      <UserList />
      <Actions>
        <Button
          disabled={state.users.length <= 1}
          onPress={() => dispatch({ type: "INCREMENT_ROUND" })}
          title="Start"
        />
      </Actions>
      <StatusBar style="auto" />
    </Wrapper>
  );
}
