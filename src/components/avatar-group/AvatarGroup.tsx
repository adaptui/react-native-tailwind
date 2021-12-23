import { isUndefined } from 'lodash';
import React from 'react';
import { Box, BoxProps } from '../../primitives';
import { useTheme } from '../../theme';
import { createContext, getValidChildren } from '../../utils';
import { AvatarGroupWrapper } from './AvatarGroupWrapper';
import { Avatar } from '../avatar/Avatar';
import { AvatarProps } from '../avatar/avatarPropTypes';

const [AvatarGroupProvider, useAvatarGroup] =
  createContext<AvatarGroupSharedProps>({
    strict: false,
    name: 'AvatarGroupProvider',
  });

export { useAvatarGroup };

export type AvatarGroupSharedProps = Pick<AvatarProps, 'size' | 'circular'>;

export type AvatarGroupProps = BoxProps &
  AvatarGroupSharedProps & {
    /**
     * Maximum number of avatars to be displayed within the group.
     *
     */
    max?: number;
    /**
     * A ring around the Avatar Component. If true, the Avatar will show a border around it.
     *
     */
    showRing?: boolean;
    /**
     * Color of the ring around the Avatar Component.
     *
     */
    ringColor?: string;
  };

export const AvatarGroup: React.FC<Partial<AvatarGroupProps>> = (props) => {
  const {
    circular = true,
    size = 'xl',
    showRing = false,
    ringColor = 'white',
    children,
    max,
    ...rest
  } = props;
  const validChildren = getValidChildren(children);
  const tailwind = useTheme();
  const avatarTheme = useTheme('avatar');
  /**
   * Get the avatars within the max
   */
  const childrenWithinMax = isUndefined(max)
    ? validChildren
    : validChildren.slice(0, max);

  const context = React.useMemo(() => ({ size, circular }), [size, circular]);

  const excess = isUndefined(max) ? 0 : validChildren.length - max;
  return (
    <AvatarGroupProvider value={context}>
      <AvatarGroupWrapper size={size} {...rest}>
        {childrenWithinMax.map((renderElement, index) => (
          <Box
            style={[
              avatarTheme.borderRadius.size[size],
              tailwind.style([
                index !== 0 ? avatarTheme.group.avatarWrapper.size[size] : '',
                circular ? avatarTheme.group.avatarWrapper.circular : '',
                showRing ? avatarTheme.group.avatarWrapper.ringStyle : '',
              ]),
              showRing
                ? { borderColor: ringColor, backgroundColor: ringColor }
                : {},
            ]}
            key={index}
          >
            {renderElement}
          </Box>
        ))}
        {excess > 0 ? (
          <Box
            style={[
              avatarTheme.borderRadius.size[size],
              tailwind.style([
                avatarTheme.group.avatarWrapper.size[size],
                circular ? avatarTheme.group.avatarWrapper.circular : '',
                showRing ? avatarTheme.group.avatarWrapper.ringStyle : '',
              ]),
              showRing
                ? { borderColor: ringColor, backgroundColor: ringColor }
                : {},
            ]}
          >
            <Avatar name={excess.toString()} />
          </Box>
        ) : null}
      </AvatarGroupWrapper>
    </AvatarGroupProvider>
  );
};
