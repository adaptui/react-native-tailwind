import React, { useState } from "react";
import {
  Box,
  Meter,
  MeterSizes,
  MeterTheme,
  Radio,
  RadioGroup,
  Switch,
  useTheme,
} from "@adaptui/react-native-tailwind";

export const MeterComponentScreen = () => {
  const tailwind = useTheme();

  const [selectedTheme, setSelectedTheme] = useState<MeterTheme>("base");
  const [selectedSize, setSelectedSize] = useState<MeterSizes>("md");
  const [hasFlatBorder, setHasFlatBorders] = useState<boolean>(false);
  const [hasIntervals, setHasIntervals] = useState<boolean>(false);
  const [hasHints, setHasHints] = useState<boolean>(false);
  const [hasLabel, setHasLabel] = useState<boolean>(false);

  return (
    <Box style={tailwind.style("flex-1 justify-center bg-white-900")}>
      <Box
        style={tailwind.style(
          "flex-1 px-2 justify-center items-center bg-white-900",
        )}
      >
        <Meter
          label={!hasLabel ? null : "Progress"}
          hint={!hasHints ? null : "1/3"}
          themeColor={selectedTheme}
          intervals={!hasIntervals ? 1 : 3}
          value={0.33}
          size={selectedSize}
          flatBorders={hasFlatBorder}
        />
      </Box>
      <Box
        style={tailwind.style(
          "w-full py-2 rounded-t-lg shadow-lg bg-gray-100 justify-end items-center",
        )}
      >
        <RadioGroup
          value={selectedSize}
          onChange={value => setSelectedSize(value as MeterSizes)}
          orientation="horizontal"
        >
          <Radio value="sm" label="sm" />
          <Radio value="md" label="md" />
          <Radio value="lg" label="lg" />
        </RadioGroup>
        <RadioGroup
          value={selectedTheme}
          onChange={value => setSelectedTheme(value as MeterTheme)}
          orientation="horizontal"
        >
          <Box
            style={tailwind.style(
              "flex flex-row flex-wrap justify-center items-center mt-1",
            )}
          >
            <Radio value="base" label="base" />
            <Radio value="primary" label="primary" />
            <Radio value="success" label="success" />
          </Box>
        </RadioGroup>
        <Box
          style={tailwind.style(
            "flex flex-row justify-center flex-wrap w-full",
          )}
        >
          <Switch
            state={hasLabel}
            onStateChange={value => {
              setHasLabel(value);
            }}
            size="md"
            style={tailwind.style("ml-1 mt-1")}
            label="Label"
          />
          <Switch
            state={hasHints}
            onStateChange={value => {
              setHasHints(value);
            }}
            size="md"
            style={tailwind.style("ml-1 mt-1")}
            label="Hints"
          />
          <Switch
            state={hasIntervals}
            onStateChange={value => setHasIntervals(value)}
            size="md"
            style={tailwind.style("ml-1 mt-1")}
            label="Intervals"
          />
          <Switch
            state={hasFlatBorder}
            onStateChange={value => setHasFlatBorders(value)}
            size="md"
            style={tailwind.style("ml-1 mt-1")}
            label="Flat Borders"
          />
        </Box>
      </Box>
    </Box>
  );
};
