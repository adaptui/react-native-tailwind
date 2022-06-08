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
          common: "text-gray-700",
          disabled: "text-gray-500",
          initial: "text-gray-600",
        },
        subtle: {
          common: "text-gray-700",
          disabled: "text-gray-500",
          initial: "text-gray-600",
        },
        underline: {
          common: "text-gray-700",
          disabled: "text-gray-500",
          initial: "text-gray-600",
        },
        ghost: {
          common: "text-gray-700",
          disabled: "text-gray-500",
          initial: "text-gray-600",
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
        common: "bg-white border border-gray-200",
        interactions:
          "active:border-gray-400 focus-visible:border-gray-400 focus-visible:ring-2 focus-visible:ring-gray-200",
        pressedOrHovered: "shadow-sm border-gray-300",
        disabled: "bg-gray-50",
        invalid: "border-red-300",
      },
      subtle: {
        common: "bg-gray-100",
        interactions:
          "active:bg-gray-200 active:shadow-sm focus-visible:bg-gray-100 focus-visible:ring-2 focus-visible:ring-gray-200",
        pressedOrHovered: "bg-gray-200",
        disabled: "bg-gray-50",
        invalid: "bg-red-50",
      },
      underline: {
        common:
          "px-0.5 bg-white rounded-none text-gray-700 border-b border-gray-200",
        interactions: "active:shadow-gray-400 focus-visible:shadow-gray-400",
        pressedOrHovered: "shadow-sm shadow-gray-300 border-gray-300",
        disabled: "placeholder:text-gray-400 shadow-gray-200",
        invalid: "border-red-300",
      },
      ghost: {
        common: "bg-white text-gray-700",
        interactions:
          "active:bg-gray-100 active:placeholder:text-gray-500 focus-visible:bg-gray-100 focus-visible:placeholder:text-gray-500",
        pressedOrHovered: "bg-gray-100",
        disabled: "bg-white",
        invalid: "bg-red-50",
      },
    },
  },
  prefix: {
    common:
      "flex items-center justify-center absolute left-0 bg-transparent z-10",
    size: {
      sm: "h-[26px] pl-2 pr-1.5",
      md: "h-[30px] pl-2.5 pr-1.5",
      lg: "h-9 pl-3 pr-1.5",
      xl: "h-11 pl-3 pr-2",
    },
    variant: {
      outline: {
        default: "text-gray-500",
        common: "",
        pressedOrHovered: "text-gray-600",
        interactions:
          "peer-active:text-gray-600 peer-focus-visible:text-gray-600 peer-disabled:text-gray-400",
        disabled: "text-gray-400",
        invalid: "text-red-500",
      },
      subtle: {
        default: "text-gray-500",
        common: "",
        pressedOrHovered: "text-gray-600",
        interactions:
          "peer-active:text-gray-600 peer-focus-visible:text-gray-600",
        disabled: "text-gray-400",
        invalid: "text-red-500",
      },
      underline: {
        default: "text-gray-500",
        common: "pl-0.5",
        pressedOrHovered: "text-gray-600",
        interactions:
          "peer-active:text-gray-600 peer-focus-visible:text-gray-600",
        disabled: "text-gray-400",
        invalid: "text-red-500",
      },
      ghost: {
        default: "text-gray-400",
        common: "",
        pressedOrHovered: "text-gray-600",
        interactions:
          "peer-hover:text-gray-500 peer-active:text-gray-500  peer-focus-visible:text-gray-500",
        disabled: "text-gray-400",
        invalid: "text-red-500",
      },
    },
  },
  suffix: {
    common:
      "flex items-center justify-center absolute right-0 bg-transparent z-10",
    size: {
      sm: "h-[26px] pr-2 pl-1.5",
      md: "h-[30px] pr-2.5 pl-1.5",
      lg: "h-9 pr-3 pl-1.5",
      xl: "h-11 pr-3 pl-2",
    },
    variant: {
      outline: {
        default: "text-gray-500",
        common: "",
        pressedOrHovered: "text-gray-600",
        interactions:
          "peer-active:text-gray-600 peer-focus-visible:text-gray-600 peer-disabled:text-gray-400",
        disabled: "text-gray-400",
        invalid: "text-red-500",
      },
      subtle: {
        default: "text-gray-500",
        common: "",
        pressedOrHovered: "text-gray-600",
        interactions:
          "peer-active:text-gray-600 peer-focus-visible:text-gray-600",
        disabled: "text-gray-400",
        invalid: "text-red-500",
      },
      underline: {
        default: "text-gray-500",
        common: "pr-0.5",
        pressedOrHovered: "text-gray-600",
        interactions:
          "peer-active:text-gray-600 peer-focus-visible:text-gray-600",
        disabled: "text-gray-400",
        invalid: "text-red-500",
      },
      ghost: {
        default: "text-gray-400",
        common: "",
        pressedOrHovered: "text-gray-600",
        interactions:
          "peer-hover:text-gray-500 peer-active:text-gray-500  peer-focus-visible:text-gray-500",
        disabled: "text-gray-400",
        invalid: "text-red-500",
      },
    },
  },
};
