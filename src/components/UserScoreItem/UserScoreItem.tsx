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
`;

const CardWrapper = styled(View)``;

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
  display: flex;
  flex: 0 0 auto;
  flex-direction: row;
  align-items: center;
`;

const Score = styled(Text)`
  font-size: 20px;
  margin-left: 16px;
  color: #fff;
`;

const StyledInput = styled(TextInput)`
  flex: 0 0 auto;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.25);
  margin-left: 16px;
  padding: 0 8px;
  height: 40px;
  border-radius: 4px;
  width: 56px;
  margin-right: 8px;
  background: transparent;
  color: #fff;
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
