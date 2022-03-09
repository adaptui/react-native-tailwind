export const checkbox = {
  group: {
    vertical: {
      common: 'flex flex-col items-start',
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
    common: 'items-center justify-center',
    wrapperSize: {
      sm: 'w-3.5 h-3.5 text-[10px] rounded',
      md: 'w-4 h-4 text-xs rounded',
      lg: 'w-5 h-5 text-base rounded',
    },
    iconSize: {
      sm: 'w-2.5 h-2.5',
      md: 'w-3 h-3',
      lg: 'w-4 h-4',
    },
    border: 1.5,
    unChecked: {
      default: 'bg-white border-gray-400',
      focus: 'border-2 border-gray-300',
      disabled: 'bg-gray-200 border-gray-300',
      invalid: 'bg-white border-red-600',
    },
    checked: {
      default: 'bg-gray-800 border-gray-800',
      focus: 'border-2 border-gray-300',
      disabled: 'bg-gray-200 border-gray-200',
      invalid: 'bg-red-600 border-red-600',
    },
    indeterminate: {
      default: 'bg-gray-800 border-gray-800',
      focus: 'border-2 border-gray-300',
      disabled: 'bg-gray-200 border-gray-200',
      invalid: 'bg-red-600 border-red-600',
    },
  },
  text: {
    common: 'text-gray-700 font-medium select-none',
    size: {
      sm: 'text-cxs ml-1.5',
      md: 'text-sm ml-2',
      lg: 'text-base ml-2',
    },
    lineHeight: {
      sm: 15,
      md: 16,
      lg: 20,
    },
  },
  description: {
    common: 'text-gray-500 select-none',
    size: {
      sm: 'text-cxs mt-1 ml-1.5',
      md: 'text-sm mt-1.5 ml-2',
      lg: 'text-sm mt-2 ml-2',
    },
  },
};
