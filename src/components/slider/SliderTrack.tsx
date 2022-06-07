import React from "react";

import { AnimatedBox } from "../../primitives";
import { useTheme } from "../../theme";

import { SliderProps } from "./Slider";

export const SliderTrack: React.FC<Pick<SliderProps, "size">> = ({ size }) => {
  const tailwind = useTheme();
  const sliderTheme = useTheme("slider");

  return (
    <AnimatedBox
      style={[
        tailwind.style([
          sliderTheme.track.common,
          sliderTheme.track.size[size],
        ]),
      ]}
    />
  );
};
