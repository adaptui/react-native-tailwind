import React from "react";
import {
  Badge,
  Box,
  Check,
  Clock,
  Close,
  Icon,
  useTheme,
} from "@adaptui/react-native-tailwind";

export const BadgeScreen = () => {
  const tailwind = useTheme();
  return (
    <Box
      style={tailwind.style("flex-1 justify-center items-center bg-white-900")}
    >
      <Badge style={tailwind.style("my-1")} themeColor="secondary">
        Scheduled
      </Badge>
      <Badge
        style={tailwind.style("my-1")}
        themeColor="primary"
        size="lg"
        variant="outline"
      >
        Assigned
      </Badge>
      <Badge
        style={tailwind.style("my-1")}
        themeColor="primary"
        variant="subtle"
        prefix={<Icon icon={<Clock />} />}
      >
        On Progress
      </Badge>
      <Badge
        style={tailwind.style("my-1")}
        size="md"
        themeColor="secondary"
        variant="outline"
      >
        Confirmed
      </Badge>
      <Badge
        style={tailwind.style("my-1")}
        themeColor="danger"
        prefix={<Icon icon={<Close />} />}
      >
        Cancelled
      </Badge>
      <Badge
        style={tailwind.style("my-1")}
        themeColor="success"
        prefix={<Icon icon={<Check />} />}
      >
        Completed
      </Badge>

      <Badge
        style={tailwind.style("my-1")}
        size="sm"
        themeColor="success"
        variant="outline"
      >
        Done
      </Badge>
    </Box>
  );
};
