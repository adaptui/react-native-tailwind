import React, { useState } from "react";
import {
  Avatar,
  AvatarStatusType,
  Box,
  Radio,
  RadioGroup,
  Switch,
  useTheme,
} from "@adaptui/react-native-tailwind";

export const AvatarScreen = () => {
  const tailwind = useTheme();

  const [status, setStatus] = useState(null);
  const [squared, setSquared] = useState(null);

  return (
    <Box style={tailwind.style("flex-1 justify-center bg-white-900")}>
      <Box style={tailwind.style("flex-1 px-2 justify-center items-center")}>
        <Avatar
          status={status}
          squared={squared}
          style={tailwind.style("my-1")}
        />
        <Avatar
          status={status}
          squared={squared}
          style={tailwind.style("my-1")}
          name="Sandeep Prabhakaran"
        />

        <Avatar
          status={status}
          squared={squared}
          src={{ uri: "https://i.pravatar.cc/300??img=9" }}
        />
      </Box>
      <Box
        style={tailwind.style(
          "py-2 rounded-t-lg shadow-lg bg-gray-100 justify-end items-center",
        )}
      >
        <Box
          style={tailwind.style(
            "flex flex-row justify-center flex-wrap w-full",
          )}
        >
          <Switch
            label="squared"
            state={squared}
            onStateChange={setSquared}
            size="md"
            style={tailwind.style("mb-1")}
          />
        </Box>
        <RadioGroup
          value={status}
          onChange={value => setStatus(value as AvatarStatusType)}
          orientation="horizontal"
        >
          <Radio value={null} label="default" />
          <Radio value="active" label="active" />
          <Radio value="away" label="away" />
          <Radio value="sleep" label="sleep" />
        </RadioGroup>
      </Box>
    </Box>
  );
};
