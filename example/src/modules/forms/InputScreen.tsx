import React, { useRef, useState } from "react";
import {
  Box,
  Button,
  Icon,
  Info,
  Input,
  InputSizes,
  InputVariants,
  Radio,
  RadioGroup,
  Switch,
  useTheme,
} from "@adaptui/react-native-tailwind";

import { Group } from "../../components";

export const InputScreen = () => {
  const tailwind = useTheme();
  const [selectedVariant, setSelectedVariant] =
    useState<InputVariants>("outline");
  const [selectedSize, setSelectedSize] = useState<InputSizes>("md");
  const [isDisabled, setIsDisabled] = useState<boolean>(false);
  const [isInvalid, setIsInvalid] = useState<boolean>(false);
  const [hasSuffix, setHasSuffix] = useState(false);
  const suffix = hasSuffix ? <Icon icon={<Info />} /> : null;
  const inputRef = useRef(null);
  return (
    <Box style={tailwind.style("flex-1 justify-center bg-white-900")}>
      <Box
        style={tailwind.style(
          "flex-1 px-2 justify-center items-center bg-white-900",
        )}
      >
        <Input
          size={selectedSize}
          textInputWrapperProps={{ style: tailwind.style("my-2") }}
          placeholder={"Placeholder"}
          variant={selectedVariant}
          suffix={suffix}
          ref={inputRef}
          editable={!isDisabled}
          invalid={isInvalid}
        />
      </Box>
      <Box
        style={tailwind.style(
          "rounded-t-lg shadow-lg bg-gray-100 justify-end p-2",
        )}
      >
        <RadioGroup
          value={selectedSize}
          onChange={value => setSelectedSize(value as InputSizes)}
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
          onChange={value => setSelectedVariant(value as InputVariants)}
          orientation="horizontal"
        >
          <Group label="Variants" style={tailwind.style("mt-2")}>
            <Radio value="outline" label="outline" />
            <Radio value="subtle" label="subtle" />
            <Radio value="underline" label="underline" />
            <Radio value="ghost" label="ghost" />
          </Group>
        </RadioGroup>
        <Box
          style={tailwind.style(
            "flex flex-row justify-start flex-wrap w-full mt-2",
          )}
        >
          <Switch
            state={isDisabled}
            onStateChange={value => setIsDisabled(value)}
            size="md"
            label="Disabled"
          />
          <Switch
            state={isInvalid}
            onStateChange={value => setIsInvalid(value)}
            size="md"
            style={tailwind.style("ml-1")}
            label="Invalid"
          />
          <Switch
            state={hasSuffix}
            onStateChange={value => setHasSuffix(value)}
            size="md"
            style={tailwind.style("ml-1")}
            label="Suffix"
          />
        </Box>
        <Box style={tailwind.style("flex flex-row justify-start w-full mt-2")}>
          <Button onPress={() => inputRef.current.focus()}>Focus in</Button>
          <Button
            style={tailwind.style("ml-1")}
            onPress={() => inputRef.current.blur()}
          >
            Focus out
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
