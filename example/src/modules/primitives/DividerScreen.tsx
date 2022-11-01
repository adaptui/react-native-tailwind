import React from "react";
import { Box, Divider, useTheme } from "@adaptui/react-native-tailwind";

export const DividerScreen = () => {
  const tailwind = useTheme();
  return (
    <Box
      style={tailwind.style("flex-1 justify-center items-center bg-white-900")}
    >
      <Box style={tailwind.style("w-full ")}>
        <Divider onPress={() => console.log("hello")} />
      </Box>
      <Box
        style={tailwind.style(
          "h-100 overflow-hidden items-center justify-center",
        )}
      >
        <Divider
          orientation="vertical"
          inset={20}
          insetType="top"
          onPress={() => console.log("hello")}
        />
      </Box>
    </Box>
  );
};
