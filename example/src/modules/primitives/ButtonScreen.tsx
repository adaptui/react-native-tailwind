import React, { SetStateAction, useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  Box,
  Button,
  ButtonSizes,
  ButtonTheme,
  ButtonVariants,
  Icon,
  Radio,
  RadioGroup,
  Slot,
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
  const [fullWidth, setFullWidth] = useState<boolean>(false);

  const { bottom } = useSafeAreaInsets();

  return (
    <Box style={tailwind.style("flex-1 justify-center bg-white-900")}>
      <Box
        style={tailwind.style(
          `flex-1 px-2 justify-center bg-white-900 ${
            fullWidth ? "" : "items-center"
          }`,
        )}
      >
        <Button
          variant={selectedVariant}
          themeColor={selectedTheme}
          size={selectedSize}
          prefix={!hasPrefix ? null : <Icon icon={<Slot />} />}
          suffix={!hasSuffix ? null : <Icon icon={<Slot />} />}
          loading={isLoading}
        >
          Continue
        </Button>
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
            onChange={(value: string) => setSelectedSize(value as ButtonSizes)}
            orientation="horizontal"
          >
            <Radio value="sm" label="sm" />
            <Radio value="md" label="md" />
            <Radio value="lg" label="lg" />
            <Radio value="xl" label="xl" />
          </RadioGroup>
        </Group>
        <Group label="Variants" style={tailwind.style("mt-2")}>
          <RadioGroup
            value={selectedVariant}
            onChange={(value: string) =>
              setSelectedVariant(value as ButtonVariants)
            }
            orientation="horizontal"
          >
            <Radio value="outline" label="outline" />
            <Radio value="ghost" label="ghost" />
            <Radio value="solid" label="solid" />
            <Radio value="subtle" label="subtle" />
          </RadioGroup>
        </Group>
        <Group label="Theme" style={tailwind.style("mt-2")}>
          <RadioGroup
            value={selectedTheme}
            onChange={(value: string) => setSelectedTheme(value as ButtonTheme)}
            orientation="horizontal"
            style={tailwind.style("flex-wrap")}
          >
            <Radio value="base" label="base" />
            <Radio value="primary" label="primary" />
            <Radio value="secondary" label="secondary" />
            <Radio value="success" label="success" />
            <Radio value="danger" label="danger" />
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
            state={isLoading}
            onStateChange={(value: SetStateAction<boolean>) =>
              setIsLoading(value)
            }
            size="md"
            style={tailwind.style("mt-2 ml-1")}
            label="Loading"
          />
          <Switch
            state={fullWidth}
            onStateChange={(value: SetStateAction<boolean>) =>
              setFullWidth(value)
            }
            size="md"
            style={tailwind.style("mt-2 ml-1")}
            label="Full Width"
          />
        </Box>
      </Box>
    </Box>
  );
};
