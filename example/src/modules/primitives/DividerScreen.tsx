import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import { Box, Divider, Tag, useTheme } from "@adaptui/react-native-tailwind";

export const DividerScreen = () => {
  const tailwind = useTheme();
  return (
    <ScrollView>
      <Box style={tailwind.style("flex-1 ")}>
        <Box style={tailwind.style("h-15 px-2  justify-center")}>
          <Divider
            orientation="horizontal"
            labelPosition="start"
            label="Continue"
          />
        </Box>
        <Box style={tailwind.style("h-15 px-2  justify-center")}>
          <Divider
            orientation="horizontal"
            labelPosition="center"
            label="Continue"
          />
        </Box>
        <Box style={tailwind.style("h-15 px-2  justify-center")}>
          <Divider
            orientation="horizontal"
            labelPosition="end"
            label="Continue"
          />
        </Box>
        <Box style={tailwind.style("h-15 px-2 justify-center")}>
          <Divider
            orientation="horizontal"
            labelPosition="center"
            slot={
              <Tag
                style={tailwind.style("rounded-full")}
                variant="subtle"
                themeColor="primary"
              >
                New Messages
              </Tag>
            }
            dividerStyle={tailwind.style(" border-blue-300")}
          />
        </Box>
        <Box style={tailwind.style("h-50 py-4  justify-center")}>
          <Divider
            orientation="vertical"
            labelPosition="start"
            label="Continue"
          />
        </Box>
        <Box style={tailwind.style("h-50 py-4 w-full justify-center")}>
          <Divider
            orientation="vertical"
            labelPosition="center"
            label="Continue"
          />
        </Box>
        <Box style={tailwind.style("h-50 py-4 justify-center")}>
          <Divider
            orientation="vertical"
            labelPosition="end"
            label="Continue"
          />
        </Box>
      </Box>
    </ScrollView>
  );
};
