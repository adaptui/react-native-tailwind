import React, { useState } from "react";
import {
  Box,
  Checkbox,
  CheckboxGroup,
  CheckboxTheme,
  Radio,
  RadioGroup,
  Text,
  useTheme,
} from "@adaptui/react-native-tailwind";

export const CheckboxGroupScreen = () => {
  const tailwind = useTheme();
  const [value, setValue] = useState<string[]>([]);
  const [theme, setTheme] = useState("base");

  return (
    <Box
      style={tailwind.style("flex-1 items-center justify-center bg-white-900")}
    >
      <RadioGroup value={theme} onChange={setTheme} orientation="horizontal">
        <Radio value="base" label="Base" />
        <Radio value="primary" label="Primary" />
        <Radio value="danger" label="Danger" />
      </RadioGroup>
      <Text>Pick fruits to eat</Text>
      <CheckboxGroup
        themeColor={theme as CheckboxTheme}
        value={value}
        onChange={setValue}
      >
        <Checkbox value="apple" label="Apple" />
        <Checkbox value="orange" label="Orange" />
        <Checkbox isDisabled value="watermelon" label="Watermelon" />
        <Checkbox value="sapota" label="Sapota" />
        <Checkbox value="cherry" label="Cherry" />
      </CheckboxGroup>
      <Box style={tailwind.style("mt-2")}>
        <Text>Picked fruits</Text>
        {value.map((item, index) => {
          return (
            <Text style={tailwind.style("my-1")} key={index}>
              - {item}
            </Text>
          );
        })}
      </Box>
    </Box>
  );
};
