import React, { useState } from "react";
import {
  Box,
  Radio,
  RadioGroup,
  RadioTheme,
  useTheme,
} from "@adaptui/react-native-tailwind";

export const RadioScreen = () => {
  const tailwind = useTheme();
  const [value, setValue] = useState("base");
  return (
    <Box
      style={tailwind.style("flex-1 items-center justify-center bg-white-900")}
    >
      <RadioGroup value={value} onChange={setValue} orientation="horizontal">
        <Radio value="base" label="Base" />
        <Radio value="primary" label="Primary" />
        <Radio value="danger" label="Danger" />
      </RadioGroup>
      <RadioGroup themeColor={value as RadioTheme}>
        <Radio value="apple" label="Apple" />
        <Radio isDisabled value="orange" label="Orange" />
        <Radio value="watermelon" label="Watermelon" />
        <Radio value="grapes" label="Grapes" />
        <Radio value="banana" label="Banana" />
        <Radio isDisabled value="blueberry" label="Blueberry" />
        <Radio value="sapota" label="Sapota" />
        <Radio value="papaya" label="Papaya" />
        <Radio value="avocado" label="Avocado" />
        <Radio isDisabled value="strawberry" label="Strawberry" />
        <Radio value="cherry" label="Cherry" />
        <Radio value="fig" label="Fig" />
        <Radio isDisabled value="guava" label="Guava" />
        <Radio value="mango" label="Mango" />
      </RadioGroup>
    </Box>
  );
};
