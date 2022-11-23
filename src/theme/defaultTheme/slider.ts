export const slider = {
  wrapper: "relative w-full",
  knobWrapper: "relative",
  iconWrapper: "justify-center items-center",
  filledTrack: "w-full absolute rounded-2xl",
  track: "relative rounded-2xl",
  size: {
    sm: {
      filledTrack: "h-0.5 mx-[9px]",
      track: "h-0.5 mx-[9px]",
      knob: {
        position: 18 / 2 - 2 / 2,
        size: "h-[18px] w-[18px]",
        knobRadius: 9,
      },
      tooltip: {
        position: 6,
      },
      knobIcon: {
        default: "w-2.5 h-2.5",
      },
    },
    md: {
      filledTrack: "h-1 mx-2.5",
      track: "h-1 mx-2.5",
      knob: {
        position: 20 / 2 - 4 / 2,
        size: "h-5 w-5",
        knobRadius: 10,
      },
      tooltip: {
        position: 8,
      },
      knobIcon: {
        default: "w-2.5 h-2.5",
      },
    },
    lg: {
      filledTrack: "h-2 mx-3",
      track: "h-2 mx-3",
      knob: {
        position: 24 / 2 - 8 / 2,
        size: "h-6 w-6",
        knobRadius: 12,
      },
      tooltip: {
        position: 8,
      },
      knobIcon: {
        default: "w-3 h-3",
      },
    },
    xl: {
      filledTrack: "h-2.5 mx-[14px]",
      track: "h-2.5 mx-[14px]",
      knob: {
        position: 28 / 2 - 10 / 2,
        size: "h-7 w-7",
        knobRadius: 14,
      },
      tooltip: {
        position: 8,
      },
      knobIcon: {
        default: "w-4 h-4",
      },
    },
  },
  themeColor: {
    base: {
      filledTrack: "bg-gray-900",
      track: "bg-gray-100",
      knob: "border-gray-900",
    },
    primary: {
      filledTrack: "bg-blue-600",
      track: "bg-blue-100",
      knob: "border-blue-600",
    },
  },

  knob: {
    common:
      "absolute justify-center items-center bg-white-900 shadow-md rounded-full",
    disabled: "bg-gray-300",
  },
  tooltip: {
    default: "absolute",
    wrapper:
      "px-2 py-1.5 min-w-8 justify-center items-center bg-gray-900 rounded-lg",
    arrowWrapper: "w-3 h-3 z-10",
    common: "text-cxs text-white-900 text-center font-normal leading-4",
  },
  knobIcon: {
    fill: "text-gray-600",
    activeFill: "text-gray-800",
    disabled: "text-gray-600",
  },
};
