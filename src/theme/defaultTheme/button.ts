export const button = {
  base: "relative flex flex-row items-center justify-center",
  variant: {
    default: {
      solid: "bg-gray-900 border border-transparent",
      subtle: "bg-gray-100 border border-transparent",
      outline: "bg-white-900 border border-gray-400",
      ghost: "bg-white-900 border border-transparent",
    },
    pressed: {
      solid: "bg-gray-800",
      subtle: "bg-gray-200",
      outline: "border-gray-500 shadow-sm",
      ghost: "bg-gray-200",
    },
    disabled: {
      solid: "bg-gray-200",
      subtle: "bg-gray-100",
      outline: "bg-gray-100 border-gray-400",
      ghost: "",
    },
  },
  text: {
    size: {
      sm: "text-cxs font-medium",
      md: "text-sm font-medium",
      lg: "text-sm font-medium",
      xl: "text-base font-medium",
    },
    variant: {
      default: {
        solid: "text-white-900",
        subtle: "text-gray-800",
        outline: "text-gray-800",
        ghost: "text-gray-800",
      },
      disabled: {
        solid: "bg-gray-200 text-gray-500",
        subtle: "bg-gray-100 text-gray-500",
        outline: "bg-gray-100 text-gray-500",
        ghost: "text-gray-500",
      },
    },
  },
  icon: {
    size: {
      sm: "w-4",
      md: "w-4",
      lg: "w-4",
      xl: "w-5",
    },
    variant: {
      default: {
        solid: "text-white-900",
        subtle: "text-gray-800",
        outline: "text-gray-800",
        ghost: "text-gray-800",
      },
      disabled: {
        solid: "text-gray-500",
        subtle: "text-gray-500",
        outline: "text-gray-500",
        ghost: "text-gray-500",
      },
    },
  },
  size: {
    default: {
      sm: "px-2 min-h-[26px] min-w-[26px] rounded-lg",
      md: "px-2.5 min-h-[30px] min-w-[30px] rounded-lg",
      lg: "px-3 min-h-9 min-w-9 rounded-[10px]",
      xl: "px-4 min-h-11 min-w-11 rounded-xl",
    },
  },
  prefix: {
    sm: "w-3 mr-1.5 items-center justify-center",
    md: "w-3 mr-1.5 items-center justify-center",
    lg: "w-3 mr-1.5 items-center justify-center",
    xl: "w-4 mr-1.5 items-center justify-center",
  },
  suffix: {
    sm: "w-3 ml-1.5 items-center justify-center",
    md: "w-3 ml-1.5 items-center justify-center",
    lg: "w-3 ml-1.5 items-center justify-center",
    xl: "w-4 ml-1.5 items-center justify-center",
  },
  loading: {
    wrapper: "absolute z-10 items-center justify-center",
    size: {
      sm: "xs",
      md: "xs",
      lg: "xs",
      xl: "md",
    },
    default: "border-gray-500",
  },
};
