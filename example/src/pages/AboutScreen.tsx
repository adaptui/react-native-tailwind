import React, { useMemo, useRef } from "react";
import { Animated, Easing, Image, Linking } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Path, Pattern, Rect, Svg } from "react-native-svg";
import { Box, Button, Text, useTheme } from "@adaptui/react-native-tailwind";
import Constants from "expo-constants";

import { Group } from "../components";

const AboutScreen = ({ navigation }) => {
  const { bottom } = useSafeAreaInsets();
  const tailwind = useTheme();

  function useMountEffect(effect: React.EffectCallback): void {
    React.useEffect(() => {
      effect();
    }, []); // eslint-disable-line
  }

  const Background = props => {
    const { color, stroke, gap, transform } = props;
    const { x, y, k } = transform || { x: 0, y: 0, k: 1 };
    const scaledGap = (gap || 15) * k;
    const patternId = useMemo(
      () => `patten-${Math.floor(Math.random() * 100000)}`,
      [],
    );

    return (
      <Svg
        style={[tailwind.style("w-full h-full absolute"), { zIndex: -100 }]}
        width={"100%"}
        height={"100%"}
      >
        <Pattern
          id={patternId}
          x={x % scaledGap}
          y={y % scaledGap}
          width={scaledGap}
          height={scaledGap}
          patternUnits={"userSpaceOnUse"}
        >
          <Path
            stroke={color || "#dddddd"}
            strokeWidth={stroke || 1}
            d={`M${scaledGap / 2} 0 V${scaledGap} M0 ${
              scaledGap / 2
            } H${scaledGap}`}
          />
        </Pattern>
        <Rect
          x={0}
          y={0}
          width={"100%"}
          height={"100%"}
          fill={`url(#${patternId})`}
        />
      </Svg>
    );
  };

  const EasingLogo = () => {
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

  return (
    <Box style={tailwind.style("flex-1")}>
      <Background color={tailwind.getColor("text-gray-300")} />
      <Box
        style={tailwind.style(
          `flex-1 items-center px-2  pb-[${bottom === 0 ? 16 : bottom}px]`,
        )}
      >
        <Box style={tailwind.style("items-center mt-auto")}>
          <EasingLogo />
          <Text style={tailwind.style("font-bold text-2xl")}>AdaptUI</Text>
          <Text style={tailwind.style("p-2 text-center")}>
            {Constants.manifest.description}
          </Text>
          <Text style={tailwind.style("font-medium")}>
            Made with 💖 by
            <Text style={tailwind.style("font-bold")}>Timeless</Text>
          </Text>
        </Box>

        <Group label="" style={tailwind.style("mt-auto shadow-xl")}>
          <Box style={tailwind.style("flex-col w-full p-2")}>
            <Button
              onPress={() => {
                navigation.navigate("Components");
              }}
              size="lg"
            >
              View Components
            </Button>
            <Button
              onPress={() => {
                Linking.openURL("https://timeless.co");
              }}
              size="lg"
              style={tailwind.style("mt-6")}
            >
              Visit our website
            </Button>
            <Button
              onPress={() => {
                Linking.openURL("https://twitter.com/timelessco");
              }}
              size="lg"
              style={tailwind.style("mt-6")}
            >
              Follow us on Twitter
            </Button>
            <Button
              onPress={() => {
                Linking.openURL("mailto:hello@timeless.co");
              }}
              size="lg"
              style={tailwind.style("mt-6")}
            >
              Contact Us
            </Button>
          </Box>
        </Group>
        <Text style={tailwind.style("font-medium pt-2")}>
          version: {Constants.manifest.version}(4)
        </Text>
      </Box>
    </Box>
  );
};

export default AboutScreen;
