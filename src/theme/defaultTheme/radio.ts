export const radio = {
  group: {
    vertical: {
      common: 'flex flex-col',
      spacing: 'mt-1',
    },
    horizontal: {
      common: 'flex flex-row',
      spacing: 'ml-1',
    },
    showMore: {
      button: {
        common: { vertical: 'justify-start w-full', horizontal: 'min-w-max' },
        expanded: { vertical: '!mt-0', horizontal: '!ml-0' },
        lg: 'min-h-9 rounded-[10px]',
      },
      content: {
        vertical: 'flex flex-col space-y-2 w-full',
        horizontal: 'flex flex-row space-x-2',
      },
    },
  },
  label: {
    common: 'relative flex-row items-center',
    withDescription: 'items-start',
    pressed: 'bg-gray-100',
    disabled: '',
    size: {
      sm: 'min-h-[26px] px-2 py-[6px] rounded-lg',
      md: 'min-h-[30px] px-2.5 py-[7px] rounded-lg',
      lg: 'min-h-9 px-3 py-2 rounded-[10px]',
    },
    showMore: { vertical: 'flex w-full', horizontal: 'flex' },
  },
  icon: {
    common: 'flex items-center justify-center',
    wrapperSize: {
      sm: 'w-3.5 h-3.5 rounded-full',
      md: 'w-4 h-4 rounded-full',
      lg: 'w-5 h-5 rounded-full',
    },
    innerCircle: {
      size: {
        sm: 'w-1.5 h-1.5 rounded-full',
        md: 'w-1.5 h-1.5 rounded-full',
        lg: 'w-2 h-2 rounded-full',
      },
      unChecked: {
        default: 'bg-white',
        disabled: 'bg-gray-200',
      },
      checked: {
        default: 'bg-white',
        disabled: 'bg-gray-400',
      },
    },
    border: 1.5,
    unChecked: {
      default: 'bg-white border-gray-400 text-white',
      focus: 'ring-2 ring-gray-300',
      invalid: 'bg-white border-red-600',
      disabled: 'bg-gray-200 border-gray-300',
      pressedOrHovered: 'border-gray-500 shadow',
      active: 'border-gray-400',
    },
    checked: {
      default: 'bg-gray-800 border-gray-800 text-white',
      focus: 'ring-2 ring-gray-300',
      invalid: 'bg-red-600 border-red-600',
      disabled: 'bg-gray-200 border-gray-200',
      pressedOrHovered: 'bg-gray-700 border-gray-700 shadow',
      active: 'bg-gray-800 border-gray-800',
    },
  },
  labelDescWrapper: { flexShrink: 1 },
  text: {
    common: 'text-gray-700 font-medium',
    size: {
      sm: 'text-cxs ml-1.5',
      md: 'text-sm ml-2',
      lg: 'text-base ml-2',
    },
    lineHeight: {
      sm: 14.5,
      md: 16,
      lg: 20,
    },
  },
  description: {
    common: 'text-gray-500',
    size: {
      sm: 'text-cxs mt-1 ml-1.5',
      md: 'text-sm mt-1 ml-2',
      lg: 'text-sm mt-1.5 ml-2',
    },
  },
};
