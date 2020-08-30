import React from "react";

import { useTrackedState } from "../../store/store";
import UserItem from "../UserItem";
import { View } from "react-native";
import styled from "styled-components";

const Wrapper = styled(View)`
  width: 100%;
`;

const UserItemSibling = styled(View)`
  margin-top: 8px;
  border-top-width: 1px;
  border-color: rgba(255, 255, 255, 0.15);
  padding-top: 8px;
`;

const UserList: React.FC = () => {
  const state = useTrackedState();

  return (
    <Wrapper>
      {state.users.map((node, index) =>
        index === 0 ? (
          <UserItem key={node.id} index={index} {...node} />
        ) : (
          <UserItemSibling key={node.id}>
            <UserItem index={index} {...node} />
          </UserItemSibling>
        )
      )}
    </Wrapper>
  );
};

export default UserList;
