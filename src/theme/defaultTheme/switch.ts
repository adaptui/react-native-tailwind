export const switchTheme = {
  size: {
    sm: {
      switchContainerStyle: "w-6 h-[14px] rounded-full py-[1.5px]",
      thumbStyle: "h-[11px] bg-white-900 rounded-full shadow-sm",
      switchInterpolateWidths: [11, 14, 14, 11],
      thumbIntermediateTranslateValue: 3,
      thumbTranslateValue: 24 - 11 - 1.5,
      thumbInitTranslateValue: 1.5,
      label: {
        base: "relative flex flex-row items-center justify-center min-h-[26px] px-2 bg-white-900 rounded-lg",
        text: "text-cxs font-medium pr-2",
        pressed: "bg-gray-300",
      },
      labelWithDescription: {
        base: "relative flex flex-row justify-between items-start bg-white-900 w-full",
        labelDescriptionWrapper: "shrink pr-[6px]",
        descriptionText: "text-cxs text-gray-600",
      },
    },
    md: {
      switchContainerStyle: "w-[26px] h-4 rounded-full py-[1.5px]",
      thumbStyle: "h-[13px] bg-white-900 rounded-full shadow-sm",
      switchInterpolateWidths: [13, 15, 15, 13],
      thumbIntermediateTranslateValue: 2,
      thumbTranslateValue: 26 - 13 - 1.5,
      thumbInitTranslateValue: 1.5,
      label: {
        base: "relative flex flex-row items-center justify-center min-h-[30px] px-2.5 bg-white-900 rounded-lg",
        text: "text-sm font-medium pr-2",
        pressed: "bg-gray-300",
      },
      labelWithDescription: {
        base: "relative flex flex-row justify-between items-start bg-white-900 w-full",
        labelDescriptionWrapper: "shrink pr-2",
        descriptionText: "text-sm text-gray-600",
      },
    },
    lg: {
      switchContainerStyle: "w-8 h-5 rounded-full py-[1.5px]",
      thumbStyle: "h-[17px] bg-white-900 rounded-full shadow-sm",
      switchInterpolateWidths: [17, 20, 20, 17],
      thumbIntermediateTranslateValue: 3,
      thumbTranslateValue: 32 - 17 - 1.5,
      thumbInitTranslateValue: 1.5,
      label: {
        base: "relative flex flex-row items-center justify-center min-h-9 px-3 bg-white-900 rounded-lg",
        text: "text-base font-medium pr-2",
        pressed: "bg-gray-300",
      },
      labelWithDescription: {
        base: "relative flex flex-row justify-between items-start bg-white-900 w-full",
        labelDescriptionWrapper: "shrink pr-2",
        descriptionText: "text-sm text-gray-600",
      },
    },
    xl: {
      switchContainerStyle: "w-[48px] h-7 rounded-full py-[2px]",
      thumbStyle: "w-6 h-6 bg-white-900 rounded-full shadow-sm",
      switchInterpolateWidths: [24, 27, 27, 24],
      thumbIntermediateTranslateValue: 3,
      thumbTranslateValue: 48 - 24 - 2,
      thumbInitTranslateValue: 2,
      label: {
        base: "relative flex flex-row items-center justify-center min-h-11 px-3 bg-white-900 rounded-xl",
        text: "text-base font-medium pr-2",
        pressed: "bg-gray-300",
      },
      labelWithDescription: {
        base: "relative flex flex-row justify-between items-start bg-white-900 w-full",
        labelDescriptionWrapper: "shrink pr-5",
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
