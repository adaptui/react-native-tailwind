import React, { useState } from "react";
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
  const [hasValue, setHasValue] = useState<boolean>(false);
  const [showValue, setShowValue] = useState<boolean>(false);
  const [hasCustomTrack, setHasCustomTrack] = useState<boolean>(false);

  return (
    <Box style={tailwind.style("flex-1 justify-center bg-white-900")}>
      <Box
        style={tailwind.style(
          "flex-1 px-2 justify-center items-center bg-white-900",
        )}
      >
        <Box style={tailwind.style("my-5")}>
          <CircularProgress
            style={!hasCustomTrack ? null : tailwind.style("w-48 h-48")}
            hint={!showValue ? null : `${progressValue}%`}
            value={!hasValue ? null : progressValue}
            themeColor={selectedTheme}
            size={selectedSize}
            progressTrackColor={
              !hasCustomTrack ? null : tailwind.getColor("text-green-600")
            }
          />
        </Box>
      </Box>
      <Box
        style={tailwind.style(
          "w-full py-2 rounded-t-lg shadow-lg bg-gray-100 justify-end items-center",
        )}
      >
        <RadioGroup
          value={selectedSize}
          onChange={value => setSelectedSize(value as CircularProgressSizes)}
          orientation="horizontal"
        >
          <Radio value="sm" label="sm" />
          <Radio value="md" label="md" />
          <Radio value="lg" label="lg" />
          <Radio value="xl" label="xl" />
        </RadioGroup>
        <RadioGroup
          value={selectedTheme}
          onChange={value => setSelectedTheme(value as CircularProgressTheme)}
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
            state={hasValue}
            onStateChange={value => setHasValue(value)}
            size="md"
            style={tailwind.style("ml-1 mt-1")}
            label="Show Hint"
          />
          <Switch
            state={showValue}
            onStateChange={value => {
              setShowValue(value);
              setHasValue(value);
            }}
            size="md"
            style={tailwind.style("ml-1 mt-1")}
            label="Show Value"
          />
          <Switch
            state={hasCustomTrack}
            onStateChange={value => setHasCustomTrack(value)}
            size="md"
            style={tailwind.style("ml-1 mt-1")}
            label="Custom track"
          />
        </Box>
        <Box
          style={tailwind.style(
            "flex flex-row justify-center flex-wrap w-full mt-1",
          )}
        >
          <Button onPress={() => setProgressValue(0)}>Reset</Button>
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
