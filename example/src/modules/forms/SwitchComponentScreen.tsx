import React, { SetStateAction, useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  Box,
  Radio,
  RadioGroup,
  Switch,
  SwitchSize,
  SwitchTheme,
  useTheme,
} from "@adaptui/react-native-tailwind";

import { Group } from "../../components";

export const SwitchComponentScreen = () => {
  const tailwind = useTheme();

  const [selectedSize, setSelectedSize] = useState<SwitchSize>("md");
  const [selectedTheme, setSelectedTheme] = useState<SwitchTheme>("base");

  const [hasLabel, setHasLabel] = useState(false);
  const [hasDesc, setHasDesc] = useState(false);
  const safeAreaInsets = useSafeAreaInsets();

  const [isSwitchDisabled, setIsSwitchDisabled] = useState<boolean>(false);

  return (
    <Box style={tailwind.style("flex-1 justify-center bg-white-900")}>
      <Box
        style={tailwind.style(
          "flex-1 px-2 justify-center items-center bg-white-900",
        )}
      >
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
          `rounded-t-lg shadow-lg bg-gray-100 justify-end px-2 pt-2 pb-[${safeAreaInsets.bottom}]`,
        )}
      >
        <RadioGroup
          value={selectedSize}
          onChange={(value: string) => setSelectedSize(value as SwitchSize)}
          orientation="horizontal"
        >
          <Group label="Sizes">
            <Radio value="sm" label="sm" />
            <Radio value="md" label="md" />
            <Radio value="lg" label="lg" />
            <Radio value="xl" label="xl" />
          </Group>
        </RadioGroup>
        <RadioGroup
          value={selectedTheme}
          onChange={(value: string) => setSelectedTheme(value as SwitchTheme)}
          orientation="horizontal"
        >
          <Group label="Theme" style={tailwind.style("mt-2")}>
            <Radio value="base" label="base" />
            <Radio value="primary" label="primary" />
          </Group>
        </RadioGroup>
        <Box
          style={tailwind.style(
            "flex flex-row justify-start flex-wrap w-full mt-2",
          )}
        >
          <Switch
            state={hasLabel}
            size="md"
            onStateChange={(value: SetStateAction<boolean>) =>
              setHasLabel(value)
            }
            label="Has Label"
          />
          <Switch
            state={hasDesc}
            size="md"
            onStateChange={(value: SetStateAction<boolean>) =>
              setHasDesc(value)
            }
            style={tailwind.style("ml-1")}
            label="Has Description"
          />
          <Switch
            state={isSwitchDisabled}
            onStateChange={(value: SetStateAction<boolean>) =>
              setIsSwitchDisabled(value)
            }
            size="md"
            style={tailwind.style("mt-1")}
            label="Disabled"
          />
        </Box>
      </Box>
    </Box>
  );
};
