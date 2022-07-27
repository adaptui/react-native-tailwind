import React from "react";
import {
  Badge,
  BadgeNew,
  BadgeText,
  BadgeWrapper,
  Box,
  useTheme,
} from "@adaptui/react-native-tailwind";
import { styled } from "nativewind";

const StyledBadgeNew = styled(BadgeNew);

export const BadgeScreen = () => {
  const tailwind = useTheme();
  return (
    <Box
      style={tailwind.style("flex-1 justify-center items-center bg-white-900")}
    >
      <StyledBadgeNew
        size={"lg"}
        className="my-1 bg-grayDark-200 text-red-900"
        themeColor="secondary"
      >
        Scheduled
      </StyledBadgeNew>
      <BadgeNew
        size={"md"}
        style={tailwind.style("my-1 bg-teal-500")}
        themeColor="secondary"
      >
        <>Badge</>
        <BadgeWrapper style={tailwind.style("bg-yellow-500")} />
        <BadgeText style={tailwind.style("text-red-500")} />
      </BadgeNew>
      <Badge size={"lg"} style={tailwind.style("my-1")} themeColor="secondary">
        Scheduled
      </Badge>
    </Box>
  );
};
