import React from "react";
import { Box, ProgressBar, useTheme } from "@adaptui/react-native-tailwind";

export const ProgressScreen = () => {
  const tailwind = useTheme();
  return (
    <Box
      style={tailwind.style(
        "flex-1 justify-center items-center px-2 bg-white-900",
      )}
    >
      {/* Base Theme Progress Bar */}
      <ProgressBar style={tailwind.style("my-2")} />
      {/* Primary Progress Bar */}
      <ProgressBar themeColor="primary" />
      {/* Customising Progress Bar */}
      <ProgressBar
        style={tailwind.style("my-2")}
        trackStyle={tailwind.style("bg-green-600")}
      />
    </Box>
  );
};
