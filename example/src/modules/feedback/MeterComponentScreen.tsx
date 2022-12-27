import React, { SetStateAction, useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
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

import { Group } from "../../components";

export const MeterComponentScreen = () => {
  const tailwind = useTheme();

  const [selectedTheme, setSelectedTheme] = useState<MeterTheme>("base");
  const [selectedSize, setSelectedSize] = useState<MeterSizes>("md");
  const [hasFlatBorder, setHasFlatBorders] = useState<boolean>(false);
  const [hasIntervals, setHasIntervals] = useState<boolean>(false);
  const [hasHints, setHasHints] = useState<boolean>(false);
  const [hasLabel, setHasLabel] = useState<boolean>(false);
  const { bottom } = useSafeAreaInsets();

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
          `rounded-t-lg shadow-lg bg-gray-100 justify-end px-2 pt-2 pb-[${
            bottom === 0 ? 16 : bottom
          }px]`,
        )}
      >
        <RadioGroup
          value={selectedSize}
          onChange={(value: string) => setSelectedSize(value as MeterSizes)}
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
          onChange={(value: string) => setSelectedTheme(value as MeterTheme)}
          orientation="horizontal"
        >
          <Group label="Theme" style={tailwind.style("mt-2")}>
            <Radio value="base" label="base" />
            <Radio value="primary" label="primary" />
            <Radio value="success" label="success" />
          </Group>
        </RadioGroup>
        <Box
          style={tailwind.style("flex flex-row justify-start flex-wrap w-full")}
        >
          <Switch
            state={hasLabel}
            onStateChange={(value: SetStateAction<boolean>) =>
              setHasLabel(value)
            }
            size="md"
            label="Label"
            style={tailwind.style("mt-2 ml-1")}
          />
          <Switch
            state={hasHints}
            onStateChange={(value: SetStateAction<boolean>) =>
              setHasHints(value)
            }
            size="md"
            style={tailwind.style("mt-2 ml-1")}
            label="Hints"
          />
          <Switch
            state={hasIntervals}
            onStateChange={(value: SetStateAction<boolean>) =>
              setHasIntervals(value)
            }
            size="md"
            style={tailwind.style("mt-2 ml-1")}
            label="Intervals"
          />
          <Switch
            state={hasFlatBorder}
            onStateChange={(value: SetStateAction<boolean>) =>
              setHasFlatBorders(value)
            }
            size="md"
            style={tailwind.style("mt-2 ml-1")}
            label="Flat Borders"
          />
        </Box>
      </Box>
    </Box>
  );
};
