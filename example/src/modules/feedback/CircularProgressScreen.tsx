import React from "react";
import {
  Box,
  Button,
  CircularProgress,
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
  const [value, setValue] = useCircularProgressState();
  return (
    <Box
      style={tailwind.style(
        "flex-1 justify-center items-center px-2 bg-white-900",
      )}
    >
      <Box style={tailwind.style("my-5")}>
        <CircularProgress size="sm" />
      </Box>
      <Box style={tailwind.style("my-5")}>
        <CircularProgress themeColor="primary" />
      </Box>
      <Box style={tailwind.style("my-5")}>
        <CircularProgress
          style={tailwind.style("w-48 h-48")}
          themeColor="primary"
          progressTrackColor={tailwind.getColor("text-green-600")}
        />
      </Box>
      <Box style={tailwind.style("my-5")}>
        <CircularProgress size="lg" />
      </Box>
      <Box style={tailwind.style("my-5")}>
        <CircularProgress value={value} themeColor="primary" size="xl" />
      </Box>
      <Box style={tailwind.style("my-5")}>
        <CircularProgress
          hint={`${value}%`}
          value={value}
          themeColor="primary"
          size="xl"
        />
      </Box>
      <Box style={tailwind.style("flex-row justify-center w-full")}>
        <Button onPress={() => setValue(0)}>Reset</Button>
        <Button variant="ghost" onPress={() => setValue(null)}>
          Make Indeterminate
        </Button>
      </Box>
    </Box>
  );
};
