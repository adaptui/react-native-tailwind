import React from 'react';
import {
  Easing,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import Svg, { Path } from 'react-native-svg';
import { AnimatedBox, Box } from '../../primitives';
import { useTheme } from '../../theme';
import { AvatarSizes, AvatarStatusProps } from './avatarPropTypes';
interface TypingStatusProps {
  size: Partial<AvatarSizes>;
  parentsBackground: string;
}

const TypingComponent: React.FC<TypingStatusProps> = ({
  size,
  parentsBackground,
}) => {
  const tailwind = useTheme();
  const avatarStatusTheme = useTheme('avatar');

  const dot1animation = useSharedValue(0);
  const dot2animation = useSharedValue(0);
  const dot3animation = useSharedValue(0);

  React.useEffect(() => {
    dot1animation.value = withDelay(
      300,
      withRepeat(
        withTiming(1, {
          duration: 500,
          easing: Easing.linear,
        }),
        -1,
        true
      )
    );
  }, [dot1animation]);

  React.useEffect(() => {
    dot2animation.value = withDelay(
      300,
      withRepeat(
        withTiming(1, {
          duration: 600,
          easing: Easing.linear,
        }),
        -1,
        true
      )
    );
  }, [dot2animation]);

  React.useEffect(() => {
    dot3animation.value = withDelay(
      300,
      withRepeat(
        withTiming(1, {
          duration: 700,
          easing: Easing.linear,
        }),
        -1,
        true
      )
    );
  }, [dot3animation]);

  const dot1animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(dot1animation.value, [0, 1], [1, 0.5]),
    };
  });
  const dot2animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(dot2animation.value, [0, 1], [1, 0.5]),
    };
  });
  const dot3animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(dot3animation.value, [0, 1], [1, 0.5]),
    };
  });
  return (
    <Box
      style={[
        tailwind.style(avatarStatusTheme.status.typing.container),
        avatarStatusTheme.status.position,
        avatarStatusTheme.status.outerBorderRadius,
        { borderColor: parentsBackground, backgroundColor: parentsBackground },
      ]}
    >
      <Box
        style={tailwind.style([
          avatarStatusTheme.status.typing.base,
          avatarStatusTheme.status.typing.size[size],
        ])}
      >
        <AnimatedBox
          style={[
            tailwind.style([
              avatarStatusTheme.status.typing.innerDots.base,
              avatarStatusTheme.status.typing.innerDots.size[size],
            ]),
            dot1animatedStyle,
          ]}
        />
        <AnimatedBox
          style={[
            tailwind.style([
              avatarStatusTheme.status.typing.innerDots.base,
              avatarStatusTheme.status.typing.innerDots.size[size],
            ]),
            dot2animatedStyle,
          ]}
        />
        {(size === 'xl' || size === '2xl' || size === '3xl') && (
          <AnimatedBox
            style={[
              tailwind.style([
                avatarStatusTheme.status.typing.innerDots.base,
                avatarStatusTheme.status.typing.innerDots.size[size],
              ]),
              dot3animatedStyle,
            ]}
          />
        )}
      </Box>
    </Box>
  );
};

export const AvatarStatus: React.FC<AvatarStatusProps> = ({
  status,
  size = 'xl',
  parentsBackground = 'white',
}) => {
  const tailwind = useTheme();
  const avatarStatusTheme = useTheme('avatar');
  switch (status) {
    case 'active': {
      return (
        <Box
          style={[
            tailwind.style(avatarStatusTheme.status.active.container),
            avatarStatusTheme.status.outerBorderRadius,
            avatarStatusTheme.status.position,
            { borderColor: parentsBackground },
          ]}
        >
          <Box
            style={tailwind.style([
              avatarStatusTheme.status.active.base,
              avatarStatusTheme.status.active.size[size],
            ])}
          />
        </Box>
      );
    }
    case 'away': {
      return (
        <Box
          style={[
            tailwind.style([avatarStatusTheme.status.away.container]),
            avatarStatusTheme.status.outerBorderRadius,
            avatarStatusTheme.status.position,
            {
              borderColor: parentsBackground,
              backgroundColor: parentsBackground,
            },
          ]}
        >
          <Box style={tailwind.style(avatarStatusTheme.status.away.size[size])}>
            <Svg width="100%" height="100%" viewBox="0 0 4 4" fill="none">
              <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2 4C3.10457 4 4 3.10457 4 2C4 0.895431 3.10457 0 2 0C0.895431 0 0 0.895431 0 2C0 3.10457 0.895431 4 2 4ZM2 3.25C2.69036 3.25 3.25 2.69036 3.25 2C3.25 1.30964 2.69036 0.75 2 0.75C1.30964 0.75 0.75 1.30964 0.75 2C0.75 2.69036 1.30964 3.25 2 3.25Z"
                fill={tailwind.getColor('text-gray-500')}
              />
            </Svg>
          </Box>
        </Box>
      );
    }
    case 'sleep': {
      return (
        <Box
          style={[
            tailwind.style([avatarStatusTheme.status.sleep.container]),
            avatarStatusTheme.status.outerBorderRadius,
            avatarStatusTheme.status.position,
            {
              borderColor: parentsBackground,
              backgroundColor: parentsBackground,
            },
          ]}
        >
          <Box
            style={tailwind.style(avatarStatusTheme.status.sleep.size[size])}
          >
            <Svg width="100%" height="100%" viewBox="0 0 4 4" fill="none">
              <Path
                d="M3.97107 2.35964C3.98707 2.27194 3.88243 2.2173 3.8072 2.26514C3.57467 2.413 3.29869 2.49864 3.00271 2.49864C2.17354 2.49864 1.50136 1.82646 1.50136 0.997285C1.50136 0.701308 1.587 0.425334 1.73486 0.192796C1.7827 0.117568 1.72806 0.0129337 1.64036 0.0289269C0.707321 0.199076 0 1.01603 0 1.99819C0 3.10376 0.896241 4 2.00181 4C2.98397 4 3.80092 3.29268 3.97107 2.35964Z"
                fill={tailwind.getColor('text-gray-500')}
              />
            </Svg>
          </Box>
        </Box>
      );
    }
    case 'typing': {
      return (
        <TypingComponent size={size} parentsBackground={parentsBackground} />
      );
    }
  }
  return null;
};
