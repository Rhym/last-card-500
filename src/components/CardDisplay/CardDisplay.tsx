import React from "react";

import Icons from "../../components/Icons";
import styled from "styled-components";
import { View } from "react-native";

const {
  CardOne,
  CardTwo,
  CardThree,
  CardFour,
  CardFive,
  CardSix,
  CardSeven,
  CardEight,
} = Icons;

type Props = {
  index?: number;
};

const CardWrapper = styled(View)``;

const CardDisplay: React.FC<Props> = (props) => {
  // Render
  // -------------------------------------------

  let card = null;

  switch (props.index) {
    case 0:
      card = <CardOne width={30} height={45} />;
      break;
    case 1:
      card = <CardTwo width={30} height={45} variant="blue" />;
      break;
    case 2:
      card = <CardThree width={30} height={45} variant="yellow" />;
      break;
    case 3:
      card = <CardFour width={30} height={45} variant="green" />;
      break;
    case 4:
      card = <CardFive width={30} height={45} />;
      break;
    case 5:
      card = <CardSix width={30} height={45} variant="blue" />;
      break;
    case 6:
      card = <CardSeven width={30} height={45} variant="yellow" />;
      break;
    case 7:
      card = <CardEight width={30} height={45} variant="green" />;
      break;
  }

  return <CardWrapper>{card}</CardWrapper>;
};

CardDisplay.defaultProps = {
  index: 0,
};

export default React.memo(CardDisplay);
