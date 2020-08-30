import React from "react";
import { Image, View } from "react-native";
import styled from "styled-components";

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
      <Image
        source={require("../../../assets/logo.png")}
        style={{ width: 100, height: 70 }}
      />
    </StyledHeader>
  );
};

export default Header;
