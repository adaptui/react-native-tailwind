import { useMemo } from "react";
import { Path, Pattern, Rect, Svg } from "react-native-svg";
import { useTheme } from "@adaptui/react-native-tailwind";

const Background = props => {
  const tailwind = useTheme();
  const { color, stroke, gap, transform } = props;
  const { x, y, k } = transform || { x: 0, y: 0, k: 1 };
  const scaledGap = (gap || 15) * k;
  const patternId = useMemo(
    () => `patten-${Math.floor(Math.random() * 100000)}`,
    [],
  );

  return (
    <Svg
      style={tailwind.style("w-full h-full absolute")}
      width={"100%"}
      height={"100%"}
    >
      <Pattern
        id={patternId}
        x={x % scaledGap}
        y={y % scaledGap}
        width={scaledGap}
        height={scaledGap}
        patternUnits={"userSpaceOnUse"}
      >
        <Path
          stroke={color || "#dddddd"}
          strokeWidth={stroke || 1}
          d={`M${scaledGap / 2} 0 V${scaledGap} M0 ${
            scaledGap / 2
          } H${scaledGap}`}
        />
      </Pattern>
      <Rect
        x={0}
        y={0}
        width={"100%"}
        height={"100%"}
        fill={`url(#${patternId})`}
      />
    </Svg>
  );
};

export default Background;
