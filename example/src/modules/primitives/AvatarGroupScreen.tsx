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
      <AvatarGroup size="md">
        <Avatar />
        <Avatar />
        <Avatar />
      </AvatarGroup>
      <AvatarGroup size="xl">
        <Avatar />
        <Avatar />
        <Avatar />
        <Avatar />
      </AvatarGroup>
      <AvatarGroup size="2xl">
        <Avatar name={"Navin Moorthy"} />
        <Avatar name={"Karthik Balasubramanian"} />
        <Avatar name={"Sandeep Prabhakaran"} />
        <Avatar name={"Abhishek MG"} />
        <Avatar name={"Udhaya Chandran"} />
      </AvatarGroup>
      <AvatarGroup size="2xl">
        <Avatar src={{ uri: "https://i.pravatar.cc/300??img=6" }} />
        <Avatar src={{ uri: "https://i.pravatar.cc/300??img=13" }} />
        <Avatar src={{ uri: "https://i.pravatar.cc/300??img=25" }} />
        <Avatar src={{ uri: "https://i.pravatar.cc/300??img=33" }} />
        <Avatar src={{ uri: "https://i.pravatar.cc/300??img=45" }} />
      </AvatarGroup>
      <AvatarGroup size="2xl" squared>
        <Avatar name={"Navin Moorthy"} />
        <Avatar name={"Karthik Balasubramanian"} />
        <Avatar name={"Sandeep Prabhakaran"} />
        <Avatar name={"Abhishek MG"} />
        <Avatar name={"Udhaya Chandran"} />
      </AvatarGroup>
      <AvatarGroup max={2}>
        <Avatar src={{ uri: "https://i.pravatar.cc/300??img=6" }} />
        <Avatar src={{ uri: "https://i.pravatar.cc/300??img=13" }} />
        <Avatar src={{ uri: "https://i.pravatar.cc/300??img=25" }} />
        <Avatar src={{ uri: "https://i.pravatar.cc/300??img=33" }} />
        <Avatar src={{ uri: "https://i.pravatar.cc/300??img=45" }} />
      </AvatarGroup>
      <AvatarGroup max={3} squared>
        <Avatar src={{ uri: "https://i.pravatar.cc/300??img=6" }} />
        <Avatar src={{ uri: "https://i.pravatar.cc/300??img=13" }} />
        <Avatar src={{ uri: "https://i.pravatar.cc/300??img=25" }} />
        <Avatar src={{ uri: "https://i.pravatar.cc/300??img=33" }} />
        <Avatar src={{ uri: "https://i.pravatar.cc/300??img=45" }} />
      </AvatarGroup>
      <AvatarGroup squared>
        <Avatar src={{ uri: "https://i.pravatar.cc/300??img=6" }} />
        <Avatar src={{ uri: "https://i.pravatar.cc/300??img=13" }} />
        <Avatar src={{ uri: "https://i.pravatar.cc/300??img=25" }} />
        <Avatar src={{ uri: "https://i.pravatar.cc/300??img=33" }} />
        <Avatar src={{ uri: "https://i.pravatar.cc/300??img=45" }} />
      </AvatarGroup>
    </Box>
  );
}
