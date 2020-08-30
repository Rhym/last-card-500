import * as React from "react";
import Svg, { Rect, Path } from "react-native-svg";
import { PALETTE } from "../../configs/palette";

interface Props extends React.SVGProps<SVGSVGElement> {
  variant?: "red" | "blue" | "yellow" | "green";
}

const CardEight = (props: Props) => {
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
        d="M51 51a12.45 12.45 0 00-10 20 16.67 16.67 0 1020 0 12.45 12.45 0 00-10-20zm0 8.33a4.17 4.17 0 11-4.17 4.17A4.17 4.17 0 0151 59.33zM50.17 76a7.66 7.66 0 01.83 0 7.93 7.93 0 11-.83 0z"
        fill={COLOR()}
      />
      <Path
        d="M21.83 13.5a6.22 6.22 0 00-5 10 8.34 8.34 0 1010 0 6.23 6.23 0 00-5-10zm0 4.17a2.08 2.08 0 11-2.08 2.08 2.09 2.09 0 012.08-2.08zM21.42 26a2.81 2.81 0 01.41 0 4 4 0 11-.41 0z"
        fill="#fff"
      />
      <Path
        d="M80.17 138.5a6.23 6.23 0 01-5-10 8.34 8.34 0 1110 0 6.22 6.22 0 01-5 10zm0-4.17a2.08 2.08 0 10-2.09-2.08 2.08 2.08 0 002.09 2.08zm-.42-8.33a2.94 2.94 0 00.42 0 4 4 0 10-.42 0z"
        fill="#fff"
      />
    </Svg>
  );
};

CardEight.defaultProps = {
  variant: "red",
};

export default CardEight;
