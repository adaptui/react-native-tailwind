export const textArea = {
  wrapper: "relative w-full",
  suffixWrapper:
    "flex items-center justify-end pb-2 absolute inset-y-0 right-0 bg-transparent z-10",
  size: {
    sm: {
      base: {
        default: "h-[73px] p-1 text-cxs rounded-lg",
        withoutAddon: "px-2",
      },
      suffix: "h-[73px] text-xs pr-2 pl-1.5 h-full",
    },
    md: {
      base: {
        default: "h-[79px] p-1 text-sm rounded-lg",
        withoutAddon: "px-2.5",
      },
      suffix: "h-[79px] text-xs pr-2 pl-1.5",
    },
    lg: {
      base: {
        default: "h-[85px] p-1 text-sm rounded-[10px]",
        withoutAddon: "px-3",
      },
      suffix: "h-[85px] text-xs pr-2 pl-1.5",
    },
    xl: {
      base: {
        default: "h-25 p-1 text-base rounded-xl py-3",
        withoutAddon: "px-3",
      },
      suffix: "h-25 text-base pr-2 pl-2",
    },
  },
  variant: {
    outline: {
      default: {
        base: "text-gray-800 bg-white-900 border border-gray-400",
        placeholder: "text-gray-600",
        suffix: "text-gray-600",
      },
      hover: {
        base: "border-gray-500 shadow-sm",
        placeholder: "text-gray-700",
        suffix: "text-gray-700",
      },
      active: {
        base: "border-gray-500",
        placeholder: "text-gray-800",
        suffix: "text-gray-800",
      },
      focus: {
        base: {
          common: "border-transparent",
          boxShadow: {
            offset: 3,
            color: "bg-gray-500",
          },
        },
        placeholder: "text-gray-800",
        suffix: "text-gray-800",
      },
      disabled: {
        base: "bg-gray-100 border-gray-400",
        placeholder: "text-gray-500",
        suffix: "text-gray-500",
      },
      invalid: {
        base: "border-red-400",
        suffix: "text-red-800",
      },
    },
    subtle: {
      default: {
        base: "text-gray-800 bg-gray-100 border border-transparent",
        placeholder: "text-gray-600",
        suffix: "text-gray-600",
      },
      hover: {
        base: "text-gray-700 bg-gray-200",
        placeholder: "text-gray-700",
        suffix: "text-gray-700 ",
      },
      active: {
        base: "bg-white-900",
        placeholder: "text-gray-800",
        suffix: "text-gray-800",
      },
      focus: {
        base: {
          common: "bg-white-900",
          boxShadow: {
            offset: 3,
            color: "bg-gray-500",
          },
        },
        placeholder: "text-gray-800",
        suffix: "text-gray-800",
      },
      disabled: {
        base: "text-gray-500 bg-gray-100",
        placeholder: "text-gray-500",
        suffix: "text-gray-500",
      },
      invalid: {
        base: "bg-red-100",
        suffix: "text-red-800",
      },
    },
    underline: {
      default: {
        base: "text-gray-800 border border-l-transparent border-r-transparent border-t-transparent border-b-gray-400 rounded-none px-0.5",
        placeholder: "text-gray-600",
        suffix: "text-gray-600 pr-0",
      },
      hover: {
        base: "border-b-gray-500",
        placeholder: "text-gray-700",
        suffix: "text-gray-700 ",
      },
      active: {
        base: "border-b-gray-600",
        placeholder: "text-gray-800",
        suffix: "text-gray-800",
      },
      focus: {
        base: {
          common: "border-b-gray-600",
          boxShadow: {
            offset: 0,
            color: "bg-transparent",
          },
        },
        placeholder: "text-gray-800",
        suffix: "text-gray-800",
      },
      disabled: {
        base: "text-gray-500 border-b-gray-400",
        placeholder: "text-gray-500",
        suffix: "text-gray-500",
      },
      invalid: {
        base: "border-b-red-500",
        suffix: "text-red-800",
      },
    },
    ghost: {
      default: {
        base: "text-gray-800 border border-transparent",
        placeholder: "text-gray-600",
        suffix: "text-gray-600",
      },
      hover: {
        base: "bg-gray-200",
        placeholder: "text-gray-700",
        suffix: "text-gray-700 ",
      },
      active: {
        base: "bg-gray-100",
        placeholder: "text-gray-800",
        suffix: "text-gray-800",
      },
      focus: {
        base: {
          common: "bg-gray-100",
          boxShadow: {
            offset: 3,
            color: "bg-gray-500",
          },
        },
        placeholder: "text-gray-800",
        suffix: "text-gray-800",
      },
      disabled: {
        base: "text-gray-500",
        placeholder: "text-gray-500",
        suffix: "text-gray-500",
      },
      invalid: {
        base: "",
        suffix: "text-red-800",
      },
    },
  },
};
