import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import UserList from "../../components/UserList";
import { useDispatch, useTrackedState } from "../../store/store";
import Header from "../../components/Header";
import Layout from "../../components/Layout";
import LayoutContent from "../../components/LayoutContent";
import LayoutFooter from "../../components/LayoutFooter";
import StyledButton from "../../components/StyledButton";
import NewUser from "../../components/NewUser/NewUser";
import styled from "styled-components";
import { View } from "react-native";

const Form = styled(View)`
  margin-top: 24px;
  background: rgba(0, 0, 0, 0.05);
  border-radius: 8px;
`;

export default function Setup() {
  const dispatch = useDispatch();
  const state = useTrackedState();

  useEffect(() => {}, []);

  return (
    <Layout>
      <Header />
      <LayoutContent>
        <UserList />
        {state.users.length < 8 && (
          <Form>
            <NewUser />
          </Form>
        )}
      </LayoutContent>
      <LayoutFooter>
        <StyledButton
          disabled={state.users.length <= 1}
          onPress={() => dispatch({ type: "INCREMENT_ROUND" })}
          title="Play"
        />
      </LayoutFooter>
      <StatusBar style="auto" />
    </Layout>
  );
}
