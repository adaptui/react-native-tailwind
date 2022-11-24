import React, { useState } from "react";
import {
  Box,
  Equals,
  Icon,
  Radio,
  RadioGroup,
  Slider,
  SliderSizes,
  SliderTheme,
  Switch,
  useTheme,
} from "@adaptui/react-native-tailwind";

export const SliderComponentScreen = () => {
  const tailwind = useTheme();

  const [selectedTheme, setSelectedTheme] = useState<SliderTheme>("base");
  const [selectedSize, setSelectedSize] = useState<SliderSizes>("md");
  const [hasKnobIcon, setHasKnobIcon] = useState<boolean>(false);
  const [isDisabled, setIsDisabled] = useState<boolean>(false);
  const [hasToolTip, setHasTooltip] = useState<boolean>(false);
  const [hasMaxValue, setHasMaxValue] = useState<boolean>(true);
  const [hasStep, setHasStep] = useState<boolean>(false);
  const [hasRange, setHasRange] = useState<boolean>(false);

  return (
    <Box style={tailwind.style("flex-1 justify-center bg-white-900")}>
      <Box
        style={tailwind.style(
          "flex-1 px-2 justify-center items-center bg-white-900",
        )}
      >
        <Slider
          range={!hasRange ? null : true}
          maxValue={!hasMaxValue ? null : 1000}
          step={!hasStep ? null : 20}
          knobIcon={!hasKnobIcon ? null : <Icon icon={<Equals />} />}
          showTooltip={hasToolTip}
          size={selectedSize}
          themeColor={selectedTheme}
          disabled={isDisabled}
        />
      </Box>

      <Box
        style={tailwind.style(
          "w-full py-2 rounded-t-lg shadow-lg bg-gray-100 justify-end items-center",
        )}
      >
        <RadioGroup
          value={selectedSize}
          onChange={value => setSelectedSize(value as SliderSizes)}
          orientation="horizontal"
        >
          <Radio value="sm" label="sm" />
          <Radio value="md" label="md" />
          <Radio value="lg" label="lg" />
        </RadioGroup>
        <RadioGroup
          value={selectedTheme}
          onChange={value => setSelectedTheme(value as SliderTheme)}
          orientation="horizontal"
        >
          <Box
            style={tailwind.style(
              "flex flex-row flex-wrap justify-center items-center mt-1",
            )}
          >
            <Radio value="base" label="base" />
            <Radio value="primary" label="primary" />
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
            state={hasRange}
            onStateChange={value => setHasRange(value)}
            size="md"
            style={tailwind.style("ml-1 mt-1")}
            label="Range"
          />
          <Switch
            state={hasMaxValue}
            onStateChange={value => setHasMaxValue(value)}
            size="md"
            style={tailwind.style("ml-1 mt-1")}
            label="Max Value"
          />
          <Switch
            state={hasStep}
            onStateChange={value => setHasStep(value)}
            size="md"
            style={tailwind.style("ml-1 mt-1")}
            label="Step"
          />
          <Switch
            state={hasToolTip}
            onStateChange={value => setHasTooltip(value)}
            size="md"
            style={tailwind.style("ml-1 mt-1")}
            label="Tooltip"
          />
          <Switch
            state={hasKnobIcon}
            onStateChange={value => setHasKnobIcon(value)}
            size="md"
            style={tailwind.style("ml-1 mt-1")}
            label="Knob Icon"
          />
        </Box>
      </Box>
    </Box>
  );
};
