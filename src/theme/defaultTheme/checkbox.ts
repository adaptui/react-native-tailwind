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

  label: {
    common: "relative flex-row items-center",
    withDescription: "items-start",
    text: {
      common: "text-gray-800 font-medium",
      disabled: "text-gray-500",
    },
  },

  labelDescWrapper: { flexShrink: 1 },
  description: {
    labelText: "text-gray-900 font-medium",
    common: "text-gray-600",
  },

  icon: {
    common: "flex items-center justify-center border-[1.5px]",
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
      default: {
        label: "",
        icon: {
          unChecked: "bg-white-50 border-gray-500",
          checked: "bg-gray-900 border-gray-900",
          indeterminate: "bg-gray-900 border-gray-900",
        },
        text: "text-gray-800",
        description: "text-gray-600",
        iconFill: "text-white-900",
      },
      hover: {
        label: "bg-gray-200",
        icon: {
          unChecked: "border-gray-600",
          checked: "bg-gray-800 border-gray-800",
          indeterminate: "bg-gray-800 border-gray-800",
        },
        text: "",
        description: "",
        iconFill: "",
      },
      press: {
        label: "bg-gray-300",
        icon: {
          unChecked: "bg-gray-300 border-gray-600",
          checked: "bg-gray-700 border-gray-700",
          indeterminate: "bg-gray-700 border-gray-700",
        },
        text: "",
        description: "",
        iconFill: "",
      },
      focus: {
        label: {
          default: "bg-gray-100",
          boxShadow: {
            offset: 3,
            color: "bg-gray-500",
          },
        },
        icon: {
          unChecked: {
            default: "border-transparent",
            boxShadow: {
              offset: 3,
              color: "bg-grayDark-600",
            },
          },
          checked: {
            default: "",
            boxShadow: {
              offset: 3,
              color: "bg-gray-500",
            },
          },
          indeterminate: {
            default: "",
            boxShadow: {
              offset: 3,
              color: "bg-gray-500",
            },
          },
        },
        text: "",
        description: "",
        iconFill: "",
      },
      disabled: {
        label: "",
        icon: {
          unChecked: "bg-gray-100 border-gray-400",
          checked: "bg-gray-200 border-gray-200",
          indeterminate: "bg-gray-200 border-gray-200",
        },
        text: "text-gray-500",
        description: "text-gray-500",
        iconFill: "text-gray-500",
      },
    },
    primary: {
      default: {
        label: "",
        icon: {
          unChecked: "bg-white-50 border-blue-500",
          checked: "bg-blue-600 border-blue-600",
          indeterminate: "bg-blue-600 border-blue-600",
        },
        text: "text-gray-800",
        description: "text-gray-600",
        iconFill: "text-white-900",
      },
      hover: {
        label: "bg-blue-200",
        icon: {
          unChecked: "border-blue-600",
          checked: "bg-blue-700 border-blue-700",
          indeterminate: "bg-blue-700 border-blue-700",
        },
        text: "",
        description: "",
        iconFill: "",
      },
      press: {
        label: "bg-blue-300",
        icon: {
          unChecked: "bg-blue-300 border-blue-600",
          checked: "bg-blue-800 border-blue-800",
          indeterminate: "bg-blue-800 border-blue-800",
        },
        text: "",
        description: "",
        iconFill: "",
      },
      focus: {
        label: {
          default: "bg-blue-100",
          boxShadow: {
            offset: 3,
            color: "bg-blue-500",
          },
        },
        icon: {
          unChecked: {
            default: "border-transparent",
            boxShadow: {
              offset: 3,
              color: "bg-blue-600",
            },
          },
          checked: {
            default: "",
            boxShadow: {
              offset: 3,
              color: "bg-blue-500",
            },
          },
          indeterminate: {
            default: "",
            boxShadow: {
              offset: 3,
              color: "bg-blue-500",
            },
          },
        },
        text: "",
        description: "",
        iconFill: "",
      },
      disabled: {
        label: "",
        icon: {
          unChecked: "bg-blue-100 border-blue-400",
          checked: "bg-blue-100 border-blue-100 text-blue-500",
          indeterminate: "bg-blue-100 border-blue-100 text-blue-500",
        },
        text: "text-gray-500",
        description: "text-gray-500",
        iconFill: "text-blue-500",
      },
    },
    danger: {
      default: {
        label: "",
        icon: {
          unChecked: "bg-white-50 border-red-500 ",
          checked: "bg-red-600 border-red-600",
          indeterminate: "bg-red-600 border-red-600",
        },
        text: "text-gray-800",
        description: "text-gray-600",
        iconFill: "text-white-900",
      },
      hover: {
        label: "bg-red-200",
        icon: {
          unChecked: "border-red-600",
          checked: "bg-red-700 border-red-700",
          indeterminate: "bg-red-700 border-red-700",
        },
        text: "",
        description: "",
        iconFill: "",
      },
      press: {
        label: "bg-red-300",
        icon: {
          unChecked: "bg-red-300 border-red-600",
          checked: "bg-red-800 border-red-800",
          indeterminate: "bg-red-800 border-red-800",
        },
        text: "",
        description: "",
        iconFill: "",
      },
      focus: {
        label: {
          default: "bg-red-100",
          boxShadow: {
            offset: 3,
            color: "bg-red-500",
          },
        },
        icon: {
          unChecked: {
            default: "border-transparent",
            boxShadow: {
              offset: 3,
              color: "bg-red-600",
            },
          },
          checked: {
            default: "",
            boxShadow: {
              offset: 3,
              color: "bg-red-500",
            },
          },
          indeterminate: {
            default: "",
            boxShadow: {
              offset: 3,
              color: "bg-red-500",
            },
          },
        },
        text: "",
        description: "",
        iconFill: "",
      },
      disabled: {
        label: "",
        icon: {
          unChecked: "bg-red-100 border-red-400",
          checked: "bg-red-100 border-red-100 text-red-500",
          indeterminate: "bg-red-100 border-red-100 text-red-500",
        },
        text: "text-gray-500",
        description: "text-gray-500",
        iconFill: "text-red-500",
      },
    },
  },
};
