import React, { useState } from "react";
import {
  Box,
  Button,
  ButtonSizes,
  ButtonTheme,
  ButtonVariants,
  Check,
  Icon,
  Radio,
  RadioGroup,
  Switch,
  useTheme,
} from "@adaptui/react-native-tailwind";

import { Group } from "../../components";

export const ButtonScreen = () => {
  const tailwind = useTheme();
  const [selectedVariant, setSelectedVariant] =
    useState<ButtonVariants>("solid");
  const [selectedTheme, setSelectedTheme] = useState<ButtonTheme>("base");
  const [selectedSize, setSelectedSize] = useState<ButtonSizes>("md");
  const [hasPrefix, setHasPrefix] = useState<boolean>(false);
  const [hasSuffix, setHasSuffix] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <Box style={tailwind.style("flex-1 justify-center bg-white-900")}>
      <Box
        style={tailwind.style(
          "flex-1 px-2 justify-center items-center bg-white-900",
        )}
      >
        <Button
          style={tailwind.style("mx-1")}
          variant={selectedVariant}
          themeColor={selectedTheme}
          size={selectedSize}
          prefix={!hasPrefix ? null : <Icon icon={<Check />} />}
          suffix={!hasSuffix ? null : <Icon icon={<Check />} />}
          loading={isLoading}
        >
          Continue
        </Button>
      </Box>
      <Box
        style={tailwind.style(
          "w-full p-2 rounded-t-lg shadow-lg bg-gray-100 justify-end items-center",
        )}
      >
        <RadioGroup
          value={selectedSize}
          onChange={value => setSelectedSize(value as ButtonSizes)}
          orientation="horizontal"
        >
          <Group label="Sizes">
            <Radio value="sm" label="sm" />
            <Radio value="md" label="md" />
            <Radio value="lg" label="lg" />
            <Radio value="xl" label="xl" />
          </Group>
        </RadioGroup>
        <RadioGroup
          value={selectedVariant}
          onChange={value => setSelectedVariant(value as ButtonVariants)}
          orientation="horizontal"
        >
          <Group label="Variants" style={tailwind.style("mt-2")}>
            <Radio value="outline" label="outline" />
            <Radio value="ghost" label="ghost" />
            <Radio value="solid" label="solid" />
            <Radio value="subtle" label="subtle" />
          </Group>
        </RadioGroup>
        <RadioGroup
          value={selectedTheme}
          onChange={value => setSelectedTheme(value as ButtonTheme)}
          orientation="horizontal"
        >
          <Group label="Theme" style={tailwind.style("mt-2")}>
            <Radio value="base" label="base" />
            <Radio value="primary" label="primary" />
            <Radio value="secondary" label="secondary" />
            <Radio value="success" label="success" />
            <Radio value="danger" label="danger" />
          </Group>
        </RadioGroup>
        <Box
          style={tailwind.style(
            "flex flex-row justify-start flex-wrap w-full mt-2",
          )}
        >
          <Switch
            state={hasPrefix}
            onStateChange={value => setHasPrefix(value)}
            size="md"
            label="Prefix"
          />
          <Switch
            state={hasSuffix}
            onStateChange={value => setHasSuffix(value)}
            size="md"
            style={tailwind.style("ml-1 ")}
            label="Suffix"
          />
          <Switch
            state={isLoading}
            onStateChange={value => setIsLoading(value)}
            size="md"
            style={tailwind.style("ml-1")}
            label="Loading"
          />
        </Box>
      </Box>
    </Box>
  );
};
