import React, { SetStateAction, useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  Box,
  Button,
  ProgressBar,
  ProgressBarSizes,
  ProgressBarTheme,
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

export const ProgressScreen = () => {
  const tailwind = useTheme();
  const [progressValue, setProgressValue] = useCircularProgressState();

  const [selectedTheme, setSelectedTheme] = useState<ProgressBarTheme>("base");
  const [selectedSize, setSelectedSize] = useState<ProgressBarSizes>("md");

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
        <ProgressBar
          size={selectedSize}
          themeColor={selectedTheme}
          label={hasLabel ? "Progress" : undefined}
          hint={
            !hasHints
              ? undefined
              : progressValue === null
              ? undefined
              : `${progressValue}%`
          }
          value={progressValue}
          style={tailwind.style("my-2")}
        />
      </Box>
      <Box
        style={tailwind.style(
          `rounded-t-lg shadow-lg bg-gray-100 justify-end px-2 pt-2 pb-[${
            bottom === 0 ? 16 : bottom
          }px]`,
        )}
      >
        <Group label="Sizes">
          <RadioGroup
            value={selectedSize}
            onChange={(value: string) =>
              setSelectedSize(value as ProgressBarSizes)
            }
            orientation="horizontal"
          >
            <Radio value="sm" label="sm" />
            <Radio value="md" label="md" />
            <Radio value="lg" label="lg" />
          </RadioGroup>
        </Group>
        <Group label="Theme" style={tailwind.style("mt-2")}>
          <RadioGroup
            value={selectedTheme}
            onChange={(value: string) =>
              setSelectedTheme(value as ProgressBarTheme)
            }
            orientation="horizontal"
          >
            <Radio value="base" label="base" />
            <Radio value="primary" label="primary" />
          </RadioGroup>
        </Group>
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
          <Box
            style={tailwind.style(
              "flex flex-row justify-start flex-wrap w-full mt-2",
            )}
          >
            <Button
              variant="solid"
              onPress={() => {
                setProgressValue(0);
              }}
            >
              Reset
            </Button>
            <Button
              variant="ghost"
              onPress={() => {
                setProgressValue(null);
              }}
              style={tailwind.style("ml-1")}
            >
              Make Indeterminate
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
