import React, { useState } from "react";
import {
  Box,
  Icon,
  Radio,
  RadioGroup,
  Slot,
  Switch,
  Tag,
  TagSizes,
  TagTheme,
  TagVariant,
  useTheme,
} from "@adaptui/react-native-tailwind";

export const TagScreen = () => {
  const tailwind = useTheme();
  const [selectedSize, setSelectedSize] = useState<TagSizes>("md");
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
          "w-full py-2 rounded-t-lg shadow-lg bg-gray-100 justify-end items-center",
        )}
      >
        <RadioGroup
          value={selectedSize}
          onChange={value => setSelectedSize(value as TagSizes)}
          orientation="horizontal"
        >
          <Radio value="sm" label="sm" />
          <Radio value="md" label="md" />
          <Radio value="lg" label="lg" />
          <Radio value="xl" label="xl" />
        </RadioGroup>
        <RadioGroup
          value={selectedVariant}
          onChange={value => setSelectedVariant(value as TagVariant)}
          orientation="horizontal"
        >
          <Radio value="outline" label="outline" />
          <Radio value="subtle" label="subtle" />
          <Radio value="solid" label="solid" />
        </RadioGroup>
        <RadioGroup
          value={selectedTheme}
          onChange={value => setSelectedTheme(value as TagTheme)}
          orientation="horizontal"
        >
          <Radio value="base" label="base" />
          <Radio value="primary" label="primary" />
        </RadioGroup>
        <Box
          style={tailwind.style(
            "flex flex-row justify-center flex-wrap w-full",
          )}
        >
          <Switch
            state={hasPrefix}
            onStateChange={value => setHasPrefix(value)}
            size="md"
            style={tailwind.style("ml-1 mt-1")}
            label="Prefix"
          />
          <Switch
            state={hasSuffix}
            onStateChange={value => setHasSuffix(value)}
            size="md"
            style={tailwind.style("ml-1 mt-1")}
            label="Suffix"
          />

          <Switch
            state={isClosable}
            onStateChange={value => setIsClosable(value)}
            size="md"
            style={tailwind.style("ml-1 mt-1")}
            label="Closable"
          />
        </Box>
      </Box>
    </Box>
  );
};
