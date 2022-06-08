export const badge = {
  baseContainer: "flex flex-row items-center rounded-2xl",
  containerVariants: {
    solid: {
      default: "bg-gray-900",
      primary: "bg-blue-600",
      secondary: "bg-violet-600",
      success: "bg-green-600",
      danger: "bg-red-600",
    },
    subtle: {
      default: "bg-gray-100",
      primary: "bg-blue-100",
      secondary: "bg-violet-100",
      success: "bg-green-100",
      danger: "bg-red-100",
    },
    outline: {
      default: "bg-white-900 border border-gray-400",
      primary: "bg-white-900 border border-blue-400",
      secondary: "bg-white-900 border border-violet-400",
      success: "bg-white-900 border border-green-400",
      danger: "bg-white-900 border border-red-400",
    },
  },
  size: {
    text: {
      sm: "text-xs text-center font-medium",
      md: "text-xs text-center font-medium",
      lg: "text-cxs text-center font-medium",
    },
    container: {
      sm: "px-1.5 min-h-4",
      md: "px-1.5 min-h-5",
      lg: "px-2 min-h-6",
    },
  },
  textVariants: {
    solid: {
      default: "text-white-900",
      primary: "text-white-900",
      secondary: "text-white-900",
      success: "text-white-900",
      danger: "text-white-900",
    },
    subtle: {
      default: "text-gray-800",
      primary: "text-blue-800",
      secondary: "text-violet-800",
      success: "text-green-800",
      danger: "text-red-800",
    },
    outline: {
      default: "text-gray-600",
      primary: "text-blue-500",
      secondary: "text-violet-500",
      success: "text-emarald-500",
      danger: "text-red-500",
    },
  },
  prefix: {
    size: {
      sm: "w-2 mr-1 items-center justify-center",
      md: "w-2.5 mr-1 items-center justify-center",
      lg: "w-3 mr-1 items-center justify-center",
    },
  },
};
