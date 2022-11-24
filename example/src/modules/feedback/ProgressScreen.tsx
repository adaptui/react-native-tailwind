import React, { useState } from "react";
import {
  Box,
  ProgressBar,
  ProgressBarSizes,
  ProgressBarTheme,
  Radio,
  RadioGroup,
  Switch,
  useTheme,
} from "@adaptui/react-native-tailwind";

export const ProgressScreen = () => {
  const tailwind = useTheme();

  const [selectedTheme, setSelectedTheme] = useState<ProgressBarTheme>("base");
  const [selectedSize, setSelectedSize] = useState<ProgressBarSizes>("md");

  const [hasHints, setHasHints] = useState<boolean>(true);
  const [hasLabel, setHasLabel] = useState<boolean>(true);

  return (
    <Box style={tailwind.style("flex-1 justify-center bg-white-900")}>
      <Box
        style={tailwind.style(
          "flex-1 px-2 justify-center items-center bg-white-900",
        )}
      >
        <ProgressBar
          size={selectedSize}
          themeColor={selectedTheme}
          label={!hasLabel ? null : "Progress"}
          hint={!hasHints ? null : "26.6%"}
          style={tailwind.style("my-2")}
        />
      </Box>
      <Box
        style={tailwind.style(
          "w-full py-2 rounded-t-lg shadow-lg bg-gray-100 justify-end items-center",
        )}
      >
        <RadioGroup
          value={selectedSize}
          onChange={value => setSelectedSize(value as ProgressBarSizes)}
          orientation="horizontal"
        >
          <Radio value="sm" label="sm" />
          <Radio value="md" label="md" />
          <Radio value="lg" label="lg" />
        </RadioGroup>
        <RadioGroup
          value={selectedTheme}
          onChange={value => setSelectedTheme(value as ProgressBarTheme)}
          orientation="horizontal"
        >
          <Box
            style={tailwind.style(
              "flex flex-row flex-wrap justify-center items-center mt-1",
            )}
          >
            <Radio value="base" label="base" />
            <Radio value="primary" label="primary" />
          </Box>
        </RadioGroup>
        <Box
          style={tailwind.style(
            "flex flex-row justify-center flex-wrap w-full",
          )}
        >
          <Switch
            state={hasLabel}
            onStateChange={value => setHasLabel(value)}
            size="md"
            style={tailwind.style("ml-1 mt-1")}
            label="Label"
          />
          <Switch
            state={hasHints}
            onStateChange={value => {
              setHasHints(value);
              setHasLabel(true);
            }}
            size="md"
            style={tailwind.style("ml-1 mt-1")}
            label="Hints"
          />
        </Box>
      </Box>
    </Box>
  );
};
