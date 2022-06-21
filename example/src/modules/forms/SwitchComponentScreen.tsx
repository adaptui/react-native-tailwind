import React from "react";
import { Box, Switch, useTheme } from "@adaptui/react-native-tailwind";

export const SwitchComponentScreen = () => {
  const tailwind = useTheme();
  return (
    <Box style={tailwind.style("flex-1 justify-center bg-white-900")}>
      <Box style={tailwind.style("my-2 items-center")}>
        <Switch />
      </Box>
      <Box style={tailwind.style("my-2")}>
        <Switch style={tailwind.style("mx-2 justify-between")} label="Wifi" />
      </Box>
      <Box style={tailwind.style("my-2 items-center")}>
        <Switch disabled label="Disabled-Off" />
      </Box>
      <Box style={tailwind.style("my-2 items-center")}>
        <Switch defaultState={true} disabled label="Disabled-On" />
      </Box>
      <Box style={tailwind.style("my-2 mx-4")}>
        <Switch
          label="Isolation"
          description="Utilities for controlling whether an element should explicitly create a new stacking context."
        />
      </Box>
      <Box style={tailwind.style("my-2 items-center")}>
        <Switch themeColor="primary" />
      </Box>
      <Box style={tailwind.style("my-2 items-center")}>
        <Switch themeColor="primary" label="Wifi" />
      </Box>
      <Box style={tailwind.style("my-2 items-center")}>
        <Switch themeColor="primary" disabled label="Disabled-Off" />
      </Box>
      <Box style={tailwind.style("my-2 items-center")}>
        <Switch
          themeColor="primary"
          defaultState={true}
          disabled
          label="Disabled-On"
        />
      </Box>
      <Box style={tailwind.style("my-2 mx-4")}>
        <Switch
          themeColor="primary"
          label="Isolation"
          description="Utilities for controlling whether an element should explicitly create a new stacking context."
        />
      </Box>
    </Box>
  );
};
