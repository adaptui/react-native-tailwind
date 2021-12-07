import { useTheme } from 'react-native-system';
import { ProgressProps } from './ProgressBar';

export const useProgressBarProps = (
  props: React.PropsWithChildren<Partial<ProgressProps>>
): ProgressProps => {
  const tailwind = useTheme();
  const progressStyles = useTheme('progress');
  props = {
    size: 'lg',
    trackColor: tailwind.getColor(progressStyles.defaultTrackColor),
    progressTrackColor: tailwind.getColor(
      progressStyles.defaultProgressTrackColor
    ),
    ...props,
  };
  return props as ProgressProps;
};
