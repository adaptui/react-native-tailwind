export const progress = {
  wrapper: "w-full",
  size: {
    sm: {
      container: "w-full h-0.5 rounded-full overflow-hidden",
      bar: "absolute h-0.5 rounded-full",
      label: "text-cxs",
      hint: "text-cxs",
    },
    md: {
      container: "w-full h-1 rounded-full overflow-hidden",
      bar: "absolute h-1 rounded-full",
      label: "text-sm",
      hint: "text-sm",
    },
    lg: {
      container: "w-full h-2 rounded-full overflow-hidden",
      bar: "absolute h-2 rounded-full",
      label: "text-sm",
      hint: "text-sm",
    },
    xl: {
      container: "w-full h-3 rounded-full overflow-hidden",
      bar: "absolute h-3 rounded-full",
      label: "text-sm",
      hint: "text-sm",
    },
  },
  themeColor: {
    base: {
      track: "bg-gray-100",
      filled: "bg-gray-900",
    },
    primary: {
      track: "bg-blue-100",
      filled: "bg-blue-600",
    },
  },
  label: {
    common: "flex text-left mb-3 text-gray-900 font-medium",
    hasHint: "flex-1",
  },
  hint: {
    common: "ml-3 text-right mb-3 text-gray-600",
  },
};
