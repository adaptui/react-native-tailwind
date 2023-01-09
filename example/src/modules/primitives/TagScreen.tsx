import React, { SetStateAction, useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
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
  const { bottom } = useSafeAreaInsets();

  return (
    <Box style={tailwind.style("flex-1 justify-center bg-white-900")}>
      <Box
        style={tailwind.style(
          "flex-1 px-2 justify-center items-center bg-white-900",
        )}
      >
        <Tag
          size={selectedSize}
          variant={selectedVariant}
          themeColor={selectedTheme}
          prefix={hasPrefix ? <Icon icon={<Slot />} /> : null}
          suffix={hasSuffix ? <Icon icon={<Slot />} /> : null}
          closable={isClosable}
        >
          Continue
        </Tag>
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
            onChange={(value: string) => setSelectedSize(value as TagSize)}
            orientation="horizontal"
          >
            <Radio value="sm" label="sm" />
            <Radio value="md" label="md" />
            <Radio value="lg" label="lg" />
            <Radio value="xl" label="xl" />
          </RadioGroup>
        </Group>
        <Group label="Variant" style={tailwind.style("mt-2")}>
          <RadioGroup
            value={selectedVariant}
            onChange={(value: string) =>
              setSelectedVariant(value as TagVariant)
            }
            orientation="horizontal"
          >
            <Radio value="outline" label="outline" />
            <Radio value="subtle" label="subtle" />
            <Radio value="solid" label="solid" />
          </RadioGroup>
        </Group>
        <Group label="Theme" style={tailwind.style("mt-2")}>
          <RadioGroup
            value={selectedTheme}
            onChange={(value: string) => setSelectedTheme(value as TagTheme)}
            orientation="horizontal"
          >
            <Radio value="base" label="base" />
            <Radio value="primary" label="primary" />
          </RadioGroup>
        </Group>
        <Box
          style={tailwind.style("flex flex-row justify-start flex-wrap w-full")}
        >
          <Switch
            state={hasPrefix}
            onStateChange={(value: SetStateAction<boolean>) =>
              setHasPrefix(value)
            }
            size="md"
            label="Prefix"
            style={tailwind.style("mt-2 ml-1")}
          />
          <Switch
            state={hasSuffix}
            onStateChange={(value: SetStateAction<boolean>) =>
              setHasSuffix(value)
            }
            size="md"
            style={tailwind.style("mt-2 ml-1")}
            label="Suffix"
          />
          <Switch
            state={isClosable}
            onStateChange={(value: SetStateAction<boolean>) =>
              setIsClosable(value)
            }
            size="md"
            style={tailwind.style("mt-2 ml-1")}
            label="Closable"
          />
        </Box>
      </Box>
    </Box>
  );
};
