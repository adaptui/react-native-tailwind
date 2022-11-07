import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import {
  Box,
  Icon,
  Slot,
  TextArea,
  useTheme,
} from "@adaptui/react-native-tailwind";

export const TextAreaScreen = () => {
  const tailwind = useTheme();
  return (
    <Box style={tailwind.style("flex-1 justify-center bg-white-900")}>
      <ScrollView>
        <Box style={tailwind.style("p-2")}>
          <TextArea
            placeholder={"Type Something...."}
            size="sm"
            variant="ghost"
          />
        </Box>
        <Box style={tailwind.style("p-2")}>
          <TextArea
            placeholder={"Type Something...."}
            size="lg"
            variant="outline"
            suffix={<Icon icon={<Slot />} />}
            invalid
          />
        </Box>
        <Box style={tailwind.style("p-2")}>
          <TextArea
            placeholder={"Type Something...."}
            size="sm"
            variant="outline"
            loading={true}
          />
        </Box>
        <Box style={tailwind.style("p-2")}>
          <TextArea
            placeholder={"Type Something...."}
            size="sm"
            variant="subtle"
            loading={true}
          />
        </Box>
        <Box style={tailwind.style("p-2")}>
          <TextArea
            placeholder={"Type Something...."}
            size="sm"
            variant="underline"
            loading={true}
          />
        </Box>
        <Box style={tailwind.style("p-2")}>
          <TextArea
            placeholder={"Type Something...."}
            size="sm"
            invalid
            loading={true}
          />
        </Box>
        <Box style={tailwind.style("p-2")}>
          <TextArea
            placeholder={"Type Something...."}
            size="sm"
            variant="underline"
            invalid
            loading={true}
          />
        </Box>
        <Box style={tailwind.style("p-2")}>
          <TextArea
            placeholder={"Type Something...."}
            size="sm"
            variant="subtle"
            invalid
            loading={true}
          />
        </Box>
        <Box style={tailwind.style("p-2")}>
          <TextArea
            placeholder={"Type Something...."}
            size="sm"
            editable={false}
          />
        </Box>
      </ScrollView>
    </Box>
  );
};
