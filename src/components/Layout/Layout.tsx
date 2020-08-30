import React from "react";
import { ScrollView, ScrollViewProps } from "react-native";
import styled from "styled-components";

interface Props extends ScrollViewProps {
  children?: React.ReactNode;
}

const StyledLayout = styled(ScrollView)`
  background: #000;
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 24px;
  color: #fff;
`;

const Layout: React.FC<Props> = (props) => {
  return (
    <StyledLayout keyboardShouldPersistTaps="handled">
      {props.children}
    </StyledLayout>
  );
};

export default Layout;
