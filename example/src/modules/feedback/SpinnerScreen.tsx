import React, { useState } from "react";
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

export const SpinnerScreen = () => {
  const tailwind = useTheme();

  const [selectedTheme, setSelectedTheme] = useState<SpinnerTheme>("base");
  const [selectedSize, setSelectedSize] = useState<SpinnerSizes>("md");
  const [selectedSpinnerTrackVisibility, setSelectedSpinnerTrackVisibility] =
    useState<SpinnerTrackVisibility>("transparent");

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
          "w-full py-2 rounded-t-lg shadow-lg bg-gray-100 justify-end items-center",
        )}
      >
        <RadioGroup
          value={selectedSize}
          onChange={value => setSelectedSize(value as SpinnerSizes)}
          orientation="horizontal"
        >
          <Radio value="xs" label="xs" />
          <Radio value="sm" label="sm" />
          <Radio value="md" label="md" />
          <Radio value="lg" label="lg" />
          <Radio value="xl" label="xl" />
        </RadioGroup>
        <RadioGroup
          value={selectedTheme}
          onChange={value => setSelectedTheme(value as SpinnerTheme)}
          orientation="horizontal"
        >
          <Box
            style={tailwind.style(
              "flex flex-row flex-wrap justify-center items-center mt-1",
            )}
          >
            <Radio value="base" label="base" />
            <Radio value="primary" label="primary" />
            <Radio value="secondary" label="secondary" />
            <Radio value="success" label="success" />
            <Radio value="danger" label="danger" />
          </Box>
        </RadioGroup>
        <RadioGroup
          value={selectedSpinnerTrackVisibility}
          onChange={value =>
            setSelectedSpinnerTrackVisibility(value as SpinnerTrackVisibility)
          }
          orientation="horizontal"
        >
          <Box
            style={tailwind.style(
              "flex flex-row flex-wrap justify-center items-center mt-1",
            )}
          >
            <Radio value="visible" label="visible" />
            <Radio value="transparent" label="transparent" />
          </Box>
        </RadioGroup>
      </Box>
    </Box>
  );
};
