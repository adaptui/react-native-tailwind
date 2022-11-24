import React, { useState } from "react";
import {
  Box,
  Radio,
  RadioGroup,
  RadioSizes,
  RadioTheme,
  Switch,
  useTheme,
} from "@adaptui/react-native-tailwind";

export const RadioScreen = () => {
  const tailwind = useTheme();
  const [selectedTheme, setSelectedTheme] = useState<RadioTheme>("base");
  const [selectedSize, setSelectedSize] = useState<RadioSizes>("md");
  const [hasDescription, setHasDescription] = useState<boolean>(false);
  const [isDisabled, setIsDisabled] = useState<boolean>(false);
  const [isInvalid, setIsInvalid] = useState<boolean>(false);
  const [hasLabel, setHasLabel] = useState<boolean>(true);

  return (
    <Box style={tailwind.style("flex-1 justify-center bg-white-900")}>
      <Box
        style={tailwind.style(
          "flex-1 px-2 justify-center items-center bg-white-900",
        )}
      >
        <RadioGroup
          themeColor={selectedTheme as RadioTheme}
          size={selectedSize as RadioSizes}
        >
          <Radio
            isDisabled={isDisabled}
            value="strawberry"
            label={!hasLabel ? null : "Strawberry"}
            description={
              !hasDescription
                ? null
                : "Strawberry is a member of the Rosaceae family and one of the most popularly consumed berries in the world. It is commercially cultivated worldwide for its highly appreciated sweet, aromatic, and juicy fruit."
            }
          />
          <Radio
            value="cherry"
            label={!hasLabel ? null : "Cherry"}
            isDisabled={isDisabled}
            description={
              !hasDescription
                ? null
                : "A cherry is the fruit of many plants of the genus Prunus, and is a fleshy drupe."
            }
          />
          <Radio
            value="apple"
            label={!hasLabel ? null : "Apple"}
            isInvalid={isInvalid}
            description={
              !hasDescription
                ? null
                : "An apple is an edible fruit produced by an apple tree. Apple trees are cultivated worldwide and are the most widely grown species in the genus Malus."
            }
          />
          <Radio
            value="banana"
            label={!hasLabel ? null : "Banana"}
            description={
              !hasDescription
                ? null
                : "A banana is an elongated, edible fruit, botanically a berry, produced by several kinds of large herbaceous flowering plants in the genus Musa"
            }
          />
        </RadioGroup>
      </Box>
      <Box
        style={tailwind.style(
          "w-full py-2 rounded-t-lg shadow-lg bg-gray-100 justify-end items-center",
        )}
      >
        <RadioGroup
          value={selectedSize}
          onChange={value => setSelectedSize(value as RadioSizes)}
          orientation="horizontal"
        >
          <Radio value="sm" label="sm" />
          <Radio value="md" label="md" />
          <Radio value="lg" label="lg" />
        </RadioGroup>
        <RadioGroup
          value={selectedTheme}
          onChange={value => setSelectedTheme(value as RadioTheme)}
          orientation="horizontal"
        >
          <Box
            style={tailwind.style(
              "flex flex-row flex-wrap justify-center items-center mt-1",
            )}
          >
            <Radio value="base" label="base" />
            <Radio value="primary" label="primary" />
            <Radio value="danger" label="danger" />
          </Box>
        </RadioGroup>
        <Box
          style={tailwind.style(
            "flex flex-row justify-center flex-wrap w-full",
          )}
        >
          <Switch
            state={isDisabled}
            onStateChange={value => setIsDisabled(value)}
            size="md"
            style={tailwind.style("ml-1 mt-1")}
            label="Disabled"
          />
          <Switch
            state={isInvalid}
            onStateChange={value => setIsInvalid(value)}
            size="md"
            style={tailwind.style("ml-1 mt-1")}
            label="Invalid"
          />
          <Switch
            state={hasLabel}
            onStateChange={value => setHasLabel(value)}
            size="md"
            style={tailwind.style("ml-1 mt-1")}
            label="Label"
          />
          <Switch
            state={hasDescription}
            onStateChange={value => setHasDescription(value)}
            size="md"
            style={tailwind.style("ml-1 mt-1")}
            label="Description"
          />
        </Box>
      </Box>
    </Box>
  );
};
