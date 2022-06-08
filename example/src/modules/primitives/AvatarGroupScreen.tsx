import React from "react";
import {
  Avatar,
  AvatarGroup,
  Box,
  useTheme,
} from "@adaptui/react-native-tailwind";

export default function AvatarGroupScreen() {
  const tailwind = useTheme();
  return (
    <Box
      style={tailwind.style("flex-1 justify-center items-center bg-white-900")}
    >
      <AvatarGroup>
        <Avatar src={{ uri: "https://i.pravatar.cc/300??img=1" }} />
        <Avatar src={{ uri: "https://i.pravatar.cc/300??img=2" }} />
        <Avatar src={{ uri: "https://i.pravatar.cc/300??img=3" }} />
        <Avatar src={{ uri: "https://i.pravatar.cc/300??img=4" }} />
        <Avatar src={{ uri: "https://i.pravatar.cc/300??img=5" }} />
        <Avatar src={{ uri: "https://i.pravatar.cc/300??img=6" }} />
        <Avatar src={{ uri: "https://i.pravatar.cc/300??img=7" }} />
      </AvatarGroup>
    </Box>
  );
}
