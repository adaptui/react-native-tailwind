export const slider = {
  wrapper: "relative w-full",
  filledTrack: {
    common: "w-full absolute bg-gray-800 rounded-2xl",
    size: {
      sm: "h-[2px] mx-[9px]",
      md: "h-1 mx-2.5",
      lg: "h-2 mx-3",
      xl: "h-2.5 mx-[14px]",
    },
  },
  track: {
    common: "relative bg-gray-200 rounded-2xl",
    size: {
      sm: "h-[2px] mx-[9px]",
      md: "h-1 mx-2.5",
      lg: "h-2 mx-3",
      xl: "h-2.5 mx-[14px]",
    },
  },
  knob: {
    common:
      "absolute justify-center items-center bg-white border-gray-800 shadow-md rounded-full",
    disabled: "bg-gray-200",
    position: {
      sm: 18 / 2 - 2 / 2,
      md: 20 / 2 - 4 / 2,
      lg: 24 / 2 - 8 / 2,
      xl: 28 / 2 - 10 / 2,
    },
    size: {
      sm: "h-[18px] w-[18px]",
      md: "h-5 w-5",
      lg: "h-6 w-6",
      xl: "h-7 w-7",
    },
    knobRadius: {
      sm: 9,
      md: 10,
      lg: 12,
      xl: 14,
    },
  },
  tooltip: {
    common: "text-cxs text-white text-center font-normal leading-4",
    position: {
      sm: (18 - 2) / 2,
      md: (20 - 4) / 2,
      lg: (24 - 8) / 2,
      xl: (28 - 10) / 2,
    },
  },
  knobIcon: {
    fill: "text-gray-500",
    activeFill: "text-gray-800",
    disabled: "text-gray-400",
    size: {
      sm: "w-2.5 h-2.5",
      md: "w-2.5 h-2.5",
      lg: "w-3 h-3",
      xl: "w-4 h-4",
    },
  },
};
