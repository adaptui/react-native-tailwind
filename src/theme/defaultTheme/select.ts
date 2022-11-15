export const select = {
  wrapper: "relative",
  base: {
    common: "w-full flex-row items-center justify-between",
    icon: {
      size: {
        sm: 12,
        md: 12,
        lg: 12,
        xl: 16,
      },
    },
    text: {
      size: {
        sm: "text-cxs font-normal",
        md: "text-sm font-normal",
        lg: "text-sm font-normal",
        xl: "text-base font-normal",
      },
      variant: {
        outline: {
          default: "text-gray-600",
          pressedOrHovered: "text-gray-700",
          disabled: "text-gray-500",
          filled: "text-gray-800",
        },
        subtle: {
          default: "text-gray-600",
          pressedOrHovered: "text-gray-700",
          disabled: "text-gray-500",
          filled: "text-gray-800",
        },
        underline: {
          default: "text-gray-600",
          pressedOrHovered: "text-gray-700",
          disabled: "text-gray-500",
          filled: "text-gray-800",
        },
        ghost: {
          default: "text-gray-600",
          pressedOrHovered: "text-gray-700",
          disabled: "text-gray-500",
          filled: "text-gray-800",
        },
      },
    },
    size: {
      sm: {
        common: "min-h-[26px] rounded-lg",
        withoutAddon: "px-2",
      },
      md: {
        common: "h-[30px] rounded-lg",
        withoutAddon: "px-2.5",
      },
      lg: {
        common: "h-9 rounded-[10px]",
        withoutAddon: "px-3",
      },
      xl: {
        common: "h-11 rounded-xl",
        withoutAddon: "px-3",
      },
    },
    variant: {
      outline: {
        default: "bg-white-900 border border-gray-400",
        pressedOrHovered: "shadow-sm border-gray-500",
        disabled: "bg-gray-100",
        invalid: "border-red-400",
      },
      subtle: {
        default: "bg-gray-100",
        pressedOrHovered: "bg-gray-200",
        disabled: "bg-gray-100",
        invalid: "bg-red-100",
      },
      underline: {
        default: "px-0.5 bg-white-900 rounded-none border-b border-gray-500",
        pressedOrHovered: "shadow-sm shadow-gray-300 border-gray-600",
        disabled: "border-gray-400",
        invalid: "border-red-500",
      },
      ghost: {
        default: "bg-white-900",
        pressedOrHovered: "bg-gray-200",
        disabled: "",
        invalid: "",
      },
    },
  },
  prefix: {
    default:
      "flex items-center justify-center absolute left-0 bg-transparent z-10",
    size: {
      sm: "h-[26px] pl-2 pr-1.5",
      md: "h-[30px] pl-2.5 pr-1.5",
      lg: "h-9 pl-3 pr-1.5",
      xl: "h-11 pl-3 pr-2",
    },
    variant: {
      outline: {
        default: "text-gray-600",
        pressedOrHovered: "text-gray-700",
        filled: "text-gray-800",
        disabled: "text-gray-500",
        invalid: "text-red-800",
        wrapper: "",
      },
      subtle: {
        default: "text-gray-600",
        pressedOrHovered: "text-gray-700",
        filled: "text-gray-800",
        disabled: "text-gray-500",
        invalid: "text-red-800",
        wrapper: "",
      },
      underline: {
        default: "text-gray-600",
        pressedOrHovered: "text-gray-700",
        filled: "text-gray-800",
        disabled: "text-gray-500",
        invalid: "text-red-800",
        wrapper: "px-0.5",
      },
      ghost: {
        default: "text-gray-600",
        pressedOrHovered: "text-gray-700",
        filled: "text-gray-800",
        disabled: "text-gray-500",
        invalid: "text-red-800",
        wrapper: "",
      },
    },
  },
  suffix: {
    default:
      "flex items-center justify-center absolute right-0 bg-transparent z-10",
    size: {
      sm: "h-[26px] pr-2 pl-1.5",
      md: "h-[30px] pr-2.5 pl-1.5",
      lg: "h-9 pr-3 pl-1.5",
      xl: "h-11 pr-3 pl-2",
    },
    variant: {
      outline: {
        default: "text-gray-600",
        pressedOrHovered: "text-gray-700",
        filled: "text-gray-800",
        disabled: "text-gray-500",
        invalid: "text-red-800",
        wrapper: "",
      },
      subtle: {
        default: "text-gray-600",
        pressedOrHovered: "text-gray-700",
        filled: "text-gray-800",
        disabled: "text-gray-500",
        invalid: "text-red-800",
        wrapper: "",
      },
      underline: {
        default: "text-gray-600",
        pressedOrHovered: "text-gray-700",
        filled: "text-gray-800",
        disabled: "text-gray-500",
        invalid: "text-red-800",
        wrapper: "px-0.5",
      },
      ghost: {
        default: "text-gray-600",
        pressedOrHovered: "text-gray-700",
        filled: "text-gray-800",
        disabled: "text-gray-500",
        invalid: "text-red-800",
        wrapper: "",
      },
    },
  },
};

export const selectOption = {
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
        default: "text-cxs",
        lineHeight: 14.5,
      },
      description: {
        default: "text-cxs mt-1",
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
        default: "text-sm",
        lineHeight: 16,
      },
      description: {
        default: "text-sm mt-1",
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
        default: "text-base",
        lineHeight: 20,
      },
      description: {
        default: "text-sm mt-1.5",
      },
    },
    xl: {
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
        default: "text-base",
        lineHeight: 20,
      },
      description: {
        default: "text-sm mt-1.5",
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
    common: "relative flex-row items-center justify-between",
    withDescription: "items-start",
    text: {
      common: "text-gray-800 font-medium",
      disabled: "text-gray-500",
    },
  },
  icon: {
    common: "flex items-center justify-center border-[1.5px]",
  },
  labelDescWrapper: { flexShrink: 1 },
  description: {
    labelText: "text-gray-900 font-medium",
    common: "text-gray-600",
  },
};
