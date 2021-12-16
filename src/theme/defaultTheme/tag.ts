export const tag = {
  base: 'flex flex-row items-center justify-center relative',
  variant: {
    default: {
      solid: 'bg-gray-800 border border-transparent',
      subtle: 'bg-gray-100 border border-transparent',
      outline: 'bg-white border border-gray-200',
    },
    disabled: {
      solid: 'bg-gray-200 border border-transparent',
      subtle: 'bg-gray-100 border border-transparent',
      outline: 'bg-white border border-gray-200',
    },
    icon: {
      default: {
        solid: 'text-gray-400',
        subtle: 'text-gray-500',
        outline: 'text-gray-400',
      },
      disabled: {
        solid: 'text-gray-400',
        subtle: 'text-gray-400',
        outline: 'text-gray-400',
      },
    },
    text: {
      default: {
        solid: 'text-white',
        subtle: 'text-gray-600',
        outline: 'text-gray-600',
      },
      disabled: {
        solid: 'text-gray-500',
        subtle: 'text-gray-400',
        outline: 'text-gray-400',
      },
    },
    pressed: {
      solid: 'bg-gray-900',
      subtle: 'bg-gray-200',
      outline: 'bg-gray-100 border-gray-300 shadow-sm',
    },
  },
  size: {
    default: {
      sm: 'min-h-5 w-auto min-w-5 px-1.5 rounded-[5px]',
      md: 'min-h-6 w-auto min-w-6 px-2 rounded-md',
      lg: 'min-h-7 w-auto min-w-7 px-2 rounded-md',
      xl: 'min-h-9 w-auto min-w-9 px-3 rounded-lg',
    },
    prefix: {
      sm: 'min-w-3 mr-1',
      md: 'min-w-3 mr-1',
      lg: 'min-w-3 mr-1',
      xl: 'min-w-4 mr-1.5',
    },
    closable: {
      sm: 'min-w-3 ml-1',
      md: 'min-w-3 ml-1',
      lg: 'min-w-3 ml-1',
      xl: 'min-w-4 ml-1.5',
    },
    text: {
      sm: 'text-cxs font-medium',
      md: 'text-cxs font-medium',
      lg: 'text-sm font-medium',
      xl: 'text-base font-medium',
    },
  },
};
