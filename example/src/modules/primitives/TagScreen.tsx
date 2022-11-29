import React, { useState } from "react";
import {
  Box,
  Icon,
  Radio,
  RadioGroup,
  Slot,
  Switch,
  Tag,
  TagSize,
  TagTheme,
  TagVariant,
  useTheme,
} from "@adaptui/react-native-tailwind";

import { Group } from "../../components";

export const TagScreen = () => {
  const tailwind = useTheme();
  const [selectedSize, setSelectedSize] = useState<TagSize>("md");
  const [selectedVariant, setSelectedVariant] = useState<TagVariant>("solid");
  const [selectedTheme, setSelectedTheme] = useState<TagTheme>("base");
  const [hasPrefix, setHasPrefix] = useState<boolean>(false);
  const [hasSuffix, setHasSuffix] = useState<boolean>(false);
  const [isClosable, setIsClosable] = useState<boolean>(false);

  return (
    <Box style={tailwind.style("flex-1 items-center bg-white-900")}>
      <Box style={tailwind.style("flex-1 px-2 justify-center")}>
        <Tag
          size={selectedSize}
          variant={selectedVariant}
          themeColor={selectedTheme}
          prefix={hasPrefix ? <Icon icon={<Slot />} /> : null}
          suffix={hasSuffix ? <Icon icon={<Slot />} /> : null}
          closable={isClosable}
          style={tailwind.style("mx-1")}
        >
          Continue
        </Tag>
      </Box>

      <Box
        style={tailwind.style(
          "w-full p-2 rounded-t-lg shadow-lg bg-gray-100 justify-end items-center",
        )}
      >
        <RadioGroup
          value={selectedSize}
          onChange={value => setSelectedSize(value as TagSize)}
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
          onChange={value => setSelectedVariant(value as TagVariant)}
          orientation="horizontal"
        >
          <Group label="Variant" style={tailwind.style("mt-2")}>
            <Radio value="outline" label="outline" />
            <Radio value="subtle" label="subtle" />
            <Radio value="solid" label="solid" />
          </Group>
        </RadioGroup>
        <RadioGroup
          value={selectedTheme}
          onChange={value => setSelectedTheme(value as TagTheme)}
          orientation="horizontal"
        >
          <Group label="Theme" style={tailwind.style("mt-2")}>
            <Radio value="base" label="base" />
            <Radio value="primary" label="primary" />
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
            style={tailwind.style("ml-1")}
            label="Suffix"
          />

          <Switch
            state={isClosable}
            onStateChange={value => setIsClosable(value)}
            size="md"
            style={tailwind.style("ml-1")}
            label="Closable"
          />
        </Box>
      </Box>
    </Box>
  );
};
