import React from "react";
import {
  Box,
  Radio,
  RadioGroup,
  useTheme,
} from "@adaptui/react-native-tailwind";

export const RadioScreen = () => {
  const tailwind = useTheme();
  return (
    <Box
      style={tailwind.style("flex-1 justify-center items-center  bg-white-900")}
    >
      <RadioGroup>
        <Radio label="Apple" value="Apple" />
        <Radio isDisabled label="Orange" value="Orange" />
      </RadioGroup>

      <RadioGroup themeColor="danger">
        <Radio label="Apple" value="Apple" />
        <Radio label="Orange" value="Orange" />
      </RadioGroup>

      <RadioGroup themeColor="primary" defaultValue="Apple">
        <Radio
          description="Used when the checkbox is selected and will use its value for the form submission."
          label="Apple"
          value="Apple"
        />
        <Radio
          description="Used when the checkbox is selected and will use its value for the form submission."
          label="Orange"
          value="Orange"
        />
      </RadioGroup>
    </Box>
  );
};
