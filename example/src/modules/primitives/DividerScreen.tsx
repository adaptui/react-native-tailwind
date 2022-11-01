import React from "react";
import { Box, Divider, useTheme } from "@adaptui/react-native-tailwind";

export const DividerScreen = () => {
  const tailwind = useTheme();
  return (
    <Box style={tailwind.style("flex-1 justify-center items-center ")}>
      <Box
        style={tailwind.style(
          "w-full bg-white-900 border rounded-xl h-40 justify-center",
        )}
      >
        <Divider onPress={() => console.log("hello")} />
      </Box>
      <Box
        style={tailwind.style(
          "h-100 overflow-hidden items-center justify-center border mt-3 rounded-xl w-80 bg-white-900 ",
        )}
      >
        <Divider
          orientation="vertical"
          inset={40}
          insetType="top"
          onPress={() => console.log("hello")}
        />
      </Box>
    </Box>
  );
};
