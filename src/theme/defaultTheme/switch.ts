export const switchTheme = {
  size: {
    sm: {
      switchContainerStyle: "relative w-[22px] h-[14px] rounded-full",
      thumbStyle:
        "absolute top-[2px] left-[2px] h-2.5 bg-white-900 rounded-full shadow-sm",
      switchInterpolateWidths: [10, 12, 12, 10],
      thumbIntermediateTranslateValue: 2,
      thumbTranslateValue: 22 - 10 - 4,
      thumbInitTranslateValue: 0,
      label: {
        base: "relative flex flex-row items-center min-h-[26px] px-2 bg-white-900 rounded-lg",
        text: "text-cxs font-medium pr-2",
        pressed: "bg-gray-300",
      },
      labelWithDescription: {
        base: "flex flex-row items-start justify-between max-w-full bg-white-900",
        labelDescriptionWrapper: "shrink grow-0 pr-[6px]",
        descriptionText: "text-cxs text-gray-600",
      },
    },
    md: {
      switchContainerStyle: "relative w-[26px] h-4 rounded-full",
      thumbStyle:
        "absolute top-[2px] left-[2px] h-3 bg-white-900 rounded-full shadow-sm",
      switchInterpolateWidths: [12, 14, 14, 12],
      thumbIntermediateTranslateValue: 2,
      thumbTranslateValue: 26 - 12 - 4,
      thumbInitTranslateValue: 0,
      label: {
        base: "relative flex flex-row items-center min-h-[30px] px-2.5 bg-white-900 rounded-lg",
        text: "text-sm font-medium pr-2",
        pressed: "bg-gray-300",
      },
      labelWithDescription: {
        base: "flex flex-row items-start justify-between max-w-full bg-white-900",
        labelDescriptionWrapper: "shrink grow-0 pr-2",
        descriptionText: "text-sm text-gray-600",
      },
    },
    lg: {
      switchContainerStyle: "relative w-8 h-5 rounded-full ",
      thumbStyle:
        "absolute top-[2px] left-[2px] h-4 bg-white-900 rounded-full shadow-sm",
      switchInterpolateWidths: [16, 18, 18, 16],
      thumbIntermediateTranslateValue: 2,
      thumbTranslateValue: 32 - 16 - 4,
      thumbInitTranslateValue: 0,
      label: {
        base: "relative flex flex-row items-center min-h-9 px-3 bg-white-900 rounded-lg",
        text: "text-base font-medium pr-2",
        pressed: "bg-gray-300",
      },
      labelWithDescription: {
        base: "flex flex-row items-start justify-between max-w-full bg-white-900",
        labelDescriptionWrapper: "shrink grow-0 pr-2",
        descriptionText: "text-sm text-gray-600",
      },
    },
    xl: {
      switchContainerStyle: "relative w-[48px] h-7 rounded-full py-0.5",
      thumbStyle:
        "absolute top-[2px] left-[2px] h-6 bg-white-900 rounded-full shadow-sm",
      switchInterpolateWidths: [24, 26, 26, 24],
      thumbIntermediateTranslateValue: 2,
      thumbTranslateValue: 48 - 24 - 4,
      thumbInitTranslateValue: 0,
      label: {
        base: "relative flex flex-row items-center min-h-11 px-3 bg-white-900 rounded-xl",
        text: "text-base font-medium pr-2",
        pressed: "bg-gray-300",
      },
      labelWithDescription: {
        base: "flex flex-row items-start justify-between max-w-full bg-white-900",
        labelDescriptionWrapper: "shrink grow-0 pr-5",
        descriptionText: "text-sm text-gray-600",
      },
    },
  },
  themeColor: {
    base: {
      inActiveWrapper: {
        default: "bg-gray-400",
        active: "bg-gray-600",
        disabled: "bg-gray-200",
      },
      activeWrapper: {
        default: "bg-gray-900",
        active: "bg-gray-700",
        disabled: "bg-gray-200",
      },
      text: {
        default: "bg-gray-800",
        disabled: "bg-gray-500",
      },
      container: {
        default: "bg-white-900",
        active: "bg-gray-300",
      },
      label: {
        default: "text-gray-900",
        disabled: "text-gray-500",
      },
      description: {
        default: "text-gray-600",
      },
    },
    primary: {
      inActiveWrapper: {
        default: "bg-blue-400",
        active: "bg-blue-600",
        disabled: "bg-blue-200",
      },
      activeWrapper: {
        default: "bg-blue-600",
        active: "bg-blue-800",
        disabled: "bg-blue-100",
      },
      container: {
        default: "bg-white-900",
        active: "bg-blue-300",
      },
      label: {
        default: "text-gray-900",
        disabled: "text-gray-500",
      },
      description: {
        default: "text-gray-600",
      },
    },
  },
  thumbColor: "text-white-900",
};
