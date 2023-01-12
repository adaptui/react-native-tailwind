import React, { useRef } from "react";
import { Animated, Easing, Image } from "react-native";
import { useTheme } from "@adaptui/react-native-tailwind";

function useMountEffect(effect: React.EffectCallback): void {
  React.useEffect(() => {
    effect();
  }, [effect]);
}
const EasingLogo = () => {
  const tailwind = useTheme();
  const easeValue = useRef(new Animated.Value(0));

  useMountEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(easeValue.current, {
          toValue: 10,
          duration: 1000,
          easing: Easing.bezier(0.56, 0.15, 0.45, 0.87),
          useNativeDriver: true,
        }),
        Animated.timing(easeValue.current, {
          toValue: 0,
          duration: 1000,
          easing: Easing.bezier(0.56, 0.15, 0.45, 0.87),
          useNativeDriver: true,
        }),
      ]),
    ).start();
  });

  const ease = easeValue.current.interpolate({
    inputRange: [0, 10],
    outputRange: [0, 5],
  });

  return (
    <Animated.View
      style={{
        transform: [{ translateY: ease }],
      }}
    >
      <Image
        source={require("../../assets/logo.png")}
        style={tailwind.style("h-50 w-50")}
      />
    </Animated.View>
  );
};

export default EasingLogo;
