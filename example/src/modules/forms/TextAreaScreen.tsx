import React, { useRef, useState } from "react";
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
  useTheme,
} from "@adaptui/react-native-tailwind";

import { Group } from "../../components";

export const TextAreaScreen = () => {
  const tailwind = useTheme();
  const [variant, setVariant] = useState<TextAreaVariants>("subtle");
  const [loading, setLoading] = useState(false);
  const [invalid, setInvalid] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [size, setSize] = useState<TextAreaSizes>("sm");
  const [icon, setIcon] = useState(false);
  const suffix = icon ? <Icon icon={<Slot />} /> : null;
  const ref = useRef(null);

  return (
    <Box style={tailwind.style("flex-1 justify-center bg-white-900")}>
      <Box style={tailwind.style("flex-1 px-2 justify-center items-center")}>
        <TextArea
          placeholder={"Type Something...."}
          size={size}
          variant={variant}
          loading={loading}
          invalid={invalid}
          suffix={suffix}
          editable={!disabled}
          ref={ref}
        />
      </Box>
      <Box
        style={tailwind.style(
          "p-2 rounded-t-lg shadow-lg bg-gray-100 justify-end items-center",
        )}
      >
        <RadioGroup
          value={size}
          onChange={value => setSize(value as TextAreaSizes)}
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
          value={variant}
          onChange={value => setVariant(value as TextAreaVariants)}
          orientation="horizontal"
        >
          <Group label="Variant" style={tailwind.style("mt-2")}>
            <Radio value="subtle" label="subtle" />
            <Radio value="outline" label="outline" />
            <Radio value="underline" label="underline" />
          </Group>
        </RadioGroup>

        <Box
          style={tailwind.style(
            "flex flex-row justify-start flex-wrap w-full mt-2",
          )}
        >
          <Switch
            label="Loading"
            state={loading}
            onStateChange={setLoading}
            size="md"
          />
          <Switch
            label="Invalid"
            state={invalid}
            onStateChange={setInvalid}
            size="md"
            style={tailwind.style("ml-1")}
          />
          <Switch
            label="Disabled"
            state={disabled}
            onStateChange={setDisabled}
            size="md"
            style={tailwind.style("ml-1")}
          />
          <Switch
            label="Icon"
            state={icon}
            onStateChange={setIcon}
            size="md"
            style={tailwind.style("mt-1")}
          />
        </Box>
        <Box style={tailwind.style("flex-row justify-start w-full mt-2")}>
          <Button onPress={() => ref.current.focus()}>Focus in</Button>
          <Button
            style={tailwind.style("ml-1")}
            onPress={() => ref.current.blur()}
          >
            Focus out
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
