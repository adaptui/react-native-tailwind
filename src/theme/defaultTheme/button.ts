export const button = {
  base: "relative flex flex-row items-center justify-center",
  loading: {
    wrapper: "absolute z-10 items-center justify-center",
    children: "opacity-0",
  },
  themeColor: {
    base: {
      solid: {
        container: {
          wrapper: "bg-gray-900 border border-transparent",
          pressed: "bg-gray-700",
          disabled: "bg-gray-200",
          hover: "bg-gray-800",
          focus: {
            borderColor: "transparent",
            offset: 3,
            color: "bg-gray-500",
          },
        },
        text: {
          default: "text-white-900",
          disabled: "bg-gray-200 text-gray-500",
        },
        icon: {
          default: "text-white-900",
          disabled: "text-gray-500",
        },
        spinner: {
          disabled: "border-gray-500",
        },
      },
      subtle: {
        container: {
          wrapper: "bg-gray-100 border border-transparent",
          pressed: "bg-gray-300",
          disabled: "bg-gray-100",
          hover: "bg-gray-200",
          focus: {
            borderColor: "transparent",
            offset: 3,
            color: "bg-gray-500",
          },
        },
        text: {
          default: "text-gray-800",
          disabled: "bg-gray-100 text-gray-500",
        },
        icon: {
          default: "text-gray-800",
          disabled: "text-gray-500",
        },
        spinner: {
          disabled: "border-gray-500",
        },
      },
      outline: {
        container: {
          wrapper: "bg-white-900 border border-gray-400",
          pressed: "border-gray-500 bg-gray-300",
          disabled: "bg-gray-100 border-gray-400",
          hover: "border-gray-500 shadow shadow-color-opacity-10",
          focus: {
            borderColor: "transparent",
            offset: 3,
            color: "bg-gray-500",
          },
        },
        text: {
          default: "text-gray-800",
          disabled: "bg-gray-100 text-gray-500",
        },
        icon: {
          default: "text-gray-800",
          disabled: "text-gray-500",
        },
        spinner: {
          disabled: "border-gray-500",
        },
      },
      ghost: {
        container: {
          wrapper: "bg-white-900 border border-transparent",
          pressed: "bg-gray-300",
          disabled: "",
          hover: "bg-gray-200",
          focus: {
            borderColor: "transparent",
            offset: 3,
            color: "bg-gray-500",
          },
        },
        text: {
          default: "text-gray-800",
          disabled: "text-gray-500",
        },
        icon: {
          default: "text-gray-800",
          disabled: "text-gray-500",
        },
        spinner: {
          disabled: "border-gray-500",
        },
      },
    },
    primary: {
      solid: {
        container: {
          wrapper: "bg-blue-600 border border-transparent",
          pressed: "bg-blue-800",
          disabled: "bg-blue-100",
          hover: "bg-blue-700",
          focus: {
            borderColor: "transparent",
            offset: 3,
            color: "bg-blue-500",
          },
        },
        text: {
          default: "text-white-900",
          disabled: "text-blue-500",
        },
        icon: {
          default: "text-white-900",
          disabled: "text-blue-500",
        },
        spinner: {
          disabled: "border-blue-500",
        },
      },
      subtle: {
        container: {
          wrapper: "bg-blue-100 border border-transparent",
          pressed: "bg-blue-300",
          disabled: "bg-blue-100",
          hover: "bg-blue-200",
          focus: {
            borderColor: "transparent",
            offset: 3,
            color: "bg-blue-500",
          },
        },
        text: {
          default: "text-blue-800",
          disabled: "text-blue-500",
        },
        icon: {
          default: "text-blue-800",
          disabled: "text-blue-500",
        },
        spinner: {
          disabled: "border-blue-500",
        },
      },
      outline: {
        container: {
          wrapper: "bg-white-900 border border-blue-400",
          pressed: "border-blue-500 bg-blue-300",
          disabled: "bg-blue-100 border-blue-400",
          hover: "border-blue-500 shadow shadow-color-opacity-10",
          focus: {
            borderColor: "transparent",
            offset: 3,
            color: "bg-blue-500",
          },
        },
        text: {
          default: "text-blue-800",
          disabled: "text-blue-500",
        },
        icon: {
          default: "text-blue-800",
          disabled: "text-blue-500",
        },
        spinner: {
          disabled: "border-blue-500",
        },
      },
      ghost: {
        container: {
          wrapper: "bg-white-900 border border-transparent",
          pressed: "bg-blue-300",
          disabled: "",
          hover: "bg-blue-200",
          focus: {
            borderColor: "transparent",
            offset: 3,
            color: "bg-blue-500",
          },
        },
        text: {
          default: "text-blue-800",
          disabled: "text-blue-500",
        },
        icon: {
          default: "text-blue-800",
          disabled: "text-blue-500",
        },
        spinner: {
          disabled: "border-blue-500",
        },
      },
    },
    secondary: {
      solid: {
        container: {
          wrapper: "bg-violet-600 border border-transparent",
          pressed: "bg-violet-800",
          disabled: "bg-violet-100",
          hover: "bg-violet-700",
          focus: {
            borderColor: "transparent",
            offset: 3,
            color: "bg-violet-500",
          },
        },
        text: {
          default: "text-white-900",
          disabled: "text-violet-500",
        },
        icon: {
          default: "text-white-900",
          disabled: "text-violet-500",
        },
        spinner: {
          disabled: "border-violet-500",
        },
      },
      subtle: {
        container: {
          wrapper: "bg-violet-100 border border-transparent",
          pressed: "bg-violet-300",
          disabled: "bg-violet-100",
          hover: "bg-violet-200",
          focus: {
            borderColor: "transparent",
            offset: 3,
            color: "bg-violet-500",
          },
        },
        text: {
          default: "text-violet-800",
          disabled: "text-violet-500",
        },
        icon: {
          default: "text-violet-800",
          disabled: "text-violet-500",
        },
        spinner: {
          disabled: "border-violet-500",
        },
      },
      outline: {
        container: {
          wrapper: "bg-white-900 border border-violet-400",
          pressed: "border-violet-500 bg-violet-300",
          disabled: "bg-violet-100 border-violet-400",
          hover: "border-violet-500 shadow shadow-color-opacity-10",
          focus: {
            borderColor: "transparent",
            offset: 3,
            color: "bg-violet-500",
          },
        },
        text: {
          default: "text-violet-800",
          disabled: "bg-violet-100 text-violet-500",
        },
        icon: {
          default: "text-violet-800",
          disabled: "text-violet-500",
        },
        spinner: {
          disabled: "border-violet-500",
        },
      },
      ghost: {
        container: {
          wrapper: "bg-white-900 border border-transparent",
          pressed: "bg-violet-300",
          disabled: "",
          hover: "bg-violet-200",
          focus: {
            borderColor: "transparent",
            offset: 3,
            color: "bg-violet-500",
          },
        },
        text: {
          default: "text-violet-800",
          disabled: "text-violet-500",
        },
        icon: {
          default: "text-violet-800",
          disabled: "text-violet-500",
        },
        spinner: {
          disabled: "border-violet-500",
        },
      },
    },
    success: {
      solid: {
        container: {
          wrapper: "bg-green-600 border border-transparent",
          pressed: "bg-green-800",
          disabled: "bg-green-100",
          hover: "bg-green-700",
          focus: {
            borderColor: "transparent",
            offset: 3,
            color: "bg-green-500",
          },
        },
        text: {
          default: "text-white-900",
          disabled: "text-green-500",
        },
        icon: {
          default: "text-white-900",
          disabled: "text-green-500",
        },
        spinner: {
          disabled: "border-green-500",
        },
      },
      subtle: {
        container: {
          wrapper: "bg-green-100 border border-transparent",
          pressed: "bg-green-300",
          disabled: "bg-green-100",
          hover: "bg-green-200",
          focus: {
            borderColor: "transparent",
            offset: 3,
            color: "bg-green-500",
          },
        },
        text: {
          default: "text-green-800",
          disabled: "text-green-500",
        },
        icon: {
          default: "text-green-800",
          disabled: "text-green-500",
        },
        spinner: {
          disabled: "border-green-500",
        },
      },
      outline: {
        container: {
          wrapper: "bg-white-900 border border-green-400",
          pressed: "border-green-500 bg-green-300",
          disabled: "bg-green-100 border-green-400",
          hover: "border-green-500 shadow shadow-color-opacity-10",
          focus: {
            borderColor: "transparent",
            offset: 3,
            color: "bg-green-500",
          },
        },
        text: {
          default: "text-green-800",
          disabled: "text-green-500",
        },
        icon: {
          default: "text-green-800",
          disabled: "text-green-500",
        },
        spinner: {
          disabled: "border-green-500",
        },
      },
      ghost: {
        container: {
          wrapper: "bg-white-900 border border-transparent",
          pressed: "bg-green-300",
          disabled: "",
          hover: "bg-green-200",
          focus: {
            borderColor: "transparent",
            offset: 3,
            color: "bg-green-500",
          },
        },
        text: {
          default: "text-green-800",
          disabled: "text-green-500",
        },
        icon: {
          default: "text-green-800",
          disabled: "text-green-500",
        },
        spinner: {
          disabled: "border-green-500",
        },
      },
    },
    danger: {
      solid: {
        container: {
          wrapper: "bg-red-600 border border-transparent",
          pressed: "bg-red-800",
          disabled: "bg-red-100",
          hover: "bg-red-700",
          focus: {
            borderColor: "transparent",
            offset: 3,
            color: "bg-danger-500",
          },
        },
        text: {
          default: "text-white-900",
          disabled: "text-red-500",
        },
        icon: {
          default: "text-white-900",
          disabled: "text-red-500",
        },
        spinner: {
          disabled: "border-red-500",
        },
      },
      subtle: {
        container: {
          wrapper: "bg-red-100 border border-transparent",
          pressed: "bg-red-300",
          disabled: "bg-red-100",
          hover: "bg-red-200",
          focus: {
            borderColor: "transparent",
            offset: 3,
            color: "bg-danger-500",
          },
        },
        text: {
          default: "text-red-800",
          disabled: "text-red-500",
        },
        icon: {
          default: "text-red-800",
          disabled: "text-red-500",
        },
        spinner: {
          disabled: "border-red-500",
        },
      },
      outline: {
        container: {
          wrapper: "bg-white-900 border border-red-400",
          pressed: "border-red-500 bg-red-300",
          disabled: "bg-red-100 border-red-400",
          hover: "border-red-500 shadow-sm shadow-color-opacity-10",
          focus: {
            borderColor: "transparent",
            offset: 3,
            color: "bg-danger-500",
          },
        },
        text: {
          default: "text-red-800",
          disabled: "text-red-500",
        },
        icon: {
          default: "text-red-800",
          disabled: "text-red-500",
        },
        spinner: {
          disabled: "border-red-500",
        },
      },
      ghost: {
        container: {
          wrapper: "bg-white-900 border border-transparent",
          pressed: "bg-red-300",
          disabled: "",
          hover: "bg-red-200",
          focus: {
            borderColor: "transparent",
            offset: 3,
            color: "bg-danger-500",
          },
        },
        text: {
          default: "text-red-800",
          disabled: "text-red-500",
        },
        icon: {
          default: "text-red-800",
          disabled: "text-red-500",
        },
        spinner: {
          disabled: "border-red-500",
        },
      },
    },
  },

  size: {
    sm: {
      default: "px-2 min-h-[26px] min-w-[26px] rounded-lg",
      prefix: "w-3 mr-1.5 items-center justify-center",
      suffix: "w-3 ml-1.5 items-center justify-center",
      icon: "w-4",
      text: "text-cxs font-medium",
    },
    md: {
      default: "px-2.5 min-h-[30px] min-w-[30px] rounded-lg",
      prefix: "w-3 mr-1.5 items-center justify-center",
      suffix: "w-3 ml-1.5 items-center justify-center",
      icon: "w-4",
      text: "text-sm font-medium",
    },
    lg: {
      default: "px-3 min-h-9 min-w-9 rounded-[10px]",
      prefix: "w-3 mr-1.5 items-center justify-center",
      suffix: "w-3 ml-1.5 items-center justify-center",
      icon: "w-4",
      text: "text-sm font-medium",
    },
    xl: {
      default: "px-4 min-h-11 min-w-11 rounded-xl",
      prefix: "w-4 mr-1.5 items-center justify-center",
      suffix: "w-4 ml-1.5 items-center justify-center",
      icon: "w-5",
      text: "text-base font-medium",
    },
  },
};
