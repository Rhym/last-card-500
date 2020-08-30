import * as React from "react";
import Svg, { Path, Rect } from "react-native-svg";
import { PALETTE } from "../../configs/palette";

interface Props extends React.SVGProps<SVGSVGElement> {
  variant?: "red" | "blue" | "yellow" | "green";
}

const CardSeven = (props: Props) => {
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
        d="M36.83 51v16.67h8.34v-8.34h16.66L45.17 101h8.33l16.67-41.67V51H36.83z"
        fill={COLOR()}
        fillRule="evenodd"
      />
      <Path
        d="M13.5 13.5v8.33h4.17v-4.16H26L17.67 38.5h4.16l8.34-20.83V13.5H13.5z"
        fill="#fff"
        fillRule="evenodd"
      />
      <Path
        d="M88.5 138.5v-8.33h-4.17v4.16H76l8.33-20.83h-4.16l-8.34 20.83v4.17H88.5z"
        fill="#fff"
        fillRule="evenodd"
      />
    </Svg>
  );
};

export default CardSeven;
