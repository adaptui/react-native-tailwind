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
  const { bottom } = useSafeAreaInsets();

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
          `rounded-t-lg shadow-lg bg-gray-100 justify-end px-2 pt-2 pb-[${
            bottom === 0 ? 16 : bottom
          }px]`,
        )}
      >
        <Group label="Position">
          <RadioGroup
            value={selectedLabelPosition}
            onChange={(value: string) =>
              setSelectedLabelPosition(value as DividerLabelPosition)
            }
            orientation="horizontal"
          >
            <Radio value="start" label="start" />
            <Radio value="center" label="center" />
            <Radio value="end" label="end" />
          </RadioGroup>
        </Group>
        <Group label="Orientation" style={tailwind.style("mt-2")}>
          <RadioGroup
            value={selectedOrientation}
            onChange={(value: string) =>
              setSelectedOrientation(value as DividerOrientation)
            }
            orientation="horizontal"
          >
            <Radio value="horizontal" label="horizontal" />
            <Radio value="vertical" label="vertical" />
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
            state={hasCustomStyle}
            onStateChange={(value: SetStateAction<boolean>) =>
              setHasCustomStyle(value)
            }
            size="md"
            style={tailwind.style("mt-2 ml-1")}
            label="Custom style"
          />
        </Box>
      </Box>
    </Box>
  );
};
