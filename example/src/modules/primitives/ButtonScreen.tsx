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
          "w-full py-2 rounded-t-lg shadow-lg bg-gray-100 justify-end items-center",
        )}
      >
        <RadioGroup
          value={selectedSize}
          onChange={value => setSelectedSize(value as ButtonSizes)}
          orientation="horizontal"
        >
          <Radio value="sm" label="sm" />
          <Radio value="md" label="md" />
          <Radio value="lg" label="lg" />
          <Radio value="xl" label="xl" />
        </RadioGroup>
        <RadioGroup
          value={selectedVariant}
          onChange={value => setSelectedVariant(value as ButtonVariants)}
          orientation="horizontal"
        >
          <Radio value="outline" label="outline" />
          <Radio value="ghost" label="ghost" />
          <Radio value="solid" label="solid" />
          <Radio value="subtle" label="subtle" />
        </RadioGroup>
        <RadioGroup
          value={selectedTheme}
          onChange={value => setSelectedTheme(value as ButtonTheme)}
          orientation="horizontal"
        >
          <Box
            style={tailwind.style(
              "flex flex-row flex-wrap justify-center items-center mt-1",
            )}
          >
            <Radio value="base" label="base" />
            <Radio value="primary" label="primary" />
            <Radio value="secondary" label="secondary" />
            <Radio value="success" label="success" />
            <Radio value="danger" label="danger" />
          </Box>
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
            state={isLoading}
            onStateChange={value => setIsLoading(value)}
            size="md"
            style={tailwind.style("ml-1 mt-1")}
            label="Loading"
          />
        </Box>
      </Box>
    </Box>
  );
};
