export const input = {
  wrapper: "relative w-full",
  suffixWrapper:
    "flex items-center justify-center absolute inset-y-0 right-0 bg-transparent z-10",
  prefixWrapper:
    "flex items-center justify-center absolute inset-y-0 left-0 bg-transparent z-10",
  size: {
    sm: {
      base: { common: "h-[26px] text-cxs rounded-lg", withoutAddon: "px-2" },
      suffix: "h-[26px] text-xs pr-2 pl-1.5",
      prefix: "h-[26px] text-xs pl-2 pr-1.5",
    },
    md: {
      base: { common: "h-[30px] text-sm rounded-lg", withoutAddon: "px-2.5" },
      suffix: "h-[30px] text-xs pr-2.5 pl-1.5",
      prefix: "h-[30px] text-xs pl-2.5 pr-1.5",
    },
    lg: {
      base: { common: "h-9 text-sm rounded-[10px]", withoutAddon: "px-3" },
      suffix: "h-9 text-xs pr-3 pl-1.5",
      prefix: "h-9 text-xs pl-3 pr-1.5",
    },
    xl: {
      base: { common: "h-11 text-base rounded-xl", withoutAddon: "px-3" },
      suffix: "h-11 text-base pr-3 pl-2",
      prefix: "h-11 text-base pl-3 pr-2",
    },
  },
  variant: {
    outline: {
      base: {
        common: "bg-white-900 border border-gray-400 text-gray-800",
        hover: "shadow-sm border-gray-500",
        focus: "shadow-sm border-gray-500",
        disabled: "bg-gray-100 text-gray-500",
        invalid: "border-red-500",
        placeholder: {
          common: "text-gray-600",
          hover: "text-gray-700",
          focus: "text-gray-800",
          disabled: "text-gray-500",
        },
        focusWeb: {
          borderColor: "text-gray-500",
          outlineOffset: 0.7,
          outlineStyle: "auto",
        },
      },
      spinner: {
        disabled: "border-gray-500",
        default: "border-gray-800",
      },
      suffix: {
        common: "",
        fill: "text-gray-600",
        hover: "text-gray-700",
        focus: "text-gray-800",
        disabled: "text-gray-500",
        invalid: "text-red-800",
      },
      prefix: {
        common: "",
        fill: "text-gray-600",
        hover: "text-gray-700",
        focus: "text-gray-800",
        disabled: "text-gray-500",
        invalid: "text-red-800",
      },
    },
    subtle: {
      base: {
        common: "bg-gray-100 text-gray-800 border border-transparent",
        hover: "bg-gray-200",
        focus: "bg-transparent border-gray-500",
        disabled: "bg-gray-100 border-gray-200",
        invalid: "bg-red-100",
        placeholder: {
          common: "text-gray-600",
          hover: "text-gray-700",
          focus: "text-gray-800",
          disabled: "text-gray-500",
        },
        focusWeb: {
          borderColor: "text-gray-500",
          outlineOffset: 0.7,
          outlineStyle: "auto",
        },
      },
      spinner: {
        disabled: "border-gray-500",
        default: "border-gray-800",
      },
      suffix: {
        common: "",
        fill: "text-gray-600",
        hover: "text-gray-700",
        focus: "text-gray-800",
        disabled: "text-gray-500",
        invalid: "text-red-800",
      },
      prefix: {
        common: "",
        fill: "text-gray-600",
        hover: "text-gray-700",
        focus: "text-gray-800",
        disabled: "text-gray-500",
        invalid: "text-red-800",
      },
    },
    underline: {
      base: {
        common:
          "px-0.5 bg-white-900 rounded-none text-gray-800 border-b border-gray-400",
        hover: "border-gray-500",
        focus: "border-gray-600",
        disabled: "border-gray-400 text-gray-500",
        invalid: "border-red-500",
        placeholder: {
          common: "text-gray-600",
          hover: "text-gray-700",
          focus: "text-gray-800",
          disabled: "text-gray-500",
        },
        focusWeb: {
          borderColor: "text-transparent",
          outlineOffset: 0.7,
          outlineStyle: "none",
        },
      },
      spinner: {
        disabled: "border-gray-400",
        invalid: "border-red-500",
        default: "border-gray-500",
      },
      suffix: {
        common: "pr-0.5",
        fill: "text-gray-600",
        hover: "text-gray-700",
        focus: "text-gray-800",
        disabled: "text-gray-500",
        invalid: "text-red-800",
      },
      prefix: {
        common: "pl-0.5",
        fill: "text-gray-600",
        hover: "text-gray-700",
        focus: "text-gray-800",
        disabled: "text-gray-500",
        invalid: "text-red-800",
      },
    },
    ghost: {
      base: {
        common: "bg-white-900 text-gray-800",
        hover: "bg-gray-200",
        focus: "bg-gray-300",
        disabled: "bg-white-900 text-gray-500",
        invalid: "",
        placeholder: {
          common: "text-gray-600",
          hover: "text-gray-700",
          focus: "text-gray-800",
          disabled: "text-gray-500",
        },
        focusWeb: {
          borderColor: "text-gray-100",
          outlineOffset: 0.7,
          outlineStyle: "none",
        },
      },
      spinner: {
        disabled: "border-gray-500",
        default: "border-gray-800",
      },
      suffix: {
        common: "",
        fill: "text-gray-600",
        hover: "text-gray-700",
        focus: "text-gray-800",
        disabled: "text-gray-500",
        invalid: "text-red-800",
      },
      prefix: {
        common: "",
        fill: "text-gray-600",
        hover: "text-gray-700",
        focus: "text-gray-800",
        disabled: "text-gray-500",
        invalid: "text-red-800",
      },
    },
  },
};
