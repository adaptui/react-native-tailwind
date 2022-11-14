import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import { Box, TextArea, useTheme } from "@adaptui/react-native-tailwind";

export const TextAreaScreen = () => {
  const tailwind = useTheme();
  return (
    <Box style={tailwind.style("flex-1 justify-center bg-white-900")}>
      <ScrollView>
        <Box style={tailwind.style("p-2")}>
          <TextArea
            placeholder={"Type Something...."}
            size="sm"
            variant="outline"
          />
        </Box>
        <Box style={tailwind.style("p-2")}>
          <TextArea
            placeholder={"Type Something...."}
            size="md"
            variant="outline"
          />
        </Box>
        <Box style={tailwind.style("p-2")}>
          <TextArea
            placeholder={"Type Something...."}
            size="lg"
            variant="outline"
          />
        </Box>
        <Box style={tailwind.style("p-2")}>
          <TextArea
            placeholder={"Type Something...."}
            size="xl"
            variant="outline"
          />
        </Box>
        <Box style={tailwind.style("p-2")}>
          <TextArea
            placeholder={"Type Something...."}
            size="xl"
            variant="outline"
            loading
          />
        </Box>
        <Box style={tailwind.style("p-2")}>
          <TextArea
            placeholder={"Type Something...."}
            size="xl"
            variant="outline"
            invalid
          />
        </Box>
      </ScrollView>
    </Box>
  );
};
