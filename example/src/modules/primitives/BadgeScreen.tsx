import React from "react";
import { Text } from "react-native";
import {
  BadgeNew,
  BadgeText,
  BadgeWrapper,
  Box,
} from "@adaptui/react-native-tailwind";
import { styled } from "nativewind";

const StyledText = styled(Text);

export const BadgeScreen = () => {
  return (
    <Box className="flex-1 justify-center items-center bg-white-900">
      <BadgeNew size="sm" className="my-1" themeColor="primary">
        Scheduled
      </BadgeNew>
      <BadgeNew size="md" className="my-1" themeColor="danger">
        Scheduled
      </BadgeNew>
      <StyledText className="text-blue-300 bg-blue-100">Native</StyledText>
      <BadgeNew size="lg" className="my-1" themeColor="secondary">
        <BadgeWrapper className="bg-yellow-500" />
        <BadgeText className="text-red-900">Text</BadgeText>
      </BadgeNew>
    </Box>
  );
};
