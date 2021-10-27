export const avatar = {
  base: 'relative items-center rounded-full justify-center bg-gray-100',
  size: {
    'xs': 'h-4 w-4',
    'sm': 'h-5 w-5',
    'md': 'h-6 w-6',
    'lg': 'h-7 w-7',
    'xl': 'h-8 w-8',
    '2xl': 'h-10 w-10',
    '3xl': 'h-12 w-12',
  },
  image: 'rounded-full w-full h-full',
  initials: {
    base: 'text-center uppercase text-gray-500',
    size: {
      'xs': 'text-xs',
      'sm': 'text-cxs',
      'md': 'text-sm',
      'lg': 'text-sm',
      'xl': 'text-base',
      '2xl': 'text-lg',
      '3xl': 'text-xl',
    },
  },
  status: {
    active: {
      base: 'absolute bg-green-500 shadow-sm border-white rounded-full bottom-0 right-0',
      size: {
        'xs': 'h-[5px] w-[5px] border',
        'sm': 'h-1.5 w-1.5 border',
        'md': 'h-[7px] w-[7px] border',
        'lg': 'h-2 w-2 border',
        'xl': 'h-[10px] w-[10px] border-2',
        '2xl': 'h-[12px] w-[12px] border-2',
        '3xl': 'h-[13px] w-[13px] border-2',
      },
    },
    away: {
      base: 'absolute shadow-sm border-white rounded-full bg-white',
      innerBox: {
        base: 'rounded-full w-full h-full border-gray-500',
        size: {
          'xs': { borderWidth: 1.3 },
          'sm': { borderWidth: 1.5 },
          'md': { borderWidth: 1.5 },
          'lg': { borderWidth: 2 },
          'xl': { borderWidth: 2 },
          '2xl': { borderWidth: 2 },
          '3xl': { borderWidth: 2 },
        },
      },
      position: {
        'xs': { right: 0, bottom: -0.5 },
        'sm': { right: -0.5, bottom: -0.5 },
        'md': { right: -0.5, bottom: -0.5 },
        'lg': { right: -0.5, bottom: -0.5 },
        'xl': { right: -2, bottom: -2 },
        '2xl': { right: -0.5, bottom: -1 },
        '3xl': { right: -0.5, bottom: -1 },
      },
      size: {
        'xs': 'h-1.5 w-1.5 border',
        'sm': 'h-[7px] w-[7px] border',
        'md': 'h-2 w-2 border',
        'lg': 'h-[9px] w-[9px] border',
        'xl': 'h-[12px] w-[12px] border-2',
        '2xl': 'h-[14px] w-[14px] border-2',
        '3xl': 'h-[15px] w-[15px] border-2',
      },
    },
  },
};
