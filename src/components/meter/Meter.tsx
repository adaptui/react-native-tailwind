import React, { forwardRef, useState } from "react";
import { LayoutChangeEvent } from "react-native";

import { Box, Text } from "../../primitives";
import { getTextFontFamily, useTailwind, useTheme } from "../../theme";
import { createComponent } from "../../utils";

import { MeterBar } from "./MeterBar";
import { useMeterState, valueToPercent } from "./MeterState";

export type MeterSizes = "sm" | "md" | "lg" | "xl";
export type MeterTheme = "base" | "primary" | "success";

export interface MeterProps {
  /**
   * Meter Sizes
   * @default md
   */
  size: MeterSizes;
  /**
   * Meter Theme
   * @default 'base'
   */
  themeColor: MeterTheme;
  /**
   * A floating point number that represents the current value of the measured range.
   * This must be between the min and the max value
   * @default 0
   */
  value: number;
  /**
   * Indicates the lower bound of the measured range.
   * This must be less than the max value (if specified).
   * @default 0
   */
  min: number;
  /**
   * Indicates the upper bound of the measured range.
   * This must be greater than the min value
   * @default 1
   */
  max: number;
  /**
   * It represents the upper bound of the low end of the measured range.
   * This must be greater than the min attribute, but less than the high and max value
   */
  low: number;
  /**
   * It represents the lower bound of the high end of the measured range.
   * This must be less than the max attribute, but greater than the low and min value
   */
  high: number;
  /**
   * This attribute indicates the optimum value and must be within the range of min and max values
   */
  optimum: number;
  /**
   * This attribute indicates the no of intervals the meter component has
   * @default 0
   */
  intervals: number;
  /**
   * If true, meter bar intervals will have flat broders
   */
  flatBorders: boolean;
  /**
   * Label for the Meter
   */
  label: string | null;
  /**
   * Hint for the Meter
   */
  hint: string | null;
}

const RNMeter: React.FC<Partial<MeterProps>> = forwardRef<
  typeof Box,
  Partial<MeterProps>
>((props, ref) => {
  const { ts } = useTailwind();
  const meterTheme = useTheme("meter");
  const [meterWidth, setMeterWidth] = useState<number>(0);
  const {
    size = "md",
    intervals = 1,
    themeColor = "base",
    label,
    hint,
    flatBorders,
  } = props;
  const { value, max } = useMeterState(props);

  const spaceBetweenSegmentsInPixel = 4;
  const intervalSpacing = (intervals - 1) * spaceBetweenSegmentsInPixel;
  const segmentWidth = (meterWidth - intervalSpacing) / intervals;
  const maxMultiplier = max / intervals;
  const intervalValue = value / maxMultiplier;

  return (
    <Box
      onLayout={(event: LayoutChangeEvent) =>
        setMeterWidth(event.nativeEvent.layout.width)
      }
      style={ts([meterTheme.wrapper])}
      ref={ref}
    >
      {(label || hint) && (
        <Box style={ts("flex-row")}>
          {label && (
            <Text
              style={[
                ts([
                  meterTheme.label.common,
                  meterTheme.size[size]?.label,
                  hint ? meterTheme.label.hasHint : "",
                ]),
                getTextFontFamily(meterTheme.label.common),
              ]}
            >
              {label}
            </Text>
          )}
          {label && hint && (
            <Text
              style={[
                ts([meterTheme.hint.common, meterTheme.size[size]?.hint]),
                getTextFontFamily(meterTheme.hint.common),
              ]}
            >
              {hint}
            </Text>
          )}
        </Box>
      )}
      <Box style={ts(meterTheme.barWrapper)}>
        {intervals >= 1
          ? Array(intervals)
              .fill(0)
              .map((_, i) => {
                const interval = i + 1;
                const percentValue = valueToPercent(intervalValue, i, interval);
                return (
                  <Box
                    key={`interval-${interval}`}
                    style={[
                      ts([
                        meterTheme.themeColor[themeColor]?.track.common,
                        meterTheme.size[size]?.track,
                        `w-[${segmentWidth}px]`,
                      ]),
                      flatBorders
                        ? i === 0
                          ? meterTheme.flatBorders.flatRightBorders
                          : i === intervals - 1
                          ? meterTheme.flatBorders.flatLeftBorders
                          : i !== 0 && i !== intervals - 1
                          ? ts(meterTheme.borderNone)
                          : {}
                        : {},
                    ]}
                  >
                    {intervalValue >= i ? (
                      <MeterBar
                        themeColor={themeColor}
                        percent={percentValue}
                        barStyle={[
                          flatBorders
                            ? i === 0
                              ? meterTheme.flatBorders.flatRightBorders
                              : i === intervals - 1
                              ? meterTheme.flatBorders.flatLeftBorders
                              : i !== 0 && i !== intervals - 1
                              ? ts(meterTheme.borderNone)
                              : {}
                            : {},
                        ]}
                      />
                    ) : null}
                  </Box>
                );
              })
          : null}
      </Box>
    </Box>
  );
});

RNMeter.displayName = "RNMeter";

export const Meter = createComponent<Partial<MeterProps>>(RNMeter, {
  shouldMemo: true,
});
