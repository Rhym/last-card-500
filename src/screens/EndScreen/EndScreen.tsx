import { StatusBar } from "expo-status-bar";
import _minBy from "lodash/minBy";
import _filter from "lodash/filter";
import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { useDispatch, UserType, useTrackedState } from "../../store/store";
import styled from "styled-components";
import Header from "../../components/Header";
import Layout from "../../components/Layout";
import LayoutContent from "../../components/LayoutContent";
import StyledButton from "../../components/StyledButton";
import LayoutFooter from "../../components/LayoutFooter";

const Wrapper = styled(ScrollView)`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 24px;
`;

const Heading = styled(Text)`
  text-align: center;
  font-size: 18px;
  color: #fff;
`;

const WinnerText = styled(Text)`
  text-align: center;
  font-size: 32px;
  font-weight: 500;
  color: #fff;
`;

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
    <Layout>
      <Header />
      <LayoutContent>
        <Heading>
          {Array.isArray(winners) && winners.length > 1
            ? "Your winners are:"
            : "Your winner is:"}
        </Heading>
        {Array.isArray(winners) &&
          winners.map((user) => {
            return <WinnerText key={user.id}>{user.title}</WinnerText>;
          })}
        <LayoutFooter>
          <StyledButton
            onPress={() => dispatch({ type: "RESET_GAME" })}
            title="Play again"
          />
        </LayoutFooter>
      </LayoutContent>
      <StatusBar style="auto" />
    </Layout>
  );
}
