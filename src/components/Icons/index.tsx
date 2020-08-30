import CardEight from "./CardEight";
import CardFive from "./CardFive";
import CardFour from "./CardFour";
import CardOne from "./CardOne";
import CardSeven from "./CardSeven";
import CardSix from "./CardSix";
import CardThree from "./CardThree";
import CardTwo from "./CardTwo";

export type IconProps = {
  CardEight: typeof CardEight;
  CardFive: typeof CardFive;
  CardFour: typeof CardFour;
  CardOne: typeof CardOne;
  CardSeven: typeof CardSeven;
  CardSix: typeof CardSix;
  CardThree: typeof CardThree;
  CardTwo: typeof CardTwo;
};

const Icons = {} as IconProps;

Icons.CardEight = CardEight;
Icons.CardFive = CardFive;
Icons.CardFour = CardFour;
Icons.CardOne = CardOne;
Icons.CardSeven = CardSeven;
Icons.CardSix = CardSix;
Icons.CardThree = CardThree;
Icons.CardTwo = CardTwo;

export default Icons;
