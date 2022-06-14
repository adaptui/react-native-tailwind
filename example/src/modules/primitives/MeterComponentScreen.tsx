import React from "react";
import { Box, Meter, useTheme } from "@adaptui/react-native-tailwind";

export const MeterComponentScreen = () => {
  const tailwind = useTheme();
  return (
    <Box style={tailwind.style("flex-1 justify-center px-2 bg-white-900")}>
      <Box style={tailwind.style("my-2")}>
        <Meter intervals={3} value={0.55} />
      </Box>
      <Box style={tailwind.style("my-2")}>
        <Meter themeColor="primary" intervals={3} value={0.85} />
      </Box>
      <Box style={tailwind.style("my-2")}>
        <Meter themeColor="success" intervals={3} value={0.25} />
      </Box>

      <Box style={tailwind.style("my-2")}>
        <Meter label="Stocks" themeColor="success" intervals={3} value={0.25} />
      </Box>

      <Box style={tailwind.style("my-2")}>
        <Meter
          label="Progress"
          hint="1/3"
          themeColor="primary"
          intervals={3}
          value={0.33}
        />
      </Box>
    </Box>
  );
};
