import { pick } from 'lodash';
import { CircularProgressProps, useTheme } from 'react-native-system';
import { CIRCULAR_PROGRESS_LIB_KEYS } from './__keys';

interface CircularProgressPropsReturnType {
  _circularProgressProps: CircularProgressProps;
}

export const useCircularProgressProps = (
  props: React.PropsWithChildren<Partial<CircularProgressProps>>
): CircularProgressPropsReturnType => {
  const tailwind = useTheme();
  const circularProgressTheme = useTheme('circularProgress');
  props = {
    size: 'md',
    strokeWidth: 2,
    min: 0,
    max: 100,
    hint: false,
    progressTrackColor: tailwind.getColor(
      circularProgressTheme.progressTrackColor
    ),
    trackColor: tailwind.getColor(circularProgressTheme.baseTrackColor),
    ...props,
  };
  const _circularProgressProps = pick(
    props,
    CIRCULAR_PROGRESS_LIB_KEYS
  ) as CircularProgressProps;
  return { _circularProgressProps };
};
