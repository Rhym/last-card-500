import * as React from "react";
import Svg, { Path, Rect } from "react-native-svg";
import { PALETTE } from "../../configs/palette";

interface Props extends React.SVGProps<SVGSVGElement> {
  variant?: "red" | "blue" | "yellow" | "green";
}

const CardTwo = (props: Props) => {
  const COLOR = () => {
    switch (props.variant) {
      case "blue":
        return PALETTE.blue;
      case "yellow":
        return PALETTE.yellow;
      case "green":
        return PALETTE.green;
      default:
        return PALETTE.red;
    }
  };

  // Render
  // -------------------------------------------

  return (
    <Svg viewBox="0 0 102 152" {...props}>
      <Rect
        x={1}
        y={1}
        width={100}
        height={150}
        rx={16.67}
        fill="#fff"
        stroke="#000"
        strokeMiterlimit={16}
        strokeWidth={2}
      />
      <Rect
        x={9.33}
        y={9.33}
        width={83.33}
        height={133.33}
        rx={8.33}
        fill={COLOR()}
      />
      <Path
        d="M76 34.33A66.67 66.67 0 009.33 101 16.68 16.68 0 0026 117.67 66.67 66.67 0 0092.67 51 16.68 16.68 0 0076 34.33z"
        fill="#fff"
        fillRule="evenodd"
      />
      <Path
        d="M49.33 51a16.63 16.63 0 00-16.66 16.67v1.66H41v-1.66a8.34 8.34 0 1116.67 0c0 1.88-1.56 5.56-3.19 6.85-8.84 7-8.75 5.8-21.81 14.81V101H66V89.33h-8.33v3.34h-15C53 85.4 53.74 85.58 61.82 78.34 64.41 76 66 71.43 66 67.67A16.63 16.63 0 0049.33 51z"
        fill={COLOR()}
      />
      <Path
        d="M21.83 13.5a8.32 8.32 0 00-8.33 8.33v.84h4.17v-.84a4.17 4.17 0 018.33 0 5.69 5.69 0 01-1.59 3.43C20 28.74 20 28.16 13.5 32.67v5.83h16.67v-5.83H26v1.66h-7.5c5.16-3.63 5.54-3.54 9.58-7.16a7.76 7.76 0 002.09-5.34 8.32 8.32 0 00-8.34-8.33z"
        fill="#fff"
      />
      <Path
        d="M80.17 138.5a8.32 8.32 0 008.33-8.33v-.84h-4.17v.84a4.17 4.17 0 01-8.33 0 5.69 5.69 0 011.59-3.43c4.42-3.48 4.38-2.9 10.91-7.41v-5.83H71.83v5.83H76v-1.66h7.5c-5.16 3.63-5.54 3.54-9.58 7.16a7.76 7.76 0 00-2.09 5.34 8.32 8.32 0 008.34 8.33z"
        fill="#fff"
      />
    </Svg>
  );
};

export default CardTwo;
