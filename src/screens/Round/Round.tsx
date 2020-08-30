import { StatusBar } from "expo-status-bar";
import React from "react";
import { Button, Text, View } from "react-native";
import { useDispatch, useTrackedState } from "../../store/store";
import UserScoreList from "../../components/UserScoreList";
import styled from "styled-components";

const Wrapper = styled(View)`
    padding: 24px;
    flex: 1,
    background-color: "#fff",
    align-items: center,
    justify-content: center,
`;

const Header = styled(View)``;

const Content = styled(View)`
  margin-top: 24px;
`;

const Footer = styled(View)`
  margin-top: 32px;
`;

const Heading = styled(Text)`
  font-size: 24px;
  text-align: center;
`;

export default function Round() {
  const dispatch = useDispatch();
  const state = useTrackedState();

  return (
    <Wrapper>
      <Header>
        <Heading>Round: {state.round}</Heading>
      </Header>
      <Content>
        <UserScoreList />
      </Content>
      <Footer>
        <Button
          onPress={() => dispatch({ type: "RESET_GAME" })}
          title="End game"
        />
      </Footer>
      <StatusBar style="auto" />
    </Wrapper>
  );
}
