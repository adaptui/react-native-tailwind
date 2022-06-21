import React from "react";

import { AnimatedBox } from "../../primitives";
import { useTheme } from "../../theme";
import { cx } from "../../utils";

import { SliderProps } from "./Slider";

export const SliderTrack: React.FC<
  Pick<SliderProps, "size" | "themeColor">
> = ({ size, themeColor }) => {
  const tailwind = useTheme();
  const sliderTheme = useTheme("slider");

  return (
    <AnimatedBox
      style={[
        tailwind.style(
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
