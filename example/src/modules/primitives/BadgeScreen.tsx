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
  const safeAreaInsets = useSafeAreaInsets();

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
          `rounded-t-lg shadow-lg bg-gray-100 justify-end px-2 pt-2 pb-[${safeAreaInsets.bottom}]`,
        )}
      >
        <RadioGroup
          value={size}
          onChange={(value: string) => setSize(value as BadgeSizes)}
          orientation="horizontal"
        >
          <Group label="Sizes">
            <Radio value="sm" label="sm" />
            <Radio value="md" label="md" />
            <Radio value="lg" label="lg" />
          </Group>
        </RadioGroup>

        <RadioGroup
          value={variant}
          onChange={(value: string) => setVariant(value as BadgeVariants)}
          orientation="horizontal"
        >
          <Group label="Variants" style={tailwind.style("mt-2")}>
            <Radio value="outline" label="outline" />
            <Radio value="solid" label="solid" />
            <Radio value="subtle" label="subtle" />
          </Group>
        </RadioGroup>

        <RadioGroup
          value={theme}
          onChange={(value: string) => setTheme(value as BadgeTheme)}
          orientation="horizontal"
        >
          <Group label="Theme" style={tailwind.style("mt-2")}>
            <Radio value="base" label="base" />
            <Radio value="danger" label="danger" />
            <Radio value="primary" label="primary" />
            <Radio value="secondary" label="secondary" />
            <Radio value="success" label="success" />
          </Group>
        </RadioGroup>

        <Box
          style={tailwind.style("flex flex-row justify-start flex-wrap w-full")}
        >
          <Switch
            label="prefix"
            state={prefix}
            onStateChange={setPrefix}
            size="md"
            style={tailwind.style("mt-2")}
          />
        </Box>
      </Box>
    </Box>
  );
};
