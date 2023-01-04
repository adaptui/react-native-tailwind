import React, { useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  Badge,
  BadgeSizes,
  BadgeTheme,
  BadgeVariants,
  Box,
  Icon,
  Radio,
  RadioGroup,
  Slot,
  Switch,
  useTheme,
} from "@adaptui/react-native-tailwind";

import { Group } from "../../components";

export const BadgeScreen = () => {
  const tailwind = useTheme();

  const [size, setSize] = useState<BadgeSizes>("md");
  const [prefix, setPrefix] = useState(false);
  const [variant, setVariant] = useState<BadgeVariants>("outline");
  const [theme, setTheme] = useState<BadgeTheme>("base");
  const { bottom } = useSafeAreaInsets();

  return (
    <Box style={tailwind.style("flex-1 justify-center bg-white-900")}>
      <Box
        style={tailwind.style(
          "flex-1 px-2 justify-center items-center bg-white-900",
        )}
      >
        <Badge
          style={tailwind.style("my-1")}
          themeColor={theme}
          size={size}
          variant={variant}
          prefix={!prefix ? null : <Icon icon={<Slot />} />}
        >
          Completed
        </Badge>
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
            value={size}
            onChange={(value: string) => setSize(value as BadgeSizes)}
            orientation="horizontal"
          >
            <Radio value="sm" label="sm" />
            <Radio value="md" label="md" />
            <Radio value="lg" label="lg" />
          </RadioGroup>
        </Group>
        <Group label="Variants" style={tailwind.style("mt-2")}>
          <RadioGroup
            value={variant}
            onChange={(value: string) => setVariant(value as BadgeVariants)}
            orientation="horizontal"
          >
            <Radio value="outline" label="outline" />
            <Radio value="solid" label="solid" />
            <Radio value="subtle" label="subtle" />
          </RadioGroup>
        </Group>
        <Group label="Theme" style={tailwind.style("mt-2")}>
          <RadioGroup
            value={theme}
            onChange={(value: string) => setTheme(value as BadgeTheme)}
            orientation="horizontal"
            style={tailwind.style("flex-wrap")}
          >
            <Radio value="base" label="base" />
            <Radio value="danger" label="danger" />
            <Radio value="primary" label="primary" />
            <Radio value="secondary" label="secondary" />
            <Radio value="success" label="success" />
          </RadioGroup>
        </Group>
        <Box
          style={tailwind.style("flex flex-row justify-start flex-wrap w-full")}
        >
          <Switch
            label="prefix"
            state={prefix}
            onStateChange={setPrefix}
            size="md"
            style={tailwind.style("mt-2 ml-1")}
          />
        </Box>
      </Box>
    </Box>
  );
};
