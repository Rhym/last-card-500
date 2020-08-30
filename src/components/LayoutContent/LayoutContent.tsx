import React from "react";
import { ScrollView } from "react-native";
import styled from "styled-components";

type Props = {
  children?: React.ReactNode;
};

const StyledLayoutContent = styled(ScrollView)`
  margin-top: 32px;
`;

const LayoutContent: React.FC<Props> = (props) => {
  return (
    <StyledLayoutContent keyboardShouldPersistTaps="handled">
      {props.children}
    </StyledLayoutContent>
  );
};

export default LayoutContent;
