import React from "react";
import {
  Box,
  Divider,
  Stack,
  Text,
  useTheme,
} from "@adaptui/react-native-tailwind";

export const StackScreen = () => {
  const tailwind = useTheme();
  return (
    <Box style={tailwind.style("flex-1 bg-white-900")}>
      <Stack orientation="vertical" divider={<Divider />}>
        <Box style={tailwind.style("h-30 w-30 bg-red-500")}>
          <Text>Stack</Text>
        </Box>
        <Box style={tailwind.style("h-30 w-30 bg-red-500")}>
          <Text>Stack</Text>
        </Box>
        <Box style={tailwind.style("h-30 w-30 bg-red-500")}>
          <Text>Stack</Text>
        </Box>
        <Box style={tailwind.style("h-30 w-30 bg-red-500")}>
          <Text>Stack</Text>
        </Box>
        <Box style={tailwind.style("h-30 w-30 bg-red-500")}>
          <Text>Stack</Text>
        </Box>
      </Stack>
    </Box>
  );
};
