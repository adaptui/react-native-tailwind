export const slider = {
  wrapper: 'relative w-full',
  filledTrack: {
    common: 'absolute bg-gray-800 rounded-tl-2xl rounded-bl-2xl',
    size: {
      sm: 'h-[2px]',
      md: 'h-1',
      lg: 'h-2',
      xl: 'h-2.5',
    },
    position: {
      sm: { top: 8 },
      md: { top: 8 },
      lg: { top: 8 },
      xl: { top: 9 },
    },
  },
  track: {
    common: 'absolute w-full bg-gray-200 rounded-2xl',
    size: {
      sm: 'h-[2px]',
      md: 'h-1',
      lg: 'h-2',
      xl: 'h-2.5',
    },
    position: {
      sm: { top: 8 },
      md: { top: 8 },
      lg: { top: 8 },
      xl: { top: 9 },
    },
  },
  knob: {
    common: 'bg-white border-gray-800 shadow-lg rounded-full',
    size: {
      sm: 'h-[18px] w-[18px]',
      md: 'h-5 w-5',
      lg: 'h-6 w-6',
      xl: 'h-7 w-7',
    },
    knobRadius: {
      sm: 9,
      md: 10,
      lg: 12,
      xl: 14,
    },
  },
};
