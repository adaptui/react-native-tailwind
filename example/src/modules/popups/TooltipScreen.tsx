import React, { SetStateAction, useState } from "react";
import { Platform, PressableStateCallbackType } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  Box,
  cx,
  generateBoxShadow,
  Radio,
  RadioGroup,
  Switch,
  Text,
  Tooltip,
  TooltipPlacement,
  Touchable,
  useOnFocus,
  useOnHover,
  useTailwind,
  useTheme,
} from "@adaptui/react-native-tailwind";

import { Group } from "../../components";

export const TooltipScreen = () => {
  const tailwind = useTheme();
  const buttonTheme = useTheme("button");
  const { gc, ts } = useTailwind();
  const { hovered } = useOnHover();
  const { focused } = useOnFocus();

  const [hasArrow, setHasArrow] = useState<boolean>(false);
  const [hasOffset, setHasOffset] = useState<boolean>(false);
  const { bottom } = useSafeAreaInsets();

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
            <Touchable
              style={(touchState: PressableStateCallbackType) => {
                return [
                  ts(
                    cx(
                      buttonTheme.base,
                      buttonTheme.size.lg?.default,
                      buttonTheme.themeColor.success?.solid?.container?.wrapper,
                      hovered.value
                        ? buttonTheme.themeColor.success?.solid?.container
                            ?.hover
                        : "",
                      touchState.pressed
                        ? buttonTheme.themeColor.success?.solid?.container
                            ?.pressed
                        : "",
                    ),
                  ),
                  focused.value
                    ? Platform.select({
                        web: {
                          outline: 0,
                          boxShadow: `${generateBoxShadow(
                            buttonTheme.themeColor.success?.solid?.container
                              ?.focus?.offset,
                            gc(
                              cx(
                                buttonTheme.themeColor.success?.solid?.container
                                  ?.focus?.color,
                              ),
                            ) as string,
                          )}`,
                          borderColor:
                            buttonTheme.themeColor.success?.solid?.container
                              ?.focus?.borderColor,
                        },
                      })
                    : {},
                ];
              }}
            >
              <Text style={tailwind.style("font-bold text-white-900")}>
                {Platform.OS === "web" ? "Hover here" : "Click here"}
              </Text>
            </Touchable>
          }
          content="2 out 3 tasks completed"
          mainOffset={hasOffset ? 15 : 0}
          crossOffset={hasOffset ? 1 : 0}
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
            value={tooltipPlacement}
            onChange={(value: string) =>
              setTooltipPlacement(value as TooltipPlacement)
            }
            orientation="horizontal"
            style={tailwind.style("flex-wrap")}
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
          </RadioGroup>
        </Group>
        <Box
          style={tailwind.style("flex flex-row justify-start w-full flex-wrap")}
        >
          <Switch
            state={hasArrow}
            onStateChange={(value: SetStateAction<boolean>) =>
              setHasArrow(value)
            }
            size="md"
            label="Has Arrow"
            style={tailwind.style("mt-2 ml-1")}
          />
          <Switch
            state={hasOffset}
            onStateChange={(value: SetStateAction<boolean>) =>
              setHasOffset(value)
            }
            size="md"
            label="Has Offset"
            style={tailwind.style("mt-2 ml-1")}
          />
        </Box>
      </Box>
    </Box>
  );
};
