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
          "w-full py-2 rounded-t-lg shadow-lg bg-gray-100 justify-end items-center",
        )}
      >
        <RadioGroup
          value={selectedSize}
          onChange={value => setSelectedSize(value as InputSizes)}
          orientation="horizontal"
        >
          <Radio value="sm" label="sm" />
          <Radio value="md" label="md" />
          <Radio value="lg" label="lg" />
          <Radio value="xl" label="xl" />
        </RadioGroup>
        <RadioGroup
          value={selectedVariant}
          onChange={value => setSelectedVariant(value as InputVariants)}
          orientation="horizontal"
        >
          <Box
            style={tailwind.style(
              "flex flex-row flex-wrap justify-center items-center mt-1",
            )}
          >
            <Radio value="outline" label="outline" />
            <Radio value="subtle" label="subtle" />
            <Radio value="underline" label="underline" />
            <Radio value="ghost" label="ghost" />
          </Box>
        </RadioGroup>
        <Box
          style={tailwind.style(
            "flex flex-row justify-center flex-wrap w-full",
          )}
        >
          <Switch
            state={isDisabled}
            onStateChange={value => setIsDisabled(value)}
            size="md"
            style={tailwind.style("ml-2 mt-1")}
            label="Disabled"
          />
          <Switch
            state={isInvalid}
            onStateChange={value => setIsInvalid(value)}
            size="md"
            style={tailwind.style("ml-2 mt-1")}
            label="Invalid"
          />
          <Switch
            state={hasSuffix}
            onStateChange={value => setHasSuffix(value)}
            size="md"
            style={tailwind.style("ml-2 mt-1")}
            label="Suffix"
          />
        </Box>
        <Box style={tailwind.style("flex-row justify-center py-2")}>
          <Button onPress={() => inputRef.current.focus()}>Focus in</Button>
          <Button
            style={tailwind.style("ml-2")}
            onPress={() => inputRef.current.blur()}
          >
            Focus out
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
