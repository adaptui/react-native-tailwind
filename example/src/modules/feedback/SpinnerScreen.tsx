import React, { useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  Box,
  Radio,
  RadioGroup,
  Spinner,
  SpinnerSizes,
  SpinnerTheme,
  SpinnerTrackVisibility,
  useTheme,
} from "@adaptui/react-native-tailwind";

import { Group } from "../../components";

export const SpinnerScreen = () => {
  const tailwind = useTheme();

  const [selectedTheme, setSelectedTheme] = useState<SpinnerTheme>("base");
  const [selectedSize, setSelectedSize] = useState<SpinnerSizes>("md");
  const [selectedSpinnerTrackVisibility, setSelectedSpinnerTrackVisibility] =
    useState<SpinnerTrackVisibility>("transparent");
  const safeAreaInsets = useSafeAreaInsets();

  return (
    <Box style={tailwind.style("flex-1 justify-center bg-white-900")}>
      <Box
        style={tailwind.style(
          "flex-1 px-2 justify-center items-center bg-white-900",
        )}
      >
        <Spinner
          style={tailwind.style("my-2")}
          themeColor={selectedTheme}
          size={selectedSize}
          track={selectedSpinnerTrackVisibility}
        />
      </Box>
      <Box
        style={tailwind.style(
          `rounded-t-lg shadow-lg bg-gray-100 justify-end px-2 pt-2 pb-[${safeAreaInsets.bottom}]`,
        )}
      >
        <RadioGroup
          value={selectedSize}
          onChange={(value: string) => setSelectedSize(value as SpinnerSizes)}
          orientation="horizontal"
        >
          <Group label="Sizes">
            <Radio value="xs" label="xs" />
            <Radio value="sm" label="sm" />
            <Radio value="md" label="md" />
            <Radio value="lg" label="lg" />
            <Radio value="xl" label="xl" />
          </Group>
        </RadioGroup>
        <RadioGroup
          value={selectedTheme}
          onChange={(value: string) => setSelectedTheme(value as SpinnerTheme)}
          orientation="horizontal"
        >
          <Group label="Theme" style={tailwind.style("mt-2")}>
            <Radio value="base" label="base" />
            <Radio value="primary" label="primary" />
            <Radio value="secondary" label="secondary" />
            <Radio value="success" label="success" />
            <Radio value="danger" label="danger" />
          </Group>
        </RadioGroup>
        <RadioGroup
          value={selectedSpinnerTrackVisibility}
          onChange={(value: string) =>
            setSelectedSpinnerTrackVisibility(value as SpinnerTrackVisibility)
          }
          orientation="horizontal"
        >
          <Group label="Track" style={tailwind.style("mt-2")}>
            <Radio value="visible" label="visible" />
            <Radio value="transparent" label="transparent" />
          </Group>
        </RadioGroup>
      </Box>
    </Box>
  );
};
