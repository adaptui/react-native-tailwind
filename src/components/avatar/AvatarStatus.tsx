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
import { AnimatedBox, Box, useTheme } from '../../index';
import { SleepIndicator } from '../../assets';
import { AvatarSizes, AvatarStatusProps } from './types';
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
  const noOfDots = size === 'xl' || size === '2xl' || size === '3xl' ? 3 : 2;
  const progressTranslate = useSharedValue(-1);
  React.useEffect(() => {
    progressTranslate.value = withDelay(
      500,
      withRepeat(
        withTiming(1, {
          easing: Easing.linear,
          duration: 700,
        }),
        -1,
        false
      )
    );
  }, [progressTranslate]);
  const animatedColorAnimationLG = useAnimatedStyle(() => {
    return {
      opacity: interpolate(progressTranslate.value, [-1, 0, 1], [0.5, 1, 1]),
    };
  });
  const animatedColorAnimationLG2 = useAnimatedStyle(() => {
    return {
      opacity: interpolate(progressTranslate.value, [-1, 0, 1], [1, 0.5, 1]),
    };
  });
  const animatedColorAnimationLG3 = useAnimatedStyle(() => {
    return {
      opacity: interpolate(progressTranslate.value, [-1, 0, -1], [1, 1, 0.5]),
    };
  });
  const animatedColorAnimationSM = useAnimatedStyle(() => {
    return {
      opacity: interpolate(progressTranslate.value, [-1, 1], [0.5, 1]),
    };
  });
  const animatedColorAnimationSM2 = useAnimatedStyle(() => {
    return {
      opacity: interpolate(progressTranslate.value, [-1, 1], [1, 0.5]),
    };
  });
  return (
    <Box
      style={[
        tailwind.style(
          avatarStatusTheme.status.typing.base,
          avatarStatusTheme.status.typing.size[size]
        ),
        avatarStatusTheme.status.typing.position,
        { borderColor: parentsBackground },
      ]}
    >
      {noOfDots === 2 && (
        <>
          <AnimatedBox
            style={[
              tailwind.style(
                avatarStatusTheme.status.typing.innerDots.base,
                avatarStatusTheme.status.typing.innerDots.size[size]
              ),
              animatedColorAnimationSM,
            ]}
          />
          <AnimatedBox
            style={[
              tailwind.style(
                avatarStatusTheme.status.typing.innerDots.base,
                avatarStatusTheme.status.typing.innerDots.size[size]
              ),
              animatedColorAnimationSM2,
            ]}
          />
        </>
      )}
      {noOfDots === 3 && (
        <>
          <AnimatedBox
            style={[
              tailwind.style(
                avatarStatusTheme.status.typing.innerDots.base,
                avatarStatusTheme.status.typing.innerDots.size[size]
              ),
              animatedColorAnimationLG,
            ]}
          />
          <AnimatedBox
            style={[
              tailwind.style(
                avatarStatusTheme.status.typing.innerDots.base,
                avatarStatusTheme.status.typing.innerDots.size[size]
              ),
              animatedColorAnimationLG2,
            ]}
          />
          <AnimatedBox
            style={[
              tailwind.style(
                avatarStatusTheme.status.typing.innerDots.base,
                avatarStatusTheme.status.typing.innerDots.size[size]
              ),
              animatedColorAnimationLG3,
            ]}
          />
        </>
      )}
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
            tailwind.style([
              avatarStatusTheme.status.active.base,
              avatarStatusTheme.status.size[size],
            ]),
            avatarStatusTheme.status.outerBorderRadius,
            avatarStatusTheme.status.position,
            { borderColor: parentsBackground },
          ]}
        />
      );
    }
    case 'away': {
      return (
        <Box
          style={[
            tailwind.style([
              avatarStatusTheme.status.away.base,
              avatarStatusTheme.status.size[size],
            ]),
            avatarStatusTheme.status.outerBorderRadius,
            avatarStatusTheme.status.position,
            {
              borderColor: parentsBackground,
              backgroundColor: parentsBackground,
            },
          ]}
        >
          <Box
            style={[
              tailwind.style([avatarStatusTheme.status.away.innerBox.base]),
              avatarStatusTheme.status.away.innerBox.size[size],
            ]}
          />
        </Box>
      );
    }
    case 'sleep': {
      return (
        <Box
          style={[
            tailwind.style([
              avatarStatusTheme.status.sleep.base,
              avatarStatusTheme.status.size[size],
            ]),
            avatarStatusTheme.status.outerBorderRadius,
            avatarStatusTheme.status.position,
            {
              borderColor: parentsBackground,
              backgroundColor: parentsBackground,
            },
          ]}
        >
          <SleepIndicator size={size} />
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
