export const meter = {
  wrapper: "w-full",
  size: {
    sm: {
      label: "text-cxs",
      hint: "text-cxs",
      track: "h-0.5",
    },
    md: {
      label: "text-sm",
      hint: "text-sm",
      track: "h-1",
    },
    lg: {
      label: "text-sm",
      hint: "text-sm",
      track: "h-2",
    },
    xl: {
      label: "text-sm",
      hint: "text-sm",
      track: "h-3",
    },
  },
  themeColor: {
    base: {
      track: {
        common: "relative bg-gray-100 rounded-2xl z-10 overflow-hidden",
      },
      bar: {
        common: "h-full bg-gray-900 rounded-2xl",
      },
    },
    primary: {
      track: {
        common: "relative bg-blue-100 rounded-2xl z-10 overflow-hidden",
      },
      bar: {
        common: "h-full bg-blue-600 rounded-2xl",
      },
    },
    success: {
      track: {
        common: "relative bg-green-100 rounded-2xl z-10 overflow-hidden",
      },
      bar: {
        common: "h-full bg-green-600 rounded-2xl",
      },
    },
  },
  label: {
    common: "flex text-left mb-3 text-gray-900 font-medium",
    hasHint: "flex-1",
  },
  hint: {
    common: "ml-3 text-right mb-3 text-gray-600",
  },
  barWrapper: "flex-row justify-between items-center",
  borderNone: "rounded-none",
  flatBorders: {
    flatLeftBorders: {
      borderTopLeftRadius: 0,
      borderBottomLeftRadius: 0,
    },
    flatRightBorders: {
      borderTopRightRadius: 0,
      borderBottomRightRadius: 0,
    },
  },
};
