type Status = "safe" | "caution" | "danger" | undefined;
export interface MeterState {
  /**
   * The `value` of the meter indicator.
   *
   * If `undefined`/`not valid` the meter bar will be equal to `min`
   *
   * @default 0
   */
  value: number;
  /**
   * The minimum value of the meter
   * @default 0
   */
  min: number;
  /**
   * The maximum value of the meter
   * @default 1
   */
  max: number;
  /**
   * The higher limit of min range.
   *
   * Defaults to `min`.
   * @default 0
   */
  low: number;
  /**
   * The lower limit of max range.
   *
   * Defaults to `max`.
   * @default 1
   */
  high: number;
  /**
   * The lower limit of max range.
   *
   * Defaults to `median of low & high`.
   * @default 0.5
   */
  optimum: number;
  /**
   * Percentage of the value progressed with respect to min & max
   */
  percent: number;
  /**
   * Status of the Meter based on the optimum value
   */
  status: Status;
}

export type MeterInitialState = Pick<
  Partial<MeterState>,
  "value" | "min" | "max" | "low" | "optimum" | "high"
>;

export type MeterStateReturn = MeterState;

export function getOptimumValue(min: number, max: number): number {
  return max < min ? min : min + (max - min) / 2;
}

export function clamp(value: number, min = -Infinity, max = Infinity): number {
  return Math.min(Math.max(value, min), max);
}

/**
 * Convert a value to percentage based on lower and upper bound values
 *
 * @param value the value in number
 * @param min the minimum value
 * @param max the maximum value
 */
export function valueToPercent(
  value: number,
  min: number,
  max: number,
): number {
  return ((value - min) * 100) / (max - min);
}

export const isInRange = (value: number, min: number, max: number): boolean =>
  value >= min && value <= max;

type CalculateStatusProps = {
  value: number;
  optimum: number;
  min: number;
  max: number;
  low: number;
  high: number;
};

export type StatusType = "safe" | "caution" | "safe" | "danger";

export const calculateStatus = (props: CalculateStatusProps): StatusType => {
  const { value, optimum, min, max, low, high } = props;

  // This check always comes first
  if (isInRange(optimum, low, high)) {
    if (isInRange(value, low, high)) {
      return "safe";
    }
    return "caution";
  }

  if (isInRange(optimum, min, low)) {
    if (isInRange(value, min, low)) {
      return "safe";
    }
    if (value > low && value <= high) {
      return "caution";
    }
    return "danger";
  }

  if (isInRange(optimum, high, max)) {
    if (isInRange(value, high, max)) {
      return "safe";
    }
    if (value < high && value >= low) {
      return "caution";
    }
    return "danger";
  }

  // A safe return
  return "safe";
};

export const useMeterState = (
  props: MeterInitialState = {},
): MeterStateReturn => {
  const { value: defaultValue = 0, min = 0, max = 1, ...sealed } = props;

  const initialLow = sealed.low ?? min;
  const initialHigh = sealed.high ?? max;
  const initialOptimum =
    sealed.optimum ?? getOptimumValue(initialLow, initialHigh);

  const value = clamp(defaultValue, min, max);
  const optimum = clamp(initialOptimum, min, max);
  let low = clamp(initialLow, min, max);
  let high = clamp(initialHigh, min, max);

  // More inequalities handled
  // low ≤ high (if both low and high are specified)
  if (low >= high) {
    low = high;
  }
  if (high <= low) {
    high = low;
  }

  const percent = valueToPercent(value, min, max);
  const status: Status = calculateStatus({
    value,
    min,
    max,
    low,
    optimum,
    high,
  });
  return {
    value,
    min,
    max,
    low,
    optimum,
    high,
    status,
    percent,
  };
};
