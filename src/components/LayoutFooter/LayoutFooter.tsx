import React from "react";
import { ScrollView } from "react-native";
import styled from "styled-components";

type Props = {
  children?: React.ReactNode;
};

const StyledLayoutFooter = styled(ScrollView)`
  margin-top: 64px;
  padding-bottom: 48px;
`;

const LayoutFooter: React.FC<Props> = (props) => {
  return <StyledLayoutFooter>{props.children}</StyledLayoutFooter>;
};

export default LayoutFooter;
