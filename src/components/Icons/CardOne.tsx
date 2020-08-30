import * as React from "react";
import Svg, { Path, Rect } from "react-native-svg";
import { PALETTE } from "../../configs/palette";

interface Props extends React.SVGProps<SVGSVGElement> {
  variant?: "red" | "blue" | "yellow" | "green";
}

const CardOne = (props: Props) => {
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
        d="M47.67 51l-8.34 8.33v10L47.67 61v40H56V51z"
        fill={COLOR()}
        fillRule="evenodd"
      />
      <Path
        d="M17.67 13.5l-4.17 4.17v5l4.17-4.17v20h4.16v-25z"
        fill="#fff"
        fillRule="evenodd"
      />
      <Path
        d="M84.33 138.5l4.17-4.17v-5l-4.17 4.17v-20h-4.16v25z"
        fill="#fff"
        fillRule="evenodd"
      />
    </Svg>
  );
};

export default CardOne;
