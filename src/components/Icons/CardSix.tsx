import * as React from "react";
import Svg, { Path, Rect } from "react-native-svg";
import { PALETTE } from "../../configs/palette";

interface Props extends React.SVGProps<SVGSVGElement> {
  variant?: "red" | "blue" | "yellow" | "green";
}

const CardSix = (props: Props) => {
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
        d="M51 51a16.67 16.67 0 00-16.67 16.67v16.66a16.69 16.69 0 108.34-14.42v-2.24A8.29 8.29 0 0158.4 64l7.5-3.75A16.62 16.62 0 0051 51zm0 25a8.34 8.34 0 11-8.33 8.33A8.33 8.33 0 0151 76zm-8.33 26.67V106h16.66v-3.33z"
        fill={COLOR()}
        fillRule="evenodd"
      />
      <Path
        d="M21.83 13.5a8.33 8.33 0 00-8.33 8.33v8.34A8.35 8.35 0 1017.67 23v-1.17A4.14 4.14 0 0125.53 20l3.75-1.87a8.3 8.3 0 00-7.45-4.63zm0 12.5a4.17 4.17 0 11-4.16 4.17A4.17 4.17 0 0121.83 26z"
        fill="#fff"
        fillRule="evenodd"
      />
      <Path
        d="M80.17 138.5a8.33 8.33 0 008.33-8.33v-8.34a8.35 8.35 0 10-4.17 7.22v1.12a4.14 4.14 0 01-7.86 1.83l-3.75 1.87a8.3 8.3 0 007.45 4.63zm0-12.5a4.17 4.17 0 114.16-4.17 4.17 4.17 0 01-4.16 4.17z"
        fill="#fff"
        fillRule="evenodd"
      />
    </Svg>
  );
};

export default CardSix;
