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
    outerBorderRadius: { borderWidth: 1.5 },
    position: { bottom: -1 },
    size: {
      'xs': 'h-[5.5px] w-[5.5px]',
      'sm': 'h-[7.5px] w-[7.5px]',
      'md': 'h-[9.5px] w-[9.5px]',
      'lg': 'h-[10.5px] w-[10.5px]',
      'xl': 'h-[11.5px] w-[11.5px]',
      '2xl': 'h-[13.5px] w-[13.5px]',
      '3xl': 'h-[14.5px] w-[14.5px]',
    },
    active: {
      base: 'absolute bg-green-500 shadow-sm border-white rounded-full bottom-0 right-0',
    },
    away: {
      base: 'absolute shadow-sm border-white rounded-full bg-white bottom-0 right-0',
      innerBox: {
        base: 'rounded-full w-full h-full border-gray-500',
        size: {
          'xs': { borderWidth: 1.5 },
          'sm': { borderWidth: 1.5 },
          'md': { borderWidth: 1.5 },
          'lg': { borderWidth: 2 },
          'xl': { borderWidth: 2 },
          '2xl': { borderWidth: 2 },
          '3xl': { borderWidth: 2 },
        },
      },
    },
    sleep: {
      base: 'absolute items-center justify-center shadow-sm border-white rounded-full bg-white bottom-0 right-0',
    },
    typing: {
      base: 'absolute border-2 border-white shadow-sm flex-row rounded-full items-center justify-evenly right-0 bottom-0 bg-gray-500',
      position: { bottom: -2, right: -2 },
      size: {
        'xs': 'w-3 h-[9px]',
        'sm': 'w-[13px] h-[9.62px]',
        'md': 'w-[14px] h-[10.25px]',
        'lg': 'w-[15px] h-[10.88px]',
        'xl': 'w-[18px] h-[12.17px]',
        '2xl': 'w-5 h-[13.33px]',
        '3xl': 'w-[21px] h-[13.92px]',
      },
      innerDots: {
        base: 'bg-white rounded-full',
        size: {
          'xs': 'w-[2px] h-[2px]',
          'sm': 'w-[2.25px] h-[2.25px]',
          'md': 'w-[2.5px] h-[2.5px]',
          'lg': 'w-[2.75px] h-[2.75px]',
          'xl': 'w-[2.33px] h-[2.33px]',
          '2xl': 'w-[2.67px] h-[2.67px]',
          '3xl': 'w-[2.83px] h-[2.83px]',
        },
      },
    },
  },
};
