import React from "react";
import {
  Box,
  Button,
  CaretRight,
  DefaultUser,
  Icon,
  Image,
  useTheme,
} from "@adaptui/react-native-tailwind";

export default function ButtonScreen() {
  const tailwind = useTheme();
  return (
    <Box
      style={tailwind.style("flex-1 justify-center items-center bg-white-900")}
    >
      <Button themeColor="primary" suffix={<Icon icon={<CaretRight />} />}>
        Continue
      </Button>
      <Button style={tailwind.style("my-1")} variant="outline">
        Get Free Resource
      </Button>
      <Button
        style={({ pressed }) => [
          tailwind.style(
            `my-1 bg-violet-600 ${pressed ? "bg-violet-800" : ""}`,
          ),
        ]}
      >
        Reply
      </Button>
      <Button
        prefix={<Icon icon={<DefaultUser />} />}
        style={({ pressed }) => [
          tailwind.style(`my-1 bg-green-600 ${pressed ? "bg-green-800" : ""}`),
        ]}
      >
        Sign In
      </Button>
      <Button
        variant="subtle"
        iconOnly={<Icon icon={<CaretRight />} />}
        style={tailwind.style("my-1")}
      />
      <Button style={tailwind.style("my-1")} prefix={<Icon icon={<Image />} />}>
        Upload Image
      </Button>
    </Box>
  );
}
