import React from "react";
import {
  Box,
  Spinner,
  SpinnerTheme,
  useTheme,
} from "@adaptui/react-native-tailwind";

export const SpinnerScreen = () => {
  const tailwind = useTheme();
  const theme: SpinnerTheme[] = [
    "base",
    "primary",
    "secondary",
    "success",
    "danger",
  ];
  return (
    <Box
      style={tailwind.style(
        "flex-1 justify-center items-center px-2 bg-white-900",
      )}
    >
      {theme.map((value, index) => {
        return (
          <Spinner
            style={tailwind.style("my-2")}
            themeColor={value}
            key={index}
            track="visible"
          />
        );
      })}
      {theme.map((value, index) => {
        return (
          <Spinner
            style={tailwind.style("my-2")}
            themeColor={value}
            key={index}
          />
        );
      })}
    </Box>
  );
};
