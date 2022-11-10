import React from "react";
import {
  Box,
  ItemData,
  Select,
  useTheme,
} from "@adaptui/react-native-tailwind";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";

const options: ItemData[] = [
  {
    value: "apple",
    label: "Apple",
  },
  {
    value: "orange",
    label: "Orange",
  },
  {
    value: "watermelon",
    label: "Watermelon",
  },
  {
    value: "grapes",
    label: "Grapes",
  },
  {
    value: "banana",
    label: "Banana",
  },
  {
    value: "blueberry",
    label: "Blueberry",
  },
  {
    value: "sapota",
    label: "Sapota",
  },
  {
    value: "papaya",
    label: "Papaya",
  },
  {
    value: "avocado",
    label: "Avocado",
  },
  {
    value: "strawberry",
    label: "Strawberry",
  },
  {
    value: "cherry",
    label: "Cherry",
  },
  {
    value: "fig",
    label: "Fig",
  },
  {
    value: "guava",
    label: "Guava",
  },
  {
    value: "mango",
    label: "Mango",
  },
];

export const SelectScreen = () => {
  const tailwind = useTheme();

  return (
    <Box style={tailwind.style("flex-1 px-2 justify-center bg-white-900")}>
      <BottomSheetModalProvider>
        <Select
          style={tailwind.style("my-1")}
          size="sm"
          options={options}
          placeholder="Select fruit"
        />
        <Select
          style={tailwind.style("my-1")}
          size="md"
          options={options}
          placeholder="Select fruit"
        />
        <Select
          style={tailwind.style("my-1")}
          size="lg"
          options={options}
          placeholder="Select fruit"
        />
        <Select
          style={tailwind.style("my-1")}
          size="xl"
          options={options}
          placeholder="Select fruit"
        />
      </BottomSheetModalProvider>
    </Box>
  );
};
