export const meter = {
  wrapper: 'w-full',
  label: {
    common: 'flex text-left mb-3 text-gray-700 font-medium',
    size: {
      sm: 'text-cxs',
      md: 'text-sm',
      lg: 'text-sm',
      xl: 'text-sm',
    },
    hasHint: 'flex-1',
  },
  hint: {
    common: 'ml-3 text-right mb-3 text-gray-500',
    size: {
      sm: 'text-cxs',
      md: 'text-sm',
      lg: 'text-sm',
      xl: 'text-sm',
    },
  },
  barWrapper: 'flex-row justify-between items-center',
  track: {
    common: 'relative bg-gray-200 rounded-2xl z-10 overflow-hidden',
    size: {
      sm: 'h-0.5',
      md: 'h-1',
      lg: 'h-2',
      xl: 'h-3',
    },
  },
  borderNone: 'rounded-none',
  flatBorders: {
    flatLeftBorders: {
      borderTopLeftRadius: 0,
      borderBottomLeftRadius: 0,
    },
    flatRightBorders: {
      borderTopRightRadius: 0,
      borderBottomRightRadius: 0,
    },
  },
  bar: {
    common: 'h-full bg-gray-800 rounded-2xl',
  },
};
