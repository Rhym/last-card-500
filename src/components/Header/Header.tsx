import React from "react";
import { View } from "react-native";
import styled from "styled-components";
import Icons from "../Icons";

const { Logo } = Icons;

const StyledHeader = styled(View)`
  margin-top: 32px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const Header = () => {
  // Render
  // -------------------------------------------

  return (
    <StyledHeader>
      <Logo width={100} height={70} />
    </StyledHeader>
  );
};

export default Header;
