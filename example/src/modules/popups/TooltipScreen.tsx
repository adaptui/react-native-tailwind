import React, { useState } from "react";
import {
  Box,
  Button,
  Radio,
  RadioGroup,
  Switch,
  Tooltip,
  TooltipPlacement,
  useTheme,
} from "@adaptui/react-native-tailwind";

export const TooltipScreen = () => {
  const tailwind = useTheme();

  const [hasArrow, setHasArrow] = useState<boolean>(false);
  const [tooltipPlacement, setTooltipPlacement] =
    useState<TooltipPlacement>("right");

  return (
    <Box style={tailwind.style("flex-1 justify-center bg-white-900")}>
      <Box
        style={tailwind.style(
          "flex-1 px-2 justify-center items-center bg-white-900",
        )}
      >
        <Tooltip
          hasArrow={hasArrow}
          placement={tooltipPlacement}
          trigger={
            <Button
              style={tailwind.style("my-1")}
              themeColor="success"
              size="sm"
            >
              Tooltip on Top
            </Button>
          }
          content="2 out 3 tasks completed"
        />
      </Box>
      <Box
        style={tailwind.style(
          "w-full py-2 rounded-t-lg shadow-lg bg-gray-100 justify-end items-center",
        )}
      >
        <RadioGroup
          value={tooltipPlacement}
          onChange={value => setTooltipPlacement(value as TooltipPlacement)}
          orientation="horizontal"
        >
          <Box
            style={tailwind.style(
              "flex flex-row flex-wrap justify-center items-center mt-1",
            )}
          >
            <Radio value="top" label="top" />
            <Radio value="bottom" label="bottom" />
            <Radio value="left" label="left" />
            <Radio value="right" label="right" />
            <Radio value="top right" label="top right" />
            <Radio value="top left" label="top left" />
            <Radio value="bottom left" label="bottom left" />
            <Radio value="bottom right" label="bottom right" />
            <Radio value="right bottom" label="right bottom" />
            <Radio value="right top" label="right top" />
            <Radio value="left bottom" label="left bottom" />
            <Radio value="left top" label="left top" />
          </Box>
        </RadioGroup>
        <Box
          style={tailwind.style(
            "flex flex-row justify-center flex-wrap w-full",
          )}
        >
          <Switch
            state={hasArrow}
            onStateChange={value => setHasArrow(value)}
            size="md"
            style={tailwind.style("ml-2 mt-1")}
            label="Has Arrow"
          />
        </Box>
      </Box>
    </Box>
  );
};
