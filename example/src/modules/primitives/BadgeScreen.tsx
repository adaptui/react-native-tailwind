import React from "react";
// import {
//   useAnimatedStyle,
//   useSharedValue,
//   withSpring,
// } from "react-native-reanimated";
import {
  // AdaptAnimatedBox,
  // AnimatedBox,
  BadgeNew,
  BadgeText,
  BadgeWrapper,
  Box,
  Button,
  SpinnerNew,
} from "@adaptui/react-native-tailwind";

export const BadgeScreen = () => {
  // const x = useSharedValue(1);
  // const animatedStyles = useAnimatedStyle(() => {
  //   return {
  //     transform: [
  //       { scale: withSpring(x.value) },
  //       { translateX: withSpring(x.value * 37) },
  //       { translateY: withSpring(x.value * 23) },
  //     ],
  //   };
  // });
  return (
    <Box className="flex-1 justify-center items-center bg-white-900">
      {/* <AnimatedBox
        className="h-10 w-10 bg-grayDark-200 rounded-md border-red-200"
        style={animatedStyles}
      />
      <AdaptAnimatedBox
        className="h-10 w-10 bg-grayDark-200 rounded-md border-[1.5px] border-red-200"
        style={animatedStyles}
      /> */}
      <Button onPress={() => (x.value = Math.random())}>Animate</Button>
      <SpinnerNew track="visible" />
      <BadgeNew size="lg" className="my-1" themeColor="secondary">
        Scheduled
      </BadgeNew>
      <BadgeNew size="md" className="my-1 bg-teal-500" themeColor="secondary">
        <>Badge</>
        <BadgeWrapper className="bg-yellow-500" />
        <BadgeText className="text-red-500" />
      </BadgeNew>
    </Box>
  );
};
