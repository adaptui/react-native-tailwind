import React, { SetStateAction, useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  Box,
  Checkbox,
  CheckboxSizes,
  CheckboxTheme,
  Radio,
  RadioGroup,
  Switch,
  useTheme,
} from "@adaptui/react-native-tailwind";

import { Group } from "../../components";

export const CheckboxScreen = () => {
  const tailwind = useTheme();

  const [selectedTheme, setSelectedTheme] = useState<CheckboxTheme>("base");
  const [selectedSize, setSelectedSize] = useState<CheckboxSizes>("md");
  const [hasDescription, setHasDescription] = useState<boolean>(false);
  const [isDisabled, setIsDisabled] = useState<boolean>(false);
  const [isInvalid, setIsInvalid] = useState<boolean>(false);
  const [isIndeterminate, setIsIndeterminate] = useState<boolean>(false);
  const [hasLabel, setHasLabel] = useState<boolean>(false);
  const { bottom } = useSafeAreaInsets();

  return (
    <Box style={tailwind.style("flex-1 justify-center bg-white-900")}>
      <Box
        style={tailwind.style(
          "flex-1 px-2 justify-center items-center bg-white-900",
        )}
      >
        <Checkbox
          label={!hasLabel ? null : "Aeroplane"}
          isDisabled={isDisabled}
          isInvalid={isInvalid}
          description={
            !hasDescription
              ? null
              : "An airplane or aeroplane (informally plane) is a fixed-wing aircraft that is propelled forward by thrust from a jet engine, propeller, or rocket engine."
          }
          themeColor={selectedTheme}
          size={selectedSize}
          isIndeterminate={isIndeterminate}
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
              setSelectedSize(value as CheckboxSizes)
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
              setSelectedTheme(value as CheckboxTheme)
            }
            orientation="horizontal"
          >
            <Radio value="base" label="base" />
            <Radio value="primary" label="primary" />
            <Radio value="danger" label="danger" />
          </RadioGroup>
        </Group>
        <Box
          style={tailwind.style("flex flex-row justify-start flex-wrap w-full")}
        >
          <Switch
            state={isDisabled}
            onStateChange={(value: SetStateAction<boolean>) =>
              setIsDisabled(value)
            }
            size="md"
            label="Disabled"
            style={tailwind.style("mt-2 ml-1")}
          />
          <Switch
            state={isInvalid}
            onStateChange={(value: SetStateAction<boolean>) =>
              setIsInvalid(value)
            }
            size="md"
            style={tailwind.style("mt-2 ml-1")}
            label="Invalid"
          />
          <Switch
            state={hasLabel}
            onStateChange={(value: SetStateAction<boolean>) =>
              setHasLabel(value)
            }
            size="md"
            style={tailwind.style("mt-2 ml-1")}
            label="Label"
          />
          <Switch
            state={hasDescription}
            onStateChange={(value: SetStateAction<boolean>) =>
              setHasDescription(value)
            }
            size="md"
            style={tailwind.style("mt-2 ml-1")}
            label="Description"
          />
          <Switch
            state={isIndeterminate}
            onStateChange={(value: SetStateAction<boolean>) =>
              setIsIndeterminate(value)
            }
            size="md"
            style={tailwind.style("mt-2 ml-1")}
            label="Indeterminate"
          />
        </Box>
      </Box>
    </Box>
  );
};
