import { pick } from 'lodash';
import { BadgeProps } from './Badge';
import { BADGE_LIB_KEYS } from './__keys';

interface BadgePropsReturnType {
  _badgeLibProps: BadgeProps;
}

export const useBadgeProps = (
  props: React.PropsWithChildren<Partial<BadgeProps>>
): BadgePropsReturnType => {
  props = {
    size: 'md',
    themeColor: 'default',
    variant: 'solid',
    ...props,
  };
  const _badgeLibProps = pick(props, BADGE_LIB_KEYS) as BadgeProps;
  return { _badgeLibProps };
};
