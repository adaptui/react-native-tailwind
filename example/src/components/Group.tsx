import React, { PropsWithChildren } from "react";
import { View, ViewProps } from "react-native";
import {
  Box,
  styleAdapter,
  Text,
  useTheme,
} from "@adaptui/react-native-tailwind";

export interface GroupType extends ViewProps {
  label: string;
}

export const Group = (props: PropsWithChildren<GroupType>) => {
  const { children, label, style, ...other } = props;
  const tailwind = useTheme();
  return (
    <View
      style={[
        tailwind.style("bg-white-800 rounded-xl p-2 flex-col w-full"),
        styleAdapter(style),
      ]}
      {...other}
    >
      <Text style={tailwind.style("ml-3 font-bold")}>{label}</Text>
      <Box
        style={tailwind.style(
          "flex flex-row flex-wrap justify-start items-center mt-2 ml-0",
        )}
      >
        {children}
      </Box>
    </View>
  );
};
