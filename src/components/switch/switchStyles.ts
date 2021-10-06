export const defaultSwitchContainerStyle = {
  sm: 'w-6 h-[14px] rounded-full py-[1.5px]',
  md: 'w-[26px] h-4 rounded-full py-[1.5px]',
  lg: 'w-8 h-5 rounded-full py-[1.5px]',
  xl: 'w-[48px] h-7 rounded-full py-[2px]',
};

export const defaultKnobStyle = {
  sm: 'h-[11px] rounded-full',
  md: 'h-[13px] rounded-full',
  lg: 'h-[17px] rounded-full',
  xl: 'w-6 h-6 rounded-full',
};

export const switchInterpolateWidths = {
  sm: [11, 14, 14, 11],
  md: [13, 15, 15, 13],
  lg: [17, 20, 20, 17],
  xl: [24, 27, 27, 24],
};

export const thumbIntermediateTranslateValue = {
  sm: 3,
  md: 2,
  lg: 3,
  xl: 3,
};

export const thumbTranslateValue = {
  sm: 24 - 11 - 1.5,
  md: 26 - 13 - 1.5,
  lg: 32 - 17 - 1.5,
  xl: 48 - 24 - 2,
};

export const thumbInitTranslateValue = {
  sm: 1.5,
  md: 1.5,
  lg: 1.5,
  xl: 2,
};
