import { isUndefined } from 'lodash';
import React from 'react';
import { getValidChildren, useTheme } from 'react-native-system';
import { Box, BoxProps } from '../../primitives/Box';
import { createContext } from '../../utils/createContext';
import { Avatar } from './Avatar';
import { AvatarGroupWrapper } from './AvatarGroupWrapper';
import { AvatarProps } from './types';

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
  };

export const AvatarGroup: React.FC<Partial<AvatarGroupProps>> = (props) => {
  const { circular = true, size = 'xl', children, max, ...rest } = props;
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
            style={tailwind.style([
              avatarTheme.group.avatarWrapper.base,
              index !== 0 ? avatarTheme.group.avatarWrapper.size[size] : '',
            ])}
            key={index}
          >
            {renderElement}
          </Box>
        ))}
        {excess > 0 ? (
          <Box
            style={tailwind.style([
              avatarTheme.group.avatarWrapper.base,
              avatarTheme.group.avatarWrapper.size[size],
            ])}
          >
            <Avatar name={excess.toString()} />
          </Box>
        ) : null}
      </AvatarGroupWrapper>
    </AvatarGroupProvider>
  );
};
