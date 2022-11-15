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

export const TextAreaScreen = () => {
  const tailwind = useTheme();
  const [variant, setVariant] = useState("subtle");
  const [loading, setLoading] = useState(false);
  const [invalid, setInvalid] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [size, setSize] = useState("sm");
  const [icon, setIcon] = useState(false);
  const suffix = icon ? <Icon icon={<Slot />} /> : null;
  const ref = useRef(null);

  return (
    <Box
      style={tailwind.style(
        "flex-1 justify-center bg-white-500 items-center p-2 w-full",
      )}
    >
      <TextArea
        placeholder={"Type Something...."}
        size={size as TextAreaSizes}
        variant={variant as TextAreaVariants}
        loading={loading}
        invalid={invalid}
        suffix={suffix}
        editable={!disabled}
        ref={ref}
      />
      <Box style={tailwind.style("absolute bottom-0")}>
        <RadioGroup
          value={variant}
          onChange={setVariant}
          orientation="horizontal"
        >
          <Radio value="subtle" label="Subtle" />
          <Radio value="outline" label="Outline" />
          <Radio value="underline" label="Underline" />
        </RadioGroup>
        <RadioGroup value={size} onChange={setSize} orientation="horizontal">
          <Radio value="sm" label="Small" />
          <Radio value="md" label="Medium" />
          <Radio value="lg" label="Large" />
          <Radio value="xl" label="Extra Large" />
        </RadioGroup>
        <Box style={tailwind.style("flex-row justify-center")}>
          <Box style={tailwind.style("flex-col items-center")}>
            <Switch
              label="Loading"
              state={loading}
              onStateChange={setLoading}
            />
            <Switch
              label="Invalid"
              state={invalid}
              onStateChange={setInvalid}
            />
          </Box>
          <Box style={tailwind.style("flex-col items-center")}>
            <Switch
              label="Disabled"
              state={disabled}
              onStateChange={setDisabled}
            />
            <Switch label="Icon" state={icon} onStateChange={setIcon} />
          </Box>
        </Box>
        <Box style={tailwind.style("flex-row justify-center")}>
          <Button onPress={() => ref.current.blur()}>Focus out</Button>
          <Button onPress={() => ref.current.focus()}>Focus in</Button>
        </Box>
      </Box>
    </Box>
  );
};
