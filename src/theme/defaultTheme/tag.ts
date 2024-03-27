export const tag = {
  base: "flex flex-row items-center justify-center relative",
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
    },
  },
  size: {
    sm: {
      default: "min-h-5 w-auto min-w-5 px-1.5 rounded-[5px]",
      prefix: "w-3 mr-1.5 items-center justify-center",
      suffix: "w-3 ml-1.5 items-center justify-center",
      closable: "w-3 ml-1",
      text: "text-cxs font-medium",
    },
    md: {
      default: "min-h-6 w-auto min-w-6 px-2 rounded-md",
      prefix: "w-3 mr-1.5 items-center justify-center",
      suffix: "w-3 ml-1.5 items-center justify-center",
      closable: "w-3 ml-1",
      text: "text-cxs font-medium",
    },
    lg: {
      default: "min-h-7 w-auto min-w-7 px-2 rounded-md",
      prefix: "w-3 mr-1.5 items-center justify-center",
      suffix: "w-3 ml-1.5 items-center justify-center",
      closable: "w-3 ml-1",
      text: "text-sm font-medium",
    },
    xl: {
      default: "min-h-9 w-auto min-w-9 px-3 rounded-lg",
      prefix: "w-4 mr-1.5 items-center justify-center",
      suffix: "w-4 ml-1.5 items-center justify-center",
      closable: "w-4 ml-1.5",
      text: "text-base font-medium",
    },
  },

  web: { outline: 0 },
};
