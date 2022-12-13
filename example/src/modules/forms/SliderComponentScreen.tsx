import React, { SetStateAction, useState } from "react";
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

import { Group } from "../../components";

export const SliderComponentScreen = () => {
  const tailwind = useTheme();

  const [selectedTheme, setSelectedTheme] = useState<SliderTheme>("base");
  const [selectedSize, setSelectedSize] = useState<SliderSizes>("md");
  const [hasKnobIcon, setHasKnobIcon] = useState<boolean>(false);
  const [isDisabled, setIsDisabled] = useState<boolean>(false);
  const [hasToolTip, setHasTooltip] = useState<boolean>(false);
  const [hasMaxValue, setHasMaxValue] = useState<boolean>(false);
  const [hasStep, setHasStep] = useState<boolean>(false);
  const [hasRange, setHasRange] = useState<boolean>(false);

  return (
    <Box style={tailwind.style("flex-1 justify-center bg-white-900")}>
      <Box
        style={tailwind.style(
          "flex-1 px-6 justify-center items-center bg-white-900",
        )}
      >
        <Slider
          range={!hasRange ? false : true}
          maxValue={!hasMaxValue ? 100 : 1000}
          step={!hasStep ? 1 : 20}
          knobIcon={!hasKnobIcon ? null : <Icon icon={<Equals />} />}
          showTooltip={hasToolTip}
          size={selectedSize}
          themeColor={selectedTheme}
          disabled={isDisabled}
        />
      </Box>
      <Box
        style={tailwind.style(
          "rounded-t-lg shadow-lg bg-gray-100 justify-end p-2",
        )}
      >
        <RadioGroup
          value={selectedSize}
          onChange={(value: SliderSizes) => setSelectedSize(value)}
          orientation="horizontal"
        >
          <Group label="Sizes">
            <Radio value="sm" label="sm" />
            <Radio value="md" label="md" />
            <Radio value="lg" label="lg" />
          </Group>
        </RadioGroup>
        <RadioGroup
          value={selectedTheme}
          onChange={(value: SliderTheme) => setSelectedTheme(value)}
          orientation="horizontal"
        >
          <Group label="Theme" style={tailwind.style("mt-2")}>
            <Radio value="base" label="base" />
            <Radio value="primary" label="primary" />
          </Group>
        </RadioGroup>
        <Box
          style={tailwind.style(
            "flex flex-row justify-start flex-wrap w-full mt-2",
          )}
        >
          <Switch
            state={isDisabled}
            onStateChange={(value: SetStateAction<boolean>) =>
              setIsDisabled(value)
            }
            size="md"
            label="Disabled"
          />
          <Switch
            state={hasRange}
            onStateChange={(value: SetStateAction<boolean>) =>
              setHasRange(value)
            }
            size="md"
            style={tailwind.style("ml-1")}
            label="Range"
          />
          <Switch
            state={hasMaxValue}
            onStateChange={(value: SetStateAction<boolean>) =>
              setHasMaxValue(value)
            }
            size="md"
            style={tailwind.style("ml-1")}
            label="Max Value"
          />
          <Switch
            state={hasStep}
            onStateChange={(value: SetStateAction<boolean>) =>
              setHasStep(value)
            }
            size="md"
            style={tailwind.style("mt-1")}
            label="Step"
          />
          <Switch
            state={hasToolTip}
            onStateChange={(value: SetStateAction<boolean>) =>
              setHasTooltip(value)
            }
            size="md"
            style={tailwind.style("ml-1 mt-1")}
            label="Tooltip"
          />
          <Switch
            state={hasKnobIcon}
            onStateChange={(value: SetStateAction<boolean>) =>
              setHasKnobIcon(value)
            }
            size="md"
            style={tailwind.style("ml-1 mt-1")}
            label="Knob Icon"
          />
        </Box>
      </Box>
    </Box>
  );
};
