import React from "react";
import { ViewStyle } from "react-native";
import { AnimateProps } from "react-native-reanimated";

import { AnimatedBox } from "../../primitives";
import { useTheme } from "../../theme";

import { SliderProps } from "./Slider";

interface SliderFilledTrackProps extends Pick<SliderProps, "size"> {
  animatedStyles: AnimateProps<ViewStyle>["style"];
}

export const SliderFilledTrack: React.FC<SliderFilledTrackProps> = ({
  size,
  animatedStyles,
}) => {
  const tailwind = useTheme();
  const sliderTheme = useTheme("slider");

  return (
    <AnimatedBox
      style={[
        tailwind.style([
          sliderTheme.filledTrack.common,
          sliderTheme.filledTrack.size[size],
        ]),
        animatedStyles,
      ]}
    />
  );
};
