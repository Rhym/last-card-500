import React from "react";
import styled, { css } from "styled-components";
import { ButtonProps, Text, TouchableOpacity } from "react-native";

interface Props extends ButtonProps {
  bordered?: boolean;
  variant?: "secondary";
}

/**
 * @param props
 * @constructor
 */
const StyledButton: React.FC<Props> = (props) => {
  const ButtonStyle = styled(TouchableOpacity)`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    height: 48px;
    border-radius: 24px;
    background: #ed1c24;
    padding: 0 16px;
    border-bottom-width: 1px;

    ${props.bordered &&
    css`
      border: 1px solid #ed1c24;
      background: transparent;
    `}

    ${props.variant === "secondary" &&
    css`
      background: #f8da27;
    `}
  `;

  const ButtonTextStyle = styled(Text)`
    color: #fff;
    font-size: 16px;
    font-weight: bold;

    ${props.variant === "secondary" &&
    css`
      color: #000;
    `}
  `;

  return (
    <ButtonStyle {...props}>
      <ButtonTextStyle>{props.title}</ButtonTextStyle>
    </ButtonStyle>
  );
};

export default StyledButton;
