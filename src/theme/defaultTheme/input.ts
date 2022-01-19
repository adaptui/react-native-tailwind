export const input = {
  wrapper: 'relative',
  base: {
    common: 'w-full',
    size: {
      sm: {
        common: 'h-[26px] text-cxs rounded-lg',
        withoutAddon: 'px-2',
      },
      md: {
        common: 'h-[30px] text-sm rounded-lg',
        withoutAddon: 'px-2.5',
      },
      lg: {
        common: 'h-9 text-sm rounded-[10px]',
        withoutAddon: 'px-3',
      },
      xl: {
        common: 'h-11 text-base rounded-xl',
        withoutAddon: 'px-3',
      },
    },
    variant: {
      outline: {
        common: 'bg-white border border-gray-200 text-gray-700',
        // Interaction Styles
        interactions: 'border-gray-400',
        hover: 'shadow-sm border-gray-300',
        focus: 'border-gray-400',
        // Interaction Styles
        disabled: 'bg-gray-50',
        invalid: 'border-red-300',
        placeholder: {
          common: 'text-gray-500',
          disabled: 'text-gray-500',
          interactions: 'text-gray-500 ',
          hover: 'text-gray-500',
          focus: 'text-gray-500',
        },
      },
      subtle: {
        common: 'bg-gray-100 text-gray-700 border border-transparent',
        // Interaction Styles
        interactions: 'bg-transparent border-gray-300 shadow-sm',
        hover: 'bg-gray-200',
        focus: 'bg-transparent border-gray-400',
        // Interaction Styles
        disabled: 'bg-gray-50 border-gray-200',
        invalid: 'bg-red-50',
        placeholder: {
          common: 'text-gray-500',
          disabled: 'text-gray-500',
          interactions: 'text-gray-500',
          hover: 'text-gray-500',
          focus: 'text-gray-500',
        },
      },
      underline: {
        common:
          'px-0.5 bg-white rounded-none text-gray-700 border-b border-gray-200',
        // Interaction Styles
        interactions: 'border-gray-400',
        hover: 'border-gray-300',
        focus: 'border-gray-400',
        // Interaction Styles
        disabled: 'border-gray-200',
        invalid: 'border-red-300',
        placeholder: {
          common: 'text-gray-500',
          disabled: 'text-gray-400',
          interactions: 'text-gray-500 ',
          hover: 'text-gray-500',
          focus: 'text-gray-500',
        },
      },
      ghost: {
        common: 'bg-white text-gray-700',
        // Interaction Styles
        interactions: 'bg-gray-100',
        hover: 'bg-gray-100',
        focus: 'bg-gray-100',
        // Interaction Styles
        disabled: 'bg-white',
        invalid: 'bg-red-50',
        placeholder: {
          common: 'text-gray-400',
          disabled: 'text-gray-500',
          interactions: 'text-gray-500 ',
          hover: 'text-gray-500',
          focus: 'text-gray-500',
        },
      },
    },
  },
  spinner: {
    variant: {
      outline: {
        disabled: 'border-gray-400',
        invalid: 'border-red-500',
        default: 'border-gray-500',
      },
      subtle: {
        disabled: 'border-gray-400',
        invalid: 'border-red-500',
        default: 'border-gray-500',
      },
      underline: {
        disabled: 'border-gray-400',
        invalid: 'border-red-500',
        default: 'border-gray-500',
      },
      ghost: {
        disabled: 'border-gray-400',
        invalid: 'border-red-500',
        default: 'border-gray-400',
      },
    },
  },
  suffix: {
    common:
      'flex items-center justify-center absolute inset-y-0 right-0 bg-transparent z-10',
    size: {
      sm: 'h-[26px] text-xs pr-2 pl-1.5',
      md: 'h-[30px] text-xs pr-2.5 pl-1.5',
      lg: 'h-9 text-xs pr-3 pl-1.5',
      xl: 'h-11 text-base pr-3 pl-2',
    },
    // Variants
    variant: {
      outline: {
        common: '',
        fill: 'text-gray-500',
        // Interaction Styles
        hover: 'text-gray-600',
        focus: 'text-gray-600',
        interactions: 'peer-active:text-gray-600',
        // Interaction Styles
        disabled: 'text-gray-400',
        invalid: 'text-red-500',
      },
      subtle: {
        common: '',
        fill: 'text-gray-500',
        // Interaction Styles
        hover: 'text-gray-600',
        focus: 'text-gray-600',
        interactions: 'peer-active:text-gray-600',
        // Interaction Styles
        disabled: 'text-gray-400',
        invalid: 'text-red-500',
      },
      underline: {
        common: 'pr-0.5',
        fill: 'text-gray-500',
        // Interaction Styles
        hover: 'text-gray-600',
        focus: 'text-gray-600',
        interactions: 'peer-active:text-gray-600',
        // Interaction Styles
        disabled: 'text-gray-400',
        invalid: 'text-red-500',
      },
      ghost: {
        common: '',
        fill: 'text-gray-400',
        // Interaction Styles
        hover: 'text-gray-500',
        focus: 'text-gray-500',
        interactions: 'peer-active:text-gray-500',
        // Interaction Styles
        disabled: 'text-gray-400',
        invalid: 'text-red-500',
      },
    },
  },
};
