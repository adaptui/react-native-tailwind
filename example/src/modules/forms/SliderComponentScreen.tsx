import React from "react";
import {
  Box,
  Equals,
  Icon,
  Slider,
  useTheme,
} from "@adaptui/react-native-tailwind";

export const SliderComponentScreen = () => {
  const tailwind = useTheme();
  return (
    <Box style={tailwind.style("flex-1 justify-center bg-white-900")}>
      <Box style={tailwind.style("mx-5 my-5")}>
        <Slider showTooltip />
      </Box>
      <Box style={tailwind.style("mx-5 my-5")}>
        <Slider themeColor="primary" />
      </Box>
      <Box style={tailwind.style("mx-5 my-5")}>
        <Slider maxValue={1000} step={20} showTooltip themeColor="primary" />
      </Box>
      <Box style={tailwind.style("mx-5 my-5")}>
        <Slider disabled showTooltip themeColor="primary" />
      </Box>
      <Box style={tailwind.style("mx-5 my-5")}>
        <Slider
          knobIcon={<Icon icon={<Equals />} />}
          showTooltip
          themeColor="primary"
        />
      </Box>
      <Box style={tailwind.style("mx-5 my-5")}>
        <Slider
          range
          knobIcon={<Icon icon={<Equals />} />}
          showTooltip
          themeColor="primary"
        />
      </Box>
      <Box style={tailwind.style("mx-5 my-5")}>
        <Slider range knobIcon={<Icon icon={<Equals />} />} showTooltip />
      </Box>
    </Box>
  );
};
