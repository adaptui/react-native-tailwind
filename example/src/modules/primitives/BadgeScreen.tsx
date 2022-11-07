import React from "react";
import {
  BadgeNew,
  BadgeText,
  BadgeWrapper,
  Box,
} from "@adaptui/react-native-tailwind";

export const BadgeScreen = () => {
  return (
    <Box className="flex-1 justify-center items-center bg-white-900">
      <BadgeNew size="lg" className="my-1" themeColor="secondary">
        Scheduled
      </BadgeNew>
      <BadgeNew size="md" className="my-1 bg-teal-500" themeColor="secondary">
        <>Badge</>
        <BadgeWrapper className="bg-yellow-500" />
        <BadgeText className="text-red-500" />
      </BadgeNew>
    </Box>
  );
};
