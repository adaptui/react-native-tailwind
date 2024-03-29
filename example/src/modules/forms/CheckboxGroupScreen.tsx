import React, { SetStateAction, useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  Box,
  Checkbox,
  CheckboxGroup,
  CheckboxSizes,
  CheckboxTheme,
  Radio,
  RadioGroup,
  Switch,
  Text,
  useTheme,
} from "@adaptui/react-native-tailwind";

import { Group } from "../../components";

export const CheckboxGroupScreen = () => {
  const tailwind = useTheme();
  const [selectedValue, setSelectedValue] = useState<string[]>([]);

  const [selectedTheme, setSelectedTheme] = useState<CheckboxTheme>("base");
  const [selectedSize, setSelectedSize] = useState<CheckboxSizes>("md");
  const [isDisabled, setIsDisabled] = useState<boolean>(false);
  const [isInvalid, setIsInvalid] = useState<boolean>(false);
  const { bottom } = useSafeAreaInsets();

  return (
    <Box style={tailwind.style("flex-1 justify-center bg-white-900")}>
      <Box
        style={tailwind.style(
          "flex-1 px-2 justify-center items-center bg-white-900",
        )}
      >
        <Text>Pick fruits to eat</Text>
        <CheckboxGroup
          themeColor={selectedTheme}
          value={selectedValue}
          onChange={setSelectedValue}
          size={selectedSize}
        >
          <Checkbox value="apple" label="Apple" />
          <Checkbox value="orange" isInvalid={isInvalid} label="Orange" />
          <Checkbox
            isDisabled={isDisabled}
            value="watermelon"
            label="Watermelon"
          />
          <Checkbox value="sapota" isDisabled={isDisabled} label="Sapota" />
          <Checkbox value="cherry" isInvalid={isInvalid} label="Cherry" />
        </CheckboxGroup>
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
        </Box>
      </Box>
    </Box>
  );
};
