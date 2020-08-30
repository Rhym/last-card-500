import * as React from "react";
import Svg, { Path, Rect } from "react-native-svg";
import { PALETTE } from "../../configs/palette";

interface Props extends React.SVGProps<SVGSVGElement> {
  variant?: "red" | "blue" | "yellow" | "green";
}

const CardThree = (props: Props) => {
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
        d="M51 51a12.5 12.5 0 00-12.5 12.5h8.33A4.17 4.17 0 1151 67.67h-5V76h5a8.34 8.34 0 11-8.33 8.33h-8.34A16.67 16.67 0 1061 71a12.45 12.45 0 00-10-20z"
        fill={COLOR()}
      />
      <Path
        d="M21.83 13.5a6.25 6.25 0 00-6.25 6.25h4.17a2.09 2.09 0 112.08 2.08h-2.5V26h2.5a4.17 4.17 0 11-4.16 4.17H13.5a8.34 8.34 0 1013.31-6.67 6.23 6.23 0 00-5-10z"
        fill="#fff"
      />
      <Path
        d="M80.17 138.5a6.25 6.25 0 006.25-6.25h-4.17a2.09 2.09 0 11-2.08-2.08h2.5V126h-2.5a4.17 4.17 0 114.16-4.17h4.17a8.34 8.34 0 10-13.31 6.67 6.23 6.23 0 005 10z"
        fill="#fff"
      />
    </Svg>
  );
};

export default CardThree;
