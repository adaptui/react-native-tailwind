export const input = {
  wrapper: "relative w-full",
  suffixWrapper:
    "flex items-center justify-center absolute inset-y-0 right-0 bg-transparent z-10",
  prefixWrapper:
    "flex items-center justify-center absolute inset-y-0 left-0 bg-transparent z-10",
  size: {
    sm: {
      base: {
        default: "h-[26px] text-cxs rounded-lg",
        withoutAddon: "px-2",
      },
      suffix: "h-[26px] text-xs pr-2 pl-1.5",
      prefix: "h-[26px] text-xs pl-2 pr-1.5",
    },
    md: {
      base: {
        default: "h-[30px] text-sm rounded-lg",
        withoutAddon: "px-2.5",
      },
      suffix: "h-[30px] text-xs pr-2.5 pl-1.5",
      prefix: "h-[30px] text-xs pl-2.5 pr-1.5",
    },
    lg: {
      base: {
        default: "h-9 text-sm rounded-[10px]",
        withoutAddon: "px-3",
      },
      suffix: "h-9 text-xs pr-3 pl-1.5",
      prefix: "h-9 text-xs pl-3 pr-1.5",
    },
    xl: {
      base: {
        default: "h-11 text-base rounded-xl",
        withoutAddon: "px-3",
      },
      suffix: "h-11 text-base pr-3 pl-2",
      prefix: "h-11 text-base pl-3 pr-2",
    },
  },
  variant: {
    outline: {
      default: {
        base: "text-gray-800 bg-white-900 border border-gray-400",
        placeholder: "text-gray-600",
        prefix: "text-gray-600",
        suffix: "text-gray-600",
      },
      hover: {
        base: "border-gray-500 shadow-sm",
        placeholder: "text-gray-700",
        prefix: "text-gray-700",
        suffix: "text-gray-700",
      },
      active: {
        base: "border-gray-500",
        placeholder: "text-gray-800",
        prefix: "text-gray-800",
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
        prefix: "text-gray-800",
        suffix: "text-gray-800",
      },
      disabled: {
        base: "bg-gray-100 border-gray-400",
        placeholder: "text-gray-500",
        prefix: "text-gray-500",
        suffix: "text-gray-500",
      },
      invalid: {
        base: "border-red-400",
        prefix: "text-red-800",
        suffix: "text-red-800",
      },
    },
    subtle: {
      default: {
        base: "text-gray-800 bg-gray-100 border border-transparent",
        placeholder: "text-gray-600",
        prefix: "text-gray-600",
        suffix: "text-gray-600",
      },
      hover: {
        base: "text-gray-700 bg-gray-200",
        placeholder: "text-gray-700",
        prefix: "text-gray-700 ",
        suffix: "text-gray-700 ",
      },
      active: {
        base: "bg-white-900 border-gray-500",
        placeholder: "text-gray-800",
        prefix: "text-gray-800",
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
        prefix: "text-gray-800",
        suffix: "text-gray-800",
      },
      disabled: {
        base: "text-gray-500 bg-gray-100",
        placeholder: "text-gray-500",
        prefix: "text-gray-500",
        suffix: "text-gray-500",
      },
      invalid: {
        base: "bg-red-100",
        prefix: "text-red-800",
        suffix: "text-red-800",
      },
    },
    underline: {
      default: {
        base: "text-gray-800 border border-l-transparent border-r-transparent border-t-transparent border-b-gray-400 rounded-none px-0.5",
        placeholder: "text-gray-600",
        prefix: "text-gray-600 pl-0",
        suffix: "text-gray-600 pr-0",
      },
      hover: {
        base: "border-b-gray-500",
        placeholder: "text-gray-700",
        prefix: "text-gray-700 ",
        suffix: "text-gray-700 ",
      },
      active: {
        base: "border-b-gray-600",
        placeholder: "text-gray-800",
        prefix: "text-gray-800",
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
        prefix: "text-gray-800",
        suffix: "text-gray-800",
      },
      disabled: {
        base: "text-gray-500 border-b-gray-400",
        placeholder: "text-gray-500",
        prefix: "text-gray-500",
        suffix: "text-gray-500",
      },
      invalid: {
        base: "border-b-red-500",
        prefix: "text-red-800",
        suffix: "text-red-800",
      },
    },
    ghost: {
      default: {
        base: "text-gray-800 border border-transparent",
        placeholder: "text-gray-600",
        prefix: "text-gray-600",
        suffix: "text-gray-600",
      },
      hover: {
        base: "bg-gray-200",
        placeholder: "text-gray-700",
        prefix: "text-gray-700 ",
        suffix: "text-gray-700 ",
      },
      active: {
        base: "bg-gray-100",
        placeholder: "text-gray-800",
        prefix: "text-gray-800",
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
        prefix: "text-gray-800",
        suffix: "text-gray-800",
      },
      disabled: {
        base: "text-gray-500",
        placeholder: "text-gray-500",
        prefix: "text-gray-500",
        suffix: "text-gray-500",
      },
      invalid: {
        base: "",
        prefix: "text-red-800",
        suffix: "text-red-800",
      },
    },
  },
};
