export const button = {
  base: 'relative flex flex-row items-center justify-center',
  variant: {
    default: {
      solid: 'bg-gray-800 text-white border border-transparent',
      subtle: 'bg-gray-100 text-gray-600 border border-transparent',
      outline: 'bg-white text-gray-600 border border-gray-200',
      ghost: 'bg-white text-gray-600 border border-transparent',
    },
    pressed: {
      solid: 'bg-gray-900',
      subtle: 'bg-gray-200',
      outline: 'border-gray-300 shadow-sm',
      ghost: 'bg-gray-100',
    },
    disabled: {
      solid: 'bg-gray-100 text-gray-400',
      subtle: 'bg-gray-100 text-gray-400',
      outline: 'text-gray-400 border-gray-200',
      ghost: 'text-gray-400',
    },
  },
  text: {
    size: {
      sm: 'text-cxs font-medium',
      md: 'text-sm font-medium',
      lg: 'text-sm font-medium',
      xl: 'text-base font-medium',
    },
    variant: {
      default: {
        solid: 'text-white',
        subtle: 'text-gray-600',
        outline: 'text-gray-600',
        ghost: 'text-gray-600',
      },
      disabled: {
        solid: 'bg-gray-100 text-gray-400',
        subtle: 'bg-gray-100 text-gray-400',
        outline: 'text-gray-400 border-gray-200',
        ghost: 'text-gray-400',
      },
    },
  },
  size: {
    default: {
      sm: 'px-2 py-[6.5px] min-h-[26px] min-w-[26px] rounded-lg',
      md: 'px-2.5 py-[7px] min-h-[30px] min-w-[30px] rounded-lg',
      lg: 'px-3 py-[10px] min-h-9 min-w-9 rounded-[10px]',
      xl: 'px-4 py-[13px] min-h-11 min-w-11 rounded-xl',
    },
  },
};
