import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text } from "react-native";
import { useDispatch, useTrackedState } from "../../store/store";
import UserScoreList from "../../components/UserScoreList";
import styled from "styled-components";
import Layout from "../../components/Layout";
import LayoutContent from "../../components/LayoutContent";
import LayoutFooter from "../../components/LayoutFooter";
import Header from "../../components/Header";
import StyledButton from "../../components/StyledButton";

const Heading = styled(Text)`
  font-size: 24px;
  text-align: center;
  color: #fff;
`;

export default function Round() {
  const dispatch = useDispatch();
  const state = useTrackedState();

  return (
    <Layout>
      <Header />
      <LayoutContent>
        <Heading>Round {state.round}</Heading>
        <UserScoreList />
      </LayoutContent>
      <LayoutFooter>
        <StyledButton
          bordered
          onPress={() => dispatch({ type: "RESET_GAME" })}
          title="End game"
        />
      </LayoutFooter>
      <StatusBar style="auto" />
    </Layout>
  );
}
