import React, { useState } from "react";
import {
  Box,
  Checkbox,
  CheckboxSizes,
  CheckboxTheme,
  Radio,
  RadioGroup,
  Switch,
  useTheme,
} from "@adaptui/react-native-tailwind";

import { Group } from "../../components";

export const CheckboxScreen = () => {
  const tailwind = useTheme();

  const [selectedTheme, setSelectedTheme] = useState<CheckboxTheme>("base");
  const [selectedSize, setSelectedSize] = useState<CheckboxSizes>("md");
  const [hasDescription, setHasDescription] = useState<boolean>(false);
  const [isDisabled, setIsDisabled] = useState<boolean>(false);
  const [isInvalid, setIsInvalid] = useState<boolean>(false);
  const [isIndeterminate, setIsIndeterminate] = useState<boolean>(false);
  const [hasLabel, setHasLabel] = useState<boolean>(false);
  return (
    <Box style={tailwind.style("flex-1 justify-center bg-white-900")}>
      <Box
        style={tailwind.style(
          "flex-1 px-2 justify-center items-center bg-white-900",
        )}
      >
        <Checkbox
          label={!hasLabel ? null : "Aeroplane"}
          isDisabled={isDisabled}
          isInvalid={isInvalid}
          description={
            !hasDescription
              ? null
              : "An airplane or aeroplane (informally plane) is a fixed-wing aircraft that is propelled forward by thrust from a jet engine, propeller, or rocket engine."
          }
          themeColor={selectedTheme}
          size={selectedSize}
          isIndeterminate={isIndeterminate}
        />
      </Box>
      <Box
        style={tailwind.style(
          "rounded-t-lg shadow-lg bg-gray-100 justify-end p-2",
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
            style={tailwind.style("ml-1")}
            label="Invalid"
          />
          <Switch
            state={hasLabel}
            onStateChange={value => setHasLabel(value)}
            size="md"
            style={tailwind.style("ml-1")}
            label="Label"
          />
          <Switch
            state={hasDescription}
            onStateChange={value => setHasDescription(value)}
            size="md"
            style={tailwind.style(" mt-1")}
            label="Description"
          />
          <Switch
            state={isIndeterminate}
            onStateChange={value => setIsIndeterminate(value)}
            size="md"
            style={tailwind.style("ml-1 mt-1")}
            label="Indeterminate"
          />
        </Box>
      </Box>
    </Box>
  );
};
