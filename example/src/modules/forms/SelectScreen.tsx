import React, { SetStateAction, useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  Box,
  CaretDown,
  Icon,
  ItemData,
  Radio,
  RadioGroup,
  Select,
  SelectSizes,
  SelectVariants,
  Slot,
  Switch,
  UpDownArrow,
  useTheme,
} from "@adaptui/react-native-tailwind";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";

import { Group } from "../../components";

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
  const [selectedSize, setSelectedSize] = useState<SelectSizes>("md");
  const [selectedVariant, setSelectedVariant] =
    useState<SelectVariants>("outline");

  const [isSelectInvalid, setIsSelectInvalid] = useState<boolean>(false);
  const [isSelectDisabled, setIsSelectDisabled] = useState<boolean>(false);
  const [hasPrefix, setHasPrefix] = useState<boolean>(false);
  const { bottom } = useSafeAreaInsets();

  const [changeSuffix, setChangeSuffix] = useState(false);

  return (
    <Box style={tailwind.style("flex-1 justify-center bg-white-900")}>
      <BottomSheetModalProvider>
        <Box style={tailwind.style("flex-1 px-2 items-center justify-center")}>
          <Select
            size={selectedSize}
            variant={selectedVariant}
            invalid={isSelectInvalid}
            disabled={isSelectDisabled}
            options={options}
            placeholder="Select fruit"
            prefix={hasPrefix ? <Icon icon={<Slot />} /> : null}
            suffix={
              <Icon icon={changeSuffix ? <CaretDown /> : <UpDownArrow />} />
            }
          />
        </Box>
        <Box
          style={tailwind.style(
            `rounded-t-lg shadow-lg bg-gray-100 justify-end px-2 pt-2 pb-[${
              bottom === 0 ? 16 : bottom
            }px]`,
          )}
        >
          <Group label="Sizes">
            <RadioGroup
              value={selectedSize}
              onChange={(value: string) =>
                setSelectedSize(value as SelectSizes)
              }
              orientation="horizontal"
            >
              <Radio value="sm" label="sm" />
              <Radio value="md" label="md" />
              <Radio value="lg" label="lg" />
              <Radio value="xl" label="xl" />
            </RadioGroup>
          </Group>
          <Group label="Variant" style={tailwind.style("mt-2")}>
            <RadioGroup
              value={selectedVariant}
              onChange={(value: string) =>
                setSelectedVariant(value as SelectVariants)
              }
              orientation="horizontal"
            >
              <Radio value="outline" label="outline" />
              <Radio value="subtle" label="subtle" />
              <Radio value="underline" label="underline" />
              <Radio value="ghost" label="ghost" />
            </RadioGroup>
          </Group>
          <Box
            style={tailwind.style(
              "flex flex-row justify-start flex-wrap w-full",
            )}
          >
            <Switch
              state={isSelectInvalid}
              onStateChange={(value: SetStateAction<boolean>) =>
                setIsSelectInvalid(value)
              }
              size="md"
              label="Invalid"
              style={tailwind.style("mt-2 ml-1")}
            />
            <Switch
              state={isSelectDisabled}
              onStateChange={(value: SetStateAction<boolean>) =>
                setIsSelectDisabled(value)
              }
              size="md"
              style={tailwind.style("mt-2 ml-1")}
              label="Disabled"
            />
            <Switch
              state={hasPrefix}
              onStateChange={(value: SetStateAction<boolean>) =>
                setHasPrefix(value)
              }
              size="md"
              style={tailwind.style("mt-2 ml-1")}
              label="Prefix"
            />
            <Switch
              state={changeSuffix}
              onStateChange={(value: SetStateAction<boolean>) =>
                setChangeSuffix(value)
              }
              size="md"
              style={tailwind.style("mt-2 ml-1")}
              label="Change suffix"
            />
          </Box>
        </Box>
      </BottomSheetModalProvider>
    </Box>
  );
};
