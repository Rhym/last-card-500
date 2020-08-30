import React from "react";

import { useTrackedState } from "../../store/store";
import UserItem from "../UserItem";
import NewUser from "../NewUser";
import { View } from "react-native";
import styled from "styled-components";

const Wrapper = styled(View)`
  width: 100%;
`;

const Form = styled(View)`
  margin-top: 32px;
`;

const UserList: React.FC = () => {
  const state = useTrackedState();

  return (
    <Wrapper>
      {state.users.map((node, index) => (
        <UserItem key={node.id} index={index} {...node} />
      ))}
      {state.users.length < 8 && (
        <Form>
          <NewUser />
        </Form>
      )}
    </Wrapper>
  );
};

export default UserList;
