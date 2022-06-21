import React from "react";
import {
  Box,
  CircularProgress,
  useTheme,
} from "@adaptui/react-native-tailwind";

export const CircularProgressScreen = () => {
  const tailwind = useTheme();
  return (
    <Box
      style={tailwind.style(
        "flex-1 justify-center items-center px-2 bg-white-900",
      )}
    >
      <CircularProgress size="sm" />
      <CircularProgress />
      <CircularProgress size="lg" />
      <CircularProgress size="xl" />
    </Box>
  );
};
