import React from "react";
import {
  Box,
  Button,
  ButtonTheme,
  ButtonVariants,
  useTheme,
} from "@adaptui/react-native-tailwind";

export const ButtonScreen = () => {
  const tailwind = useTheme();
  const themeColors = [
    "base",
    "primary",
    "secondary",
    "success",
    "danger",
  ] as ButtonTheme[];
  const variants = ["solid", "subtle", "outline", "ghost"] as ButtonVariants[];
  return (
    <Box
      style={tailwind.style("flex-1 justify-center items-center bg-white-900")}
    >
      {variants.map((variant, index) => {
        return (
          <Box style={tailwind.style("flex-row my-1")} key={variant + index}>
            {themeColors.map((theme, themeIndex) => {
              return (
                <Button
                  style={tailwind.style("mx-1")}
                  key={theme + themeIndex}
                  variant={variant}
                  themeColor={theme}
                >
                  Continue
                </Button>
              );
            })}
          </Box>
        );
      })}
    </Box>
  );
};
