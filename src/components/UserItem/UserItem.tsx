import React from "react";

import { useDispatch, UserType } from "../../store/store";
import { Text, TouchableOpacity, View } from "react-native";
import styled from "styled-components";
import CardDisplay from "../CardDisplay";
import Icons from "../Icons";

const { Close } = Icons;

interface Props extends UserType {
  index?: number;
}

const Wrapper = styled(View)`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Title = styled(Text)`
  font-size: 20px;
  margin-left: 16px;
  color: #fff;
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

const StyledButton = styled(TouchableOpacity)`
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  height: 40px;
  width: 40px;
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.25);
`;

const StyledButtonText = styled(Text)`
  font-size: 20px;
  color: rgba(255, 255, 255, 0.5);
  font-weight: 500;
`;

const UserItem: React.FC<Props> = ({ id, index, title }) => {
  const dispatch = useDispatch();

  // Render
  // -------------------------------------------

  return (
    <Wrapper>
      <Content>
        <CardDisplay index={index} />
        <Title>{title}</Title>
      </Content>
      <Actions>
        <StyledButton onPress={() => dispatch({ type: "DELETE_USER", id })}>
          <StyledButtonText>
            <Close fill="#fff" />
          </StyledButtonText>
        </StyledButton>
      </Actions>
    </Wrapper>
  );
};

UserItem.defaultProps = {
  index: 0,
};

export default React.memo(UserItem);
