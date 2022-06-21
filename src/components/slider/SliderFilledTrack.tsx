import React from "react";
import { ViewStyle } from "react-native";
import Animated from "react-native-reanimated";

import { AnimatedBox } from "../../primitives";
import { useTheme } from "../../theme";
import { cx } from "../../utils";

import { SliderProps } from "./Slider";

interface SliderFilledTrackProps
  extends Pick<SliderProps, "size" | "themeColor"> {
  animatedStyles: Animated.AnimateStyle<ViewStyle>;
}

export const SliderFilledTrack: React.FC<SliderFilledTrackProps> = ({
  size,
  animatedStyles,
  themeColor,
}) => {
  const tailwind = useTheme();
  const sliderTheme = useTheme("slider");

  return (
    <AnimatedBox
      style={[
        tailwind.style(
          cx(
            sliderTheme?.filledTrack,
            sliderTheme?.size[size]?.filledTrack,
            sliderTheme?.themeColor[themeColor]?.filledTrack,
          ),
        ),
        animatedStyles,
      ]}
    />
  );
};
