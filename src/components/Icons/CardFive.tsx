import * as React from "react";
import Svg, { Path, Rect } from "react-native-svg";
import { PALETTE } from "../../configs/palette";

interface Props extends React.SVGProps<SVGSVGElement> {
  variant?: "red" | "blue" | "yellow" | "green";
}

const CardFive = (props: Props) => {
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
        d="M36 51v25h16.67a8.34 8.34 0 11-8.34 8.33H36a16.67 16.67 0 1016.67-16.66h-8.34v-8.34h23.34V51H36z"
        fill={COLOR()}
      />
      <Path
        d="M13.5 13.5V26h8.33a4.17 4.17 0 11-4.16 4.17H13.5a8.34 8.34 0 108.33-8.34h-4.16v-4.16h11.66V13.5H13.5z"
        fill="#fff"
      />
      <Path
        d="M88.5 138.5V126h-8.33a4.17 4.17 0 114.16-4.17h4.17a8.34 8.34 0 10-8.33 8.34h4.16v4.16H72.67v4.17H88.5z"
        fill="#fff"
      />
    </Svg>
  );
};

export default CardFive;
