import React, { SetStateAction, useCallback, useRef, useState } from "react";
import { Keyboard, Platform, TouchableWithoutFeedback } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  Box,
  Button,
  Icon,
  Input,
  InputSizes,
  InputVariants,
  Radio,
  RadioGroup,
  Slot,
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
  const [hasSuffix, setHasSuffix] = useState<boolean>(false);
  const [hasPrefix, setHasPrefix] = useState<boolean>(false);
  const suffix = hasSuffix ? <Icon icon={<Slot />} /> : null;
  const prefix = hasPrefix ? <Icon icon={<Slot />} /> : null;
  const { bottom } = useSafeAreaInsets();

  const inputRef = useRef<any>(null);

  const handleFocusInOnPress = useCallback(() => {
    inputRef.current?.focus();
  }, []);

  const handleFocusInOutPress = useCallback(() => {
    inputRef.current?.blur();
  }, []);

  return (
    <Box style={tailwind.style("flex-1 justify-center bg-white-900")}>
      {Platform.OS === "ios" || Platform.OS === "android" ? (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <Box
            style={tailwind.style("flex-1 px-2 justify-center items-center")}
          >
            <Input
              size={selectedSize}
              placeholder={"Placeholder"}
              variant={selectedVariant}
              prefix={prefix}
              suffix={suffix}
              ref={inputRef}
              editable={!isDisabled}
              invalid={isInvalid}
            />
          </Box>
        </TouchableWithoutFeedback>
      ) : (
        <Box style={tailwind.style("flex-1 px-2 justify-center items-center")}>
          <Input
            size={selectedSize}
            placeholder={"Placeholder"}
            variant={selectedVariant}
            prefix={prefix}
            suffix={suffix}
            ref={inputRef}
            editable={!isDisabled}
            invalid={isInvalid}
          />
        </Box>
      )}
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
            onChange={(value: string) => setSelectedSize(value as InputSizes)}
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
              setSelectedVariant(value as InputVariants)
            }
            orientation="horizontal"
            style={tailwind.style("flex-wrap")}
          >
            <Radio value="outline" label="outline" />
            <Radio value="subtle" label="subtle" />
            <Radio value="underline" label="underline" />
            <Radio value="ghost" label="ghost" />
          </RadioGroup>
        </Group>
        <Box
          style={tailwind.style("flex flex-row justify-start flex-wrap w-full")}
        >
          <Switch
            state={isDisabled}
            onStateChange={(value: SetStateAction<boolean>) =>
              setIsDisabled(value)
            }
            size="md"
            label="Disabled"
            style={tailwind.style("mt-2 ml-1")}
          />
          <Switch
            state={isInvalid}
            onStateChange={(value: SetStateAction<boolean>) =>
              setIsInvalid(value)
            }
            size="md"
            style={tailwind.style("mt-2 ml-1")}
            label="Invalid"
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
            state={hasPrefix}
            onStateChange={(value: SetStateAction<boolean>) =>
              setHasPrefix(value)
            }
            size="md"
            style={tailwind.style("mt-2 ml-1")}
            label="Prefix"
          />
        </Box>
        <Box style={tailwind.style("flex flex-row justify-start w-full mt-2")}>
          <Button onPress={handleFocusInOnPress}>Focus in</Button>
          <Button
            style={tailwind.style("ml-1")}
            onPress={handleFocusInOutPress}
          >
            Focus out
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
