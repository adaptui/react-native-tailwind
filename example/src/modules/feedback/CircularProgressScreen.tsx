import React, { SetStateAction, useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  Box,
  Button,
  CircularProgress,
  CircularProgressSizes,
  CircularProgressTheme,
  Radio,
  RadioGroup,
  Switch,
  useTheme,
} from "@adaptui/react-native-tailwind";

import { Group } from "../../components";

const useCircularProgressState = (initialValue: number | null = 0) => {
  const [value, setValue] = React.useState<number | null>(initialValue);

  React.useEffect(() => {
    const clearId = setInterval(() => {
      setValue(prevValue => {
        if (prevValue == null) {
          return prevValue;
        }
        return prevValue + 5;
      });
    }, 500);

    if (value === 100) {
      clearInterval(clearId);
    }

    return () => {
      clearInterval(clearId);
    };
  }, [setValue, value]);

  return [value, setValue] as const;
};

export const CircularProgressScreen = () => {
  const tailwind = useTheme();
  const [progressValue, setProgressValue] = useCircularProgressState();
  const [selectedTheme, setSelectedTheme] =
    useState<CircularProgressTheme>("base");
  const [selectedSize, setSelectedSize] = useState<CircularProgressSizes>("md");
  const [hasHints, setHasHints] = useState<boolean>(false);
  const [hasCustomTrack, setHasCustomTrack] = useState<boolean>(false);
  const { bottom } = useSafeAreaInsets();

  return (
    <Box style={tailwind.style("flex-1 justify-center bg-white-900")}>
      <Box
        style={tailwind.style(
          "flex-1 px-2 justify-center items-center bg-white-900",
        )}
      >
        <CircularProgress
          style={!hasCustomTrack ? null : tailwind.style("w-48 h-48")}
          hint={!hasHints ? undefined : `${progressValue}%`}
          value={progressValue}
          themeColor={selectedTheme}
          size={selectedSize}
          progressTrackColor={
            !hasCustomTrack ? undefined : tailwind.getColor("text-green-600")
          }
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
          onChange={(value: string) =>
            setSelectedSize(value as CircularProgressSizes)
          }
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
          onChange={(value: string) =>
            setSelectedTheme(value as CircularProgressTheme)
          }
          orientation="horizontal"
        >
          <Group label="Theme" style={tailwind.style("mt-2")}>
            <Radio value="base" label="base" />
            <Radio value="primary" label="primary" />
          </Group>
        </RadioGroup>
        <Box
          style={tailwind.style("flex flex-row justify-start flex-wrap w-full")}
        >
          <Switch
            state={hasHints}
            onStateChange={(value: SetStateAction<boolean>) => {
              setHasHints(value);
              setProgressValue(0);
            }}
            style={tailwind.style("mt-2 ml-1")}
            size="md"
            label="Has Hints"
          />
          <Switch
            state={hasCustomTrack}
            onStateChange={(value: SetStateAction<boolean>) =>
              setHasCustomTrack(value)
            }
            size="md"
            style={tailwind.style("mt-2 ml-1")}
            label="Custom track"
          />
        </Box>
        <Box
          style={tailwind.style(
            "flex flex-row justify-start flex-wrap w-full mt-2",
          )}
        >
          <Button variant="solid" onPress={() => setProgressValue(0)}>
            Reset
          </Button>
          <Button
            variant="ghost"
            onPress={() => setProgressValue(null)}
            style={tailwind.style("ml-1")}
          >
            Make Indeterminate
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
