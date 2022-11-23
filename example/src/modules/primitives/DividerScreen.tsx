import React, { useState } from "react";
import {
  Box,
  Divider,
  DividerLabelPosition,
  DividerOrientation,
  Radio,
  RadioGroup,
  Switch,
  Tag,
  useTheme,
} from "@adaptui/react-native-tailwind";

export const DividerScreen = () => {
  const tailwind = useTheme();

  const [selectedOrientation, setSelectedOrientation] =
    useState<DividerOrientation>("horizontal");
  const [hasCustomStyle, setHasCustomStyle] = useState<boolean>(false);
  const [hasLabel, setHasLabel] = useState<boolean>(false);
  const [selectedLabelPosition, setSelectedLabelPosition] =
    useState<DividerLabelPosition>("center");

  return (
    <Box style={tailwind.style("flex-1 justify-center bg-white-900")}>
      <Box style={tailwind.style("flex-1 justify-center")}>
        <Divider
          orientation={selectedOrientation}
          labelPosition={selectedLabelPosition}
          slot={
            !hasLabel ? null : (
              <Tag
                style={!hasCustomStyle ? null : tailwind.style("rounded-full")}
                variant="subtle"
                themeColor={!hasCustomStyle ? "base" : "primary"}
              >
                New Messages
              </Tag>
            )
          }
          dividerStyle={
            !hasCustomStyle
              ? null
              : [tailwind.style("border-dashed border-blue-500")]
          }
        />
      </Box>
      <Box
        style={tailwind.style(
          "w-full py-2 rounded-t-lg shadow-lg bg-gray-100 justify-end items-center",
        )}
      >
        <RadioGroup
          value={selectedLabelPosition}
          onChange={value =>
            setSelectedLabelPosition(value as DividerLabelPosition)
          }
          orientation="horizontal"
        >
          <Box
            style={tailwind.style(
              "flex flex-row flex-wrap justify-center items-center mt-1",
            )}
          >
            <Radio value="start" label="start" />
            <Radio value="center" label="center" />
            <Radio value="end" label="end" />
          </Box>
        </RadioGroup>
        <RadioGroup
          value={selectedOrientation}
          onChange={value =>
            setSelectedOrientation(value as DividerOrientation)
          }
          orientation="horizontal"
        >
          <Radio value="horizontal" label="horizontal" />
          <Radio value="vertical" label="vertical" />
        </RadioGroup>
        <Box
          style={tailwind.style(
            "flex flex-row justify-center flex-wrap w-full",
          )}
        >
          <Switch
            state={hasLabel}
            onStateChange={value => setHasLabel(value)}
            size="md"
            style={tailwind.style("ml-1 mt-1")}
            label="Label"
          />
          <Switch
            state={hasCustomStyle}
            onStateChange={value => setHasCustomStyle(value)}
            size="md"
            style={tailwind.style("ml-1 mt-1")}
            label="Custom style"
          />
        </Box>
      </Box>
    </Box>
  );
};
