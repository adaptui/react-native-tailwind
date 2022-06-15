import React from "react";
import {
  Box,
  Button,
  Clock,
  Icon,
  Tooltip,
  useTheme,
} from "@adaptui/react-native-tailwind";

export const TooltipScreen = () => {
  const tailwind = useTheme();
  return (
    <Box
      style={tailwind.style("flex-1 justify-center items-center bg-white-900")}
    >
      <Tooltip
        hasArrow
        placement="top"
        trigger={
          <Button
            style={tailwind.style("my-1")}
            prefix={<Icon icon={<Clock />} />}
            themeColor="success"
            size="sm"
          >
            Progress on Top
          </Button>
        }
        content="2 out 3 tasks completed"
      />
      <Tooltip
        hasArrow
        placement="bottom"
        trigger={
          <Button
            style={tailwind.style("my-1")}
            prefix={<Icon icon={<Clock />} />}
            themeColor="success"
            variant="outline"
            size="sm"
          >
            Progress on Bottom
          </Button>
        }
        content="2 out 3 tasks completed"
      />
      <Tooltip
        hasArrow
        placement="left"
        trigger={
          <Button
            style={tailwind.style("my-1")}
            prefix={<Icon icon={<Clock />} />}
            themeColor="success"
            variant="subtle"
            size="sm"
          >
            Progress on Left
          </Button>
        }
        content="2 out 3 tasks completed"
      />
      <Tooltip
        hasArrow
        placement="right"
        trigger={
          <Button
            style={tailwind.style("my-1")}
            themeColor="success"
            variant="ghost"
            size="sm"
          >
            Progress on Right
          </Button>
        }
        content="2 out 3 tasks completed"
      />
    </Box>
  );
};
