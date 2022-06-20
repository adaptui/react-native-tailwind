import React from "react";
import {
  Box,
  Icon,
  Info,
  Input,
  useTheme,
} from "@adaptui/react-native-tailwind";

export const InputScreen = () => {
  const tailwind = useTheme();

  return (
    <Box style={tailwind.style("flex-1 px-2 justify-center bg-white-900")}>
      <Input
        textInputWrapperProps={{ style: tailwind.style("my-2") }}
        placeholder={"Placeholder"}
        suffix={<Icon icon={<Info />} />}
      />
      <Input
        textInputWrapperProps={{ style: tailwind.style("my-2") }}
        placeholder={"Placeholder"}
        variant="subtle"
        suffix={<Icon icon={<Info />} />}
      />
      <Input
        textInputWrapperProps={{ style: tailwind.style("my-2") }}
        placeholder={"Placeholder"}
        variant="underline"
        suffix={<Icon icon={<Info />} />}
      />
      <Input
        textInputWrapperProps={{ style: tailwind.style("my-2") }}
        placeholder={"Placeholder"}
        variant="ghost"
        suffix={<Icon icon={<Info />} />}
      />
    </Box>
  );
};
