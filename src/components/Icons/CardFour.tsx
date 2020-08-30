import * as React from "react";
import Svg, { Path, Rect } from "react-native-svg";
import { PALETTE } from "../../configs/palette";

interface Props extends React.SVGProps<SVGSVGElement> {
  variant?: "red" | "blue" | "yellow" | "green";
}

const CardFour = (props: Props) => {
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
        d="M49 51L32.67 84.33v8.34h20V101H61v-8.33h5v-8.34h-5V67.67h-8.33v16.66H41.33L57.67 51z"
        fill={COLOR()}
      />
      <Path
        d="M21.5 13.5l-8.17 16.67v4.16h10v4.17h4.17v-4.17H30v-4.16h-2.5v-8.34h-4.17v8.34h-5.66l8.16-16.67z"
        fill="#fff"
      />
      <Path
        d="M80.17 138.5l8.16-16.67v-4.16h-10v-4.17h-4.16v4.17h-2.5v4.16h2.5v8.34h4.16v-8.34H84l-8.17 16.67z"
        fill="#fff"
      />
    </Svg>
  );
};

export default CardFour;
