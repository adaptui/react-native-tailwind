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
      sm: { top: 8, zIndex: -1 },
      md: { top: 8, zIndex: -1 },
      lg: { top: 8, zIndex: -1 },
      xl: { top: 9, zIndex: -1 },
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
      sm: { top: 8, zIndex: -1 },
      md: { top: 8, zIndex: -1 },
      lg: { top: 8, zIndex: -1 },
      xl: { top: 9, zIndex: -1 },
    },
  },
  knob: {
    common:
      'absolute justify-center items-center bg-white border-gray-800 shadow-md rounded-full',
    disabled: 'bg-gray-200',
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
  tooltip: {
    common: 'text-cxs text-white text-center font-normal leading-4',
  },
  knobIcon: {
    fill: 'text-gray-500',
    activeFill: 'text-gray-800',
    disabled: 'text-gray-400',
    size: {
      sm: 'w-2.5 h-2.5',
      md: 'w-2.5 h-2.5',
      lg: 'w-3 h-3',
      xl: 'w-4 h-4',
    },
  },
};
