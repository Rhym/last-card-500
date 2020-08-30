import React, { useEffect, useState } from "react";
import _findIndex from "lodash/findIndex";

import { useDispatch, UserType, useTrackedState } from "../../store/store";
import { Text, TextInput, View } from "react-native";
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
  display: flex;
  flex: 0 0 auto;
  flex-direction: row;
  align-items: center;

  > * + * {
    margin-left: 16px;
  }
`;

const Score = styled(Text)`
  font-size: 1.2rem;
  margin-left: 16px;
`;

const StyledInput = styled(TextInput)`
  width: 56px;
  border-radius: 4px;
  border: 2px solid black;
  height: 32px;
  padding: 0 8px;
  text-align: center;
`;

const UserScoreItem: React.FC<Props> = ({ id, index, score, title, total }) => {
  const dispatch = useDispatch();
  const state = useTrackedState();

  // Data
  // -------------------------------------------

  /**
   * Get the value of the current round.
   * @private
   */
  const _getRoundValue = () => {
    const EXISTING_ROUND_INDEX = _findIndex(score, { round: state.round });
    if (EXISTING_ROUND_INDEX !== -1) {
      return score[EXISTING_ROUND_INDEX].value;
    }

    return "";
  };

  // Lifecycle
  // -------------------------------------------

  const [value, setValue] = useState(_getRoundValue());

  useEffect(() => {
    if (typeof value !== "undefined" && value !== "") {
      dispatch({ type: "ADD_USER_ROUND_SCORE", id, round: state.round, value });
    }
  }, [value]);

  useEffect(() => {
    setValue(_getRoundValue());
  }, [state.round]);

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
        <Score>{total}</Score>
        <StyledInput
          keyboardType="numeric"
          value={value}
          onChangeText={(text) => setValue(text)}
          placeholder="0"
        />
      </Actions>
    </Wrapper>
  );
};

export default React.memo(UserScoreItem);
