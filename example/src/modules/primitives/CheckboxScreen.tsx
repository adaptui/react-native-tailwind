import React from "react";
import {
  Box,
  Checkbox,
  CheckboxTheme,
  useTheme,
} from "@adaptui/react-native-tailwind";

export const CheckboxScreen = () => {
  const tailwind = useTheme();
  const theme: CheckboxTheme[] = ["base", "primary", "danger"];
  return (
    <Box
      style={tailwind.style(
        "flex-1  justify-center items-center px-2 bg-white-900",
      )}
    >
      {theme.map((value, index) => {
        return <Checkbox size="sm" themeColor={value} key={index} />;
      })}

      {theme.map((value, index) => {
        return (
          <Checkbox
            defaultSelected
            themeColor={value}
            key={index}
            label="Aeroplane"
          />
        );
      })}

      {theme.map((value, index) => {
        return (
          <Checkbox
            label="Aeroplane"
            description="An airplane or aeroplane (informally plane) is a fixed-wing aircraft that is propelled forward by thrust from a jet engine, propeller, or rocket engine."
            themeColor={value}
            key={index}
          />
        );
      })}
    </Box>
  );
};
