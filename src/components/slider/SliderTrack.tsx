import React from "react";

import { AnimatedBox } from "../../primitives";
import { useTailwind, useTheme } from "../../theme";
import { cx } from "../../utils";

import { SliderProps } from "./Slider";

export const SliderTrack: React.FC<
  Pick<SliderProps, "size" | "themeColor">
> = ({ size, themeColor }) => {
  const { ts } = useTailwind();
  const sliderTheme = useTheme("slider");

  return (
    <AnimatedBox
      style={[
        ts(
          cx(
            sliderTheme?.track,
            sliderTheme?.size[size]?.track,
            sliderTheme?.themeColor[themeColor]?.track,
          ),
        ),
      ]}
    />
  );
};
