export const button = {
  base: "relative flex flex-row items-center justify-center",
  themeColor: {
    base: {
      solid: {
        container: {
          wrapper: "bg-gray-900 border border-transparent",
          pressed: "bg-gray-800",
          disabled: "bg-gray-200",
        },
        text: {
          default: "text-white-900",
          disabled: "bg-gray-200 text-gray-500",
        },
      },
      subtle: {
        container: {
          wrapper: "bg-gray-100 border border-transparent",
          pressed: "bg-gray-200",
          disabled: "bg-gray-100",
        },
        text: {
          default: "text-gray-800",
          disabled: "bg-gray-100 text-gray-500",
        },
      },
      outline: {
        container: {
          wrapper: "bg-white-900 border border-gray-400",
          pressed: "border-gray-500 shadow-sm",
          disabled: "bg-gray-100 border-gray-400",
        },
        text: {
          default: "text-gray-800",
          disabled: "bg-gray-100 text-gray-500",
        },
      },
      ghost: {
        container: {
          wrapper: "bg-white-900 border border-transparent",
          pressed: "bg-gray-200",
          disabled: "",
        },
        text: {
          default: "text-gray-800",
          disabled: "text-gray-500",
        },
      },
    },
    primary: {
      solid: {
        container: {
          wrapper: "bg-blue-600 border border-transparent",
          pressed: "bg-blue-700",
          disabled: "bg-blue-100",
        },
        text: {
          default: "text-white-900",
          disabled: "text-blue-500",
        },
      },
      subtle: {
        container: {
          wrapper: "bg-blue-100 border border-transparent",
          pressed: "bg-blue-200",
          disabled: "bg-blue-100",
        },
        text: {
          default: "text-blue-800",
          disabled: "text-blue-500",
        },
      },
      outline: {
        container: {
          wrapper: "bg-white-900 border border-blue-400",
          pressed: "border-blue-500 shadow-sm",
          disabled: "bg-blue-100 border-blue-400",
        },
        text: {
          default: "text-blue-800",
          disabled: "text-blue-500",
        },
      },
      ghost: {
        container: {
          wrapper: "bg-white-900 border border-transparent",
          pressed: "bg-blue-200",
          disabled: "",
        },
        text: {
          default: "text-blue-800",
          disabled: "text-blue-500",
        },
      },
    },
    secondary: {
      solid: {
        container: {
          wrapper: "bg-violet-600 border border-transparent",
          pressed: "bg-violet-700",
          disabled: "bg-violet-100",
        },
        text: {
          default: "text-white-900",
          disabled: "text-violet-500",
        },
      },
      subtle: {
        container: {
          wrapper: "bg-violet-100 border border-transparent",
          pressed: "bg-violet-200",
          disabled: "bg-violet-100",
        },
        text: {
          default: "text-violet-800",
          disabled: "text-violet-500",
        },
      },
      outline: {
        container: {
          wrapper: "bg-white-900 border border-violet-400",
          pressed: "border-violet-500 shadow-sm",
          disabled: "bg-violet-100 border-violet-400",
        },
        text: {
          default: "text-violet-800",
          disabled: "bg-violet-100 text-violet-500",
        },
      },
      ghost: {
        container: {
          wrapper: "bg-white-900 border border-transparent",
          pressed: "bg-violet-200",
          disabled: "",
        },
        text: {
          default: "text-violet-800",
          disabled: "text-violet-500",
        },
      },
    },
    success: {
      solid: {
        container: {
          wrapper: "bg-green-600 border border-transparent",
          pressed: "bg-green-700",
          disabled: "bg-green-100",
        },
        text: {
          default: "text-white-900",
          disabled: "text-green-500",
        },
      },
      subtle: {
        container: {
          wrapper: "bg-green-100 border border-transparent",
          pressed: "bg-green-200",
          disabled: "bg-green-100",
        },
        text: {
          default: "text-green-800",
          disabled: "text-green-500",
        },
      },
      outline: {
        container: {
          wrapper: "bg-white-900 border border-green-400",
          pressed: "border-green-500 shadow-sm",
          disabled: "bg-green-100 border-green-400",
        },
        text: {
          default: "text-green-800",
          disabled: "text-green-500",
        },
      },
      ghost: {
        container: {
          wrapper: "bg-white-900 border border-transparent",
          pressed: "bg-green-200",
          disabled: "",
        },
        text: {
          default: "text-green-800",
          disabled: "text-green-500",
        },
      },
    },
    danger: {
      solid: {
        container: {
          wrapper: "bg-red-600 border border-transparent",
          pressed: "bg-red-700",
          disabled: "bg-red-100",
        },
        text: {
          default: "text-white-900",
          disabled: "text-red-500",
        },
      },
      subtle: {
        container: {
          wrapper: "bg-red-100 border border-transparent",
          pressed: "bg-red-200",
          disabled: "bg-red-100",
        },
        text: {
          default: "text-red-800",
          disabled: "text-red-500",
        },
      },
      outline: {
        container: {
          wrapper: "bg-white-900 border border-red-400",
          pressed: "border-red-500 shadow-sm",
          disabled: "bg-red-100 border-red-400",
        },
        text: {
          default: "text-red-800",
          disabled: "text-red-500",
        },
      },
      ghost: {
        container: {
          wrapper: "bg-white-900 border border-transparent",
          pressed: "bg-red-200",
          disabled: "",
        },
        text: {
          default: "text-red-800",
          disabled: "text-red-500",
        },
      },
    },
  },
  text: {
    size: {
      sm: "text-cxs font-medium",
      md: "text-sm font-medium",
      lg: "text-sm font-medium",
      xl: "text-base font-medium",
    },
  },
  icon: {
    size: {
      sm: "w-4",
      md: "w-4",
      lg: "w-4",
      xl: "w-5",
    },
    themeColor: {
      base: {
        solid: {
          default: "text-white-900",
          disabled: "text-gray-500",
        },
        subtle: {
          default: "text-gray-800",
          disabled: "text-gray-500",
        },
        outline: {
          default: "text-gray-800",
          disabled: "text-gray-500",
        },
        ghost: {
          default: "text-gray-800",
          disabled: "text-gray-500",
        },
      },
      primary: {
        solid: {
          default: "text-white-900",
          disabled: "text-blue-500",
        },
        subtle: {
          default: "text-blue-800",
          disabled: "text-blue-500",
        },
        outline: {
          default: "text-blue-800",
          disabled: "text-blue-500",
        },
        ghost: {
          default: "text-blue-800",
          disabled: "text-blue-500",
        },
      },
      secondary: {
        solid: {
          default: "text-white-900",
          disabled: "text-violet-500",
        },
        subtle: {
          default: "text-violet-800",
          disabled: "text-violet-500",
        },
        outline: {
          default: "text-violet-800",
          disabled: "text-violet-500",
        },
        ghost: {
          default: "text-violet-800",
          disabled: "text-violet-500",
        },
      },
      success: {
        solid: {
          default: "text-white-900",
          disabled: "text-green-500",
        },
        subtle: {
          default: "text-green-800",
          disabled: "text-green-500",
        },
        outline: {
          default: "text-green-800",
          disabled: "text-green-500",
        },
        ghost: {
          default: "text-green-800",
          disabled: "text-green-500",
        },
      },
      danger: {
        solid: {
          default: "text-white-900",
          disabled: "text-red-500",
        },
        subtle: {
          default: "text-red-800",
          disabled: "text-red-500",
        },
        outline: {
          default: "text-red-800",
          disabled: "text-red-500",
        },
        ghost: {
          default: "text-red-800",
          disabled: "text-red-500",
        },
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
    themeColor: {
      base: "border-gray-500",
      primary: "border-blue-500",
      secondary: "border-violet-500",
      success: "border-green-500",
      danger: "border-red-500",
    },
  },
};
