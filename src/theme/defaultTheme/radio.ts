export const radio = {
  group: {
    vertical: {
      common: "flex flex-col",
      spacing: "mt-1",
    },
    horizontal: {
      common: "flex flex-row",
      spacing: "ml-1",
    },
  },

  size: {
    sm: {
      label: {
        wrapper: "min-h-[26px] px-2 py-[6px] rounded-lg",
      },
      icon: {
        wrapper: "w-3.5 h-3.5 rounded-full",
        innerCircle: {
          default: "w-1.5 h-1.5 rounded-full",
        },
      },
      text: {
        default: "text-cxs ml-1.5",
        lineHeight: 14.5,
      },
      description: {
        default: "text-cxs mt-1 ml-1.5",
      },
    },
    md: {
      label: {
        wrapper: "min-h-[30px] px-2.5 py-[7px] rounded-lg",
      },
      icon: {
        wrapper: "w-4 h-4 rounded-full",
        innerCircle: {
          default: "w-1.5 h-1.5 rounded-full",
        },
      },
      text: {
        default: "text-sm ml-2",
        lineHeight: 16,
      },
      description: {
        default: "text-sm mt-1 ml-2",
      },
    },
    lg: {
      label: {
        wrapper: "min-h-9 px-3 py-2 rounded-[10px]",
      },
      icon: {
        wrapper: "w-5 h-5 rounded-full",
        innerCircle: {
          default: "w-2 h-2 rounded-full",
        },
      },
      text: {
        default: "text-base ml-2",
        lineHeight: 20,
      },
      description: {
        default: "text-sm mt-1.5 ml-2",
      },
    },
  },

  themeColor: {
    base: {
      label: {
        default: "bg-transparent",
        hover: "bg-gray-200",
        pressed: "bg-gray-300",
        focus: {
          offset: 3,
          color: "bg-gray-500",
          backgroundColor: "bg-gray-100",
        },
      },
      icon: {
        unChecked: {
          default: "bg-white-900 border-gray-500",
          hover: "border-gray-600 shadow shadow-color-opacity-10",
          press: "border-gray-600 bg-gray-300",
          disabled: "bg-gray-100 border-gray-400",
          focus: {
            default: "border-white-900",
            boxShadow: {
              offset: 3,
              color: "bg-gray-600",
            },
          },
        },
        checked: {
          default: "bg-gray-900 border-gray-900",
          hover: "bg-gray-800 border-gray-800 shadow shadow-color-opacity-10",
          press: "bg-gray-700 border-gray-700",
          disabled: "bg-gray-200 border-gray-200",
          focus: {
            default: "border-gray-900",
            boxShadow: {
              offset: 3,
              color: "bg-gray-500",
            },
          },
        },
      },
      innerCircle: {
        unChecked: {
          default: "bg-white-900",
          disabled: "bg-gray-100",
          press: "bg-gray-300",
        },
        checked: {
          default: "bg-white-900",
          disabled: "bg-gray-500",
          press: "bg-white-900",
        },
      },
    },
    primary: {
      label: {
        default: "bg-transparent",
        hover: "bg-blue-200",
        pressed: "bg-blue-300",
        focus: {
          offset: 3,
          color: "bg-blue-500",
          backgroundColor: "bg-blue-100",
        },
      },
      icon: {
        unChecked: {
          default: "bg-white-900 border-blue-500",
          hover: "border-blue-500 shadow shadow-color-opacity-10",
          press: "border-blue-500 bg-blue-300",
          disabled: "bg-blue-100 border-blue-400",
          focus: {
            default: "bg-white-900",
            boxShadow: {
              offset: 3,
              color: "bg-blue-500",
            },
          },
        },
        checked: {
          default: "bg-blue-600 border-blue-600",
          hover: "bg-blue-700 border-blue-700 shadow shadow-color-opacity-10",
          press: "bg-blue-800 border-blue-800",
          disabled: "bg-blue-100 border-blue-100",
          focus: {
            default: "border-blue-600",
            boxShadow: {
              offset: 3,
              color: "bg-blue-500",
            },
          },
        },
      },
      innerCircle: {
        unChecked: {
          default: "bg-white-900",
          disabled: "bg-blue-100",
          press: " bg-blue-300",
        },
        checked: {
          default: "bg-white-900",
          disabled: "bg-blue-500",
          press: "bg-white-900",
        },
      },
    },
    danger: {
      label: {
        default: "bg-transparent",
        hover: "bg-red-200",
        pressed: "bg-red-300",
        focus: {
          offset: 3,
          color: "bg-red-500",
          backgroundColor: "bg-red-100",
        },
      },
      icon: {
        unChecked: {
          default: "bg-white-900 border-red-500",
          hover: "border-red-500 shadow shadow-color-opacity-10",
          press: "border-red-500 bg-red-300",
          disabled: "bg-red-100 border-red-400",
          focus: {
            default: "bg-white-900",
            boxShadow: {
              offset: 3,
              color: "bg-red-500",
            },
          },
        },
        checked: {
          default: "bg-red-600 border-red-600",
          hover: "bg-red-700 border-red-700 shadow shadow-color-opacity-10",
          press: "bg-red-800 border-red-800",
          disabled: "bg-red-100 border-red-100",
          focus: {
            default: "border-red-600",
            boxShadow: {
              offset: 3,
              color: "bg-red-500",
            },
          },
        },
      },
      innerCircle: {
        unChecked: {
          default: "bg-white-900",
          disabled: "bg-red-100",
          press: "bg-red-300",
        },
        checked: {
          default: "bg-white-900",
          disabled: "bg-red-500",
          press: "bg-white-900",
        },
      },
    },
  },
  label: {
    common: "relative flex-row items-center",
    withDescription: "items-start",
    text: {
      common: "text-gray-800 font-medium",
      disabled: "text-gray-500 font-medium",
    },
  },
  icon: {
    common: "flex items-center justify-center border-[1.5px]",
  },
  labelDescWrapper: { flexShrink: 1 },
  description: {
    labelText: "text-gray-900 font-medium",
    common: "text-gray-600 font-normal",
  },
};
