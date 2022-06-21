import React from "react";
import {
  Box,
  Checkbox,
  CheckboxGroup,
  Text,
  useTheme,
} from "@adaptui/react-native-tailwind";

export const CheckboxGroupScreen = () => {
  const tailwind = useTheme();
  const [value, setValue] = React.useState<string[]>([]);
  return (
    <Box style={tailwind.style("flex-1 px-2 justify-center bg-white-900")}>
      <Text>Pick fruits to eat</Text>
      <CheckboxGroup value={value} onChange={setValue}>
        <Checkbox value="apple" label="Apple" />
        <Checkbox value="orange" label="Orange" />
        <Checkbox value="watermelon" label="Watermelon" />
        <Checkbox value="sapota" label="Sapota" />
        <Checkbox value="cherry" label="Cherry" />
      </CheckboxGroup>
      <Box style={tailwind.style("mt-2")}>
        <Text>Picked fruits</Text>
        {value.map((item, index) => {
          return (
            <Text style={tailwind.style("my-1")} key={index}>
              - {item}
            </Text>
          );
        })}
      </Box>
    </Box>
  );
};
