import React, { useCallback, useRef, useState } from "react";
import { Keyboard, Platform } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  Box,
  Button,
  Icon,
  Radio,
  RadioGroup,
  Slot,
  Switch,
  TextArea,
  TextAreaSizes,
  TextAreaVariants,
  TouchableWithoutFeedback,
  useTheme,
} from "@adaptui/react-native-tailwind";

import { Group } from "../../components";

export const TextAreaScreen = () => {
  const tailwind = useTheme();
  const [hasvariant, setHasVariant] = useState<TextAreaVariants>("subtle");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isInvalid, setIsInvalid] = useState<boolean>(false);
  const [isDisabled, setIsDisabled] = useState<boolean>(false);
  const [hasSuffix, setHasSuffix] = useState<boolean>(false);
  const [size, setSize] = useState<TextAreaSizes>("sm");
  const suffix = hasSuffix ? <Icon icon={<Slot />} /> : null;
  const textAreaRef = useRef<any>(null);
  const { bottom } = useSafeAreaInsets();

  const handleFocusInOnPress = useCallback(() => {
    textAreaRef.current?.focus();
  }, []);

  const handleFocusInOutPress = useCallback(() => {
    textAreaRef.current?.blur();
  }, []);

  return (
    <Box style={tailwind.style("flex-1 justify-center bg-white-900")}>
      {Platform.OS === "ios" || Platform.OS === "android" ? (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <Box style={tailwind.style("flex-1 px-2 justify-center")}>
            <TextArea
              placeholder={"Type Something...."}
              size={size}
              variant={hasvariant}
              loading={isLoading}
              invalid={isInvalid}
              suffix={suffix}
              editable={!isDisabled}
              ref={textAreaRef}
            />
          </Box>
        </TouchableWithoutFeedback>
      ) : (
        <Box style={tailwind.style("flex-1 px-2 justify-center")}>
          <TextArea
            placeholder={"Type Something...."}
            size={size}
            variant={hasvariant}
            loading={isLoading}
            invalid={isInvalid}
            suffix={suffix}
            editable={!isDisabled}
            ref={textAreaRef}
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
            value={size}
            onChange={(value: string) => setSize(value as TextAreaSizes)}
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
            value={hasvariant}
            onChange={(value: string) =>
              setHasVariant(value as TextAreaVariants)
            }
            orientation="horizontal"
          >
            <Radio value="subtle" label="subtle" />
            <Radio value="outline" label="outline" />
            <Radio value="underline" label="underline" />
          </RadioGroup>
        </Group>
        <Box
          style={tailwind.style("flex flex-row justify-start flex-wrap w-full")}
        >
          <Switch
            label="Loading"
            state={isLoading}
            onStateChange={setIsLoading}
            size="md"
            style={tailwind.style("mt-2 ml-1")}
          />
          <Switch
            label="Invalid"
            state={isInvalid}
            onStateChange={setIsInvalid}
            size="md"
            style={tailwind.style("mt-2 ml-1")}
          />
          <Switch
            label="Disabled"
            state={isDisabled}
            onStateChange={setIsDisabled}
            size="md"
            style={tailwind.style("mt-2 ml-1")}
          />
          <Switch
            label="Suffix"
            state={hasSuffix}
            onStateChange={setHasSuffix}
            size="md"
            style={tailwind.style("mt-2 ml-1")}
          />
        </Box>
        <Box style={tailwind.style("flex-row justify-start py-2")}>
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
