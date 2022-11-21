import React, { useState } from "react";
import {
  Box,
  Radio,
  RadioGroup,
  Switch,
  SwitchSize,
  SwitchTheme,
  useTheme,
} from "@adaptui/react-native-tailwind";

export const SwitchComponentScreen = () => {
  const tailwind = useTheme();

  const [selectedSize, setSelectedSize] = useState<SwitchSize>("md");
  const [selectedTheme, setSelectedTheme] = useState<SwitchTheme>("base");

  const [hasLabel, setHasLabel] = useState(false);
  const [hasDesc, setHasDesc] = useState(false);

  const [isSwitchDisabled, setIsSwitchDisabled] = useState<boolean>(false);

  return (
    <Box style={tailwind.style("flex-1 items-center bg-white-900")}>
      <Box style={tailwind.style("flex-1 px-2 justify-center")}>
        <Switch
          size={selectedSize}
          themeColor={selectedTheme}
          label={hasLabel ? "Isolation" : null}
          description={
            hasLabel && hasDesc
              ? "Utilities for controlling whether an element should explicitly create a new stacking context."
              : null
          }
          disabled={isSwitchDisabled}
        />
      </Box>
      <Box
        style={tailwind.style(
          "w-full py-2 rounded-t-lg shadow-lg bg-gray-100 justify-end items-center",
        )}
      >
        <RadioGroup
          value={selectedSize}
          onChange={value => setSelectedSize(value as SwitchSize)}
          orientation="horizontal"
        >
          <Radio value="sm" label="sm" />
          <Radio value="md" label="md" />
          <Radio value="lg" label="lg" />
          <Radio value="xl" label="xl" />
        </RadioGroup>
        <RadioGroup
          value={selectedTheme}
          onChange={value => setSelectedTheme(value as SwitchTheme)}
          orientation="horizontal"
        >
          <Radio value="base" label="base" />
          <Radio value="primary" label="primary" />
        </RadioGroup>
        <Box
          style={tailwind.style(
            "flex flex-row justify-center flex-wrap w-full",
          )}
        >
          <Switch
            state={hasLabel}
            size="md"
            onStateChange={value => setHasLabel(value)}
            style={tailwind.style("ml-1 mt-1")}
            label="Has Label"
          />
          <Switch
            state={hasDesc}
            size="md"
            onStateChange={value => setHasDesc(value)}
            style={tailwind.style("ml-1 mt-1")}
            label="Has Description"
          />
          <Switch
            state={isSwitchDisabled}
            onStateChange={value => setIsSwitchDisabled(value)}
            size="md"
            style={tailwind.style("ml-1 mt-1")}
            label="Disabled"
          />
        </Box>
      </Box>
    </Box>
  );
};
