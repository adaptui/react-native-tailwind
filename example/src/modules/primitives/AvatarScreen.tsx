import React from "react";
import { Avatar, Box, useTheme } from "@adaptui/react-native-tailwind";

export const AvatarScreen = () => {
  const tailwind = useTheme();
  return (
    <Box
      style={tailwind.style("flex-1 justify-center items-center bg-white-900")}
    >
      <Avatar style={tailwind.style("my-1")} />
      <Avatar style={tailwind.style("my-1")} squared />
      <Avatar
        style={tailwind.style("my-1")}
        src={{ uri: "https://i.pravatar.cc/300??img=9" }}
      />
      <Avatar name="Sandeep Prabhakaran" style={tailwind.style("my-1")} />
      <Avatar
        style={tailwind.style("my-1")}
        src={{ uri: "https://i.pravatar.cc/300??img=9" }}
        status="active"
      />
      <Avatar
        style={tailwind.style("my-1")}
        src={{ uri: "https://i.pravatar.cc/300??img=9" }}
        status="away"
      />
      <Avatar
        style={tailwind.style("my-1")}
        src={{ uri: "https://i.pravatar.cc/300??img=9" }}
        status="sleep"
      />
    </Box>
  );
};
