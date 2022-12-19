import React, { SetStateAction, useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
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

import { Group } from "../../components";

export const DividerScreen = () => {
  const tailwind = useTheme();

  const [selectedOrientation, setSelectedOrientation] =
    useState<DividerOrientation>("horizontal");
  const [hasCustomStyle, setHasCustomStyle] = useState<boolean>(false);
  const [hasLabel, setHasLabel] = useState<boolean>(false);
  const [selectedLabelPosition, setSelectedLabelPosition] =
    useState<DividerLabelPosition>("center");
  const safeAreaInsets = useSafeAreaInsets();

  return (
    <Box style={tailwind.style("flex-1 justify-center bg-white-900")}>
      <Box style={tailwind.style("flex-1 justify-center")}>
        <Divider
          orientation={selectedOrientation}
          labelPosition={selectedLabelPosition}
          slot={
            !hasLabel ? undefined : (
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
          `rounded-t-lg shadow-lg bg-gray-100 justify-end px-2 pt-2 pb-[${safeAreaInsets.bottom}]`,
        )}
      >
        <RadioGroup
          value={selectedLabelPosition}
          onChange={(value: string) =>
            setSelectedLabelPosition(value as DividerLabelPosition)
          }
          orientation="horizontal"
        >
          <Group label="Position (Only when there is a label)">
            <Radio value="start" label="start" />
            <Radio value="center" label="center" />
            <Radio value="end" label="end" />
          </Group>
        </RadioGroup>
        <RadioGroup
          value={selectedOrientation}
          onChange={(value: string) =>
            setSelectedOrientation(value as DividerOrientation)
          }
          orientation="horizontal"
        >
          <Group label="Orientation" style={tailwind.style("mt-2")}>
            <Radio value="horizontal" label="horizontal" />
            <Radio value="vertical" label="vertical" />
          </Group>
        </RadioGroup>
        <Box
          style={tailwind.style(
            "flex flex-row justify-start flex-wrap w-full mt-2",
          )}
        >
          <Switch
            state={hasLabel}
            onStateChange={(value: SetStateAction<boolean>) =>
              setHasLabel(value)
            }
            size="md"
            label="Label"
          />
          <Switch
            state={hasCustomStyle}
            onStateChange={(value: SetStateAction<boolean>) =>
              setHasCustomStyle(value)
            }
            size="md"
            style={tailwind.style("ml-1")}
            label="Custom style"
          />
        </Box>
      </Box>
    </Box>
  );
};
