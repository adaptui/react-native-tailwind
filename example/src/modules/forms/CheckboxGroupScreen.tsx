import React, { useState } from "react";
import {
  Box,
  Checkbox,
  CheckboxGroup,
  CheckboxSizes,
  CheckboxTheme,
  Radio,
  RadioGroup,
  Switch,
  Text,
  useTheme,
} from "@adaptui/react-native-tailwind";

import { Group } from "../../components";

export const CheckboxGroupScreen = () => {
  const tailwind = useTheme();
  const [selectedValue, setSelectedValue] = useState<string[]>([]);

  const [selectedTheme, setSelectedTheme] = useState<CheckboxTheme>("base");
  const [selectedSize, setSelectedSize] = useState<CheckboxSizes>("md");
  const [isDisabled, setIsDisabled] = useState<boolean>(false);
  const [isInvalid, setIsInvalid] = useState<boolean>(false);

  return (
    <Box style={tailwind.style("flex-1 justify-center bg-white-900")}>
      <Box
        style={tailwind.style(
          "flex-1 px-2 justify-center items-center bg-white-900",
        )}
      >
        <Text>Pick fruits to eat</Text>
        <CheckboxGroup
          themeColor={selectedTheme as CheckboxTheme}
          value={selectedValue}
          onChange={setSelectedValue}
          size={selectedSize}
        >
          <Checkbox value="apple" label="Apple" />
          <Checkbox value="orange" isInvalid={isInvalid} label="Orange" />
          <Checkbox
            isDisabled={isDisabled}
            value="watermelon"
            label="Watermelon"
          />
          <Checkbox value="sapota" isDisabled={isDisabled} label="Sapota" />
          <Checkbox value="cherry" isInvalid={isInvalid} label="Cherry" />
        </CheckboxGroup>
      </Box>
      <Box
        style={tailwind.style(
          "w-full p-2 rounded-t-lg shadow-lg bg-gray-100 justify-end items-center",
        )}
      >
        <RadioGroup
          value={selectedSize}
          onChange={value => setSelectedSize(value as CheckboxSizes)}
          orientation="horizontal"
        >
          <Group label="Sizes">
            <Radio value="sm" label="sm" />
            <Radio value="md" label="md" />
            <Radio value="lg" label="lg" />
          </Group>
        </RadioGroup>
        <RadioGroup
          value={selectedTheme}
          onChange={value => setSelectedTheme(value as CheckboxTheme)}
          orientation="horizontal"
        >
          <Group label="Theme" style={tailwind.style("mt-2")}>
            <Radio value="base" label="base" />
            <Radio value="primary" label="primary" />
            <Radio value="danger" label="danger" />
          </Group>
        </RadioGroup>
        <Box
          style={tailwind.style(
            "flex flex-row justify-start flex-wrap w-full mt-2",
          )}
        >
          <Switch
            state={isDisabled}
            onStateChange={value => setIsDisabled(value)}
            size="md"
            label="Disabled"
          />
          <Switch
            state={isInvalid}
            onStateChange={value => setIsInvalid(value)}
            size="md"
            style={tailwind.style("ml-1 ")}
            label="Invalid"
          />
        </Box>
      </Box>
    </Box>
  );
};
