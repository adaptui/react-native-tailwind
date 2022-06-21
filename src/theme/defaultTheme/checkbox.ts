export const checkbox = {
  group: {
    vertical: {
      common: "flex flex-col items-start",
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
        wrapper: "w-3.5 h-3.5 text-[10px] rounded",
        iconSize: "w-2.5 h-2.5",
      },
      text: {
        default: "text-cxs ml-1.5",
        lineHeight: 15,
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
        wrapper: "w-4 h-4 text-xs rounded",
        iconSize: "w-3 h-3",
      },
      text: {
        default: "text-sm ml-2",
        lineHeight: 16,
      },
      description: {
        default: "text-sm mt-1.5 ml-2",
      },
    },
    lg: {
      label: {
        wrapper: "min-h-9 px-3 py-2 rounded-[10px]",
      },
      icon: {
        wrapper: "w-5 h-5 text-base rounded",
        iconSize: "w-4 h-4",
      },
      text: {
        default: "text-base ml-2",
        lineHeight: 20,
      },
      description: {
        default: "text-sm mt-2 ml-2",
      },
    },
  },

  themeColor: {
    base: {
      label: {
        default: "bg-transparent",
        hover: "bg-gray-200",
        pressed: "bg-gray-300",
        focus: "border-2 border-gray-500",
      },
      icon: {
        unChecked: {
          default: "bg-white-900 border-gray-500",
          hover: "border-gray-600",
          press: "border-gray-600 bg-gray-300",
          focus: "border-2 border-gray-600",
          disabled: "bg-gray-100 border-gray-400",
        },
        checked: {
          default: "bg-gray-900",
          hover: "bg-gray-800 border-gray-800",
          press: "bg-gray-700 border-gray-700",
          focus: "border-2 border-gray-500",
          disabled: "bg-gray-200 border-gray-200",
        },
        indeterminate: {
          default: "bg-gray-900 border-gray-900",
          hover: "bg-gray-800 border-gray-800",
          press: "bg-gray-700 border-gray-700",
          focus: "border-2 border-gray-500",
          disabled: "bg-gray-200 border-gray-200",
        },
        fill: {
          default: "text-white-900",
          disabled: "text-gray-500",
        },
      },
    },
    primary: {
      label: {
        default: "bg-transparent",
        hover: "bg-blue-200",
        pressed: "bg-blue-300",
        focus: "border-2 border-blue-500",
      },
      icon: {
        unChecked: {
          default: "bg-white-900 border-blue-500",
          hover: "border-blue-600",
          press: "border-blue-600 bg-blue-300",
          focus: "border-2 border-blue-600",
          disabled: "bg-blue-100 border-blue-400",
        },
        checked: {
          default: "bg-blue-600 border-blue-600",
          hover: "bg-blue-700 border-blue-700",
          press: "bg-blue-800 border-blue-800",
          focus: "border-2 border-blue-500",
          disabled: "bg-blue-100 border-blue-100",
        },
        indeterminate: {
          default: "bg-blue-600 border-blue-600",
          hover: "bg-blue-700 border-blue-700",
          press: "bg-blue-800 border-blue-800",
          focus: "border-2 border-blue-500",
          disabled: "bg-blue-100 border-blue-100",
        },
        fill: {
          default: "text-white-900",
          disabled: "text-blue-500",
        },
      },
    },
    danger: {
      label: {
        default: "bg-transparent",
        hover: "bg-red-200",
        pressed: "bg-red-300",
        focus: "border-2 border-red-500",
      },
      icon: {
        unChecked: {
          default: "bg-white-900 border-red-500",
          hover: "border-red-600",
          press: "border-red-600 bg-red-300",
          focus: "border-2 border-red-600",
          disabled: "bg-red-100 border-red-400",
        },
        checked: {
          default: "bg-red-600 border-red-600",
          hover: "bg-red-700",
          press: "bg-red-800 border-red-800",
          focus: "border-2 border-red-500",
          disabled: "bg-red-100 border-red-100",
        },
        indeterminate: {
          default: "bg-red-600 border-red-600",
          hover: "bg-red-700",
          press: "bg-red-800 border-red-800",
          focus: "border-2 border-red-500",
          disabled: "bg-red-100 border-red-100",
        },
        fill: {
          default: "text-white-900",
          disabled: "text-red-500",
        },
      },
    },
  },

  label: {
    common: "relative flex-row items-center",
    withDescription: "items-start",
    text: {
      common: "text-gray-800 font-medium",
      disabled: "text-gray-500",
    },
  },
  icon: {
    common: "items-center justify-center",
    border: 1.5,
  },
  labelDescWrapper: { flexShrink: 1 },
  description: {
    labelText: "text-gray-900 font-medium",
    common: "text-gray-600",
  },
};
