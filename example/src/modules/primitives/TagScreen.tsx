import React from "react";
import {
  Box,
  CaretRight,
  Icon,
  Info,
  Tag,
  useTheme,
} from "@adaptui/react-native-tailwind";

export const TagScreen = () => {
  const tailwind = useTheme();
  return (
    <Box
      style={tailwind.style("flex-1 justify-center items-center bg-white-900")}
    >
      <Tag style={tailwind.style("my-1")}>Default</Tag>
      <Tag
        style={tailwind.style("my-1")}
        prefix={<Icon icon={<Info />} />}
        variant="outline"
      >
        Default Outline
      </Tag>
      <Tag style={tailwind.style("my-1")} variant="subtle">
        Default Subtle
      </Tag>
      <Tag style={tailwind.style("my-1")} themeColor="primary">
        Primary Solid
      </Tag>

      <Tag
        prefix={<Icon icon={<Info />} />}
        style={tailwind.style("my-1")}
        themeColor="primary"
        variant="outline"
      >
        Primary Outline
      </Tag>
      <Tag
        suffix={<Icon icon={<CaretRight />} />}
        style={tailwind.style("my-1")}
        themeColor="primary"
        variant="subtle"
        closable
      >
        Primary Subtle
      </Tag>
      <Tag closable style={tailwind.style("my-1")} themeColor="primary">
        Close
      </Tag>
    </Box>
  );
};
