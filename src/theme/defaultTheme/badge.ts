export const badge = {
  baseContainer: 'flex flex-row items-center rounded-2xl',
  containerVariants: {
    solid: {
      default: 'bg-gray-800',
      primary: 'bg-blue-500',
      secondary: 'bg-violet-500',
      success: 'bg-emarald-500',
      danger: 'bg-red-500',
    },
    subtle: {
      default: 'bg-gray-100',
      primary: 'bg-blue-50',
      secondary: 'bg-violet-50',
      success: 'bg-emarald-50',
      danger: 'bg-red-50',
    },
    outline: {
      default: 'bg-white border border-gray-200',
      primary: 'bg-white border border-blue-200',
      secondary: 'bg-white border border-violet-200',
      success: 'bg-white border border-emarald-200',
      danger: 'bg-white border border-red-200',
    },
  },
  size: {
    sm: 'px-[6px] py-px text-xs font-medium',
    md: 'px-[6px] py-[3px] text-xs font-medium',
    lg: 'px-2 py-[4.5px] text-cxs font-medium',
  },
  textVariants: {
    solid: {
      default: 'text-white',
      primary: 'text-white',
      secondary: 'text-white',
      success: 'text-white',
      danger: 'text-white',
    },
    subtle: {
      default: 'text-gray-600',
      primary: 'text-blue-500',
      secondary: 'text-violet-500',
      success: 'text-emarald-500',
      danger: 'text-red-500',
    },
    outline: {
      default: 'text-gray-600',
      primary: 'text-blue-500',
      secondary: 'text-violet-500',
      success: 'text-emarald-500',
      danger: 'text-red-500',
    },
  },
};
