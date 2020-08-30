import React from "react";

import { useDispatch, UserType } from "../../store/store";
import { Button, Text, View } from "react-native";
import styled from "styled-components";
import CardDisplay from "../CardDisplay";

interface Props extends UserType {
  index?: number;
}

const Wrapper = styled(View)`
  display: flex;
  flex-direction: row;
  align-items: center;

  & + & {
    margin-top: 16px;
  }
`;

const CardWrapper = styled(View)`
  transform: rotate(-5deg);
`;

const Title = styled(Text)`
  font-size: 1.2rem;
  margin-left: 16px;
`;

const Content = styled(View)`
  display: flex;
  flex: 1 1 auto;
  flex-direction: row;
  align-items: center;
`;

const Actions = styled(View)`
  margin-left: 8px;
`;

const UserItem: React.FC<Props> = ({ id, index, title }) => {
  const dispatch = useDispatch();

  // Render
  // -------------------------------------------

  return (
    <Wrapper>
      <Content>
        <CardWrapper>
          <CardDisplay index={index} />
        </CardWrapper>
        <Title>{title}</Title>
      </Content>
      <Actions>
        <Button
          onPress={() => dispatch({ type: "DELETE_USER", id })}
          title="Remove"
        />
      </Actions>
    </Wrapper>
  );
};

UserItem.defaultProps = {
  index: 0,
};

export default React.memo(UserItem);
