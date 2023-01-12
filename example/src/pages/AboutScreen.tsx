import React from "react";
import { Linking } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  Box,
  Button,
  Dribble,
  Github,
  Icon,
  Text,
  useTheme,
} from "@adaptui/react-native-tailwind";
import Constants from "expo-constants";

import Background from "../components/Background";
import EasingLogo from "../components/EasingLogo";

const AboutScreen = ({ navigation }) => {
  const { bottom } = useSafeAreaInsets();
  const tailwind = useTheme();

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
            <Text style={tailwind.style("font-bold")}> Timeless</Text>
          </Text>
        </Box>

        <Box
          style={tailwind.style(
            "flex-row flex-wrap justify-center items-center mt-auto",
          )}
        >
          <Box style={tailwind.style("justify-center items-center w-full")}>
            <Button
              onPress={() => {
                navigation.navigate("Components");
              }}
              size="xl"
            >
              View Components
            </Button>
          </Box>

          <Box
            style={tailwind.style(
              " flex-row justify-center items-center w-full mt-4",
            )}
          >
            <Button
              prefix={
                <Icon
                  icon={<Github fill={tailwind.getColor("text-white-500")} />}
                />
              }
              onPress={() => {
                Linking.openURL("https://github.com/timelessco");
              }}
              size="xl"
            >
              Github
            </Button>
            <Button
              prefix={
                <Icon
                  icon={<Dribble fill={tailwind.getColor("text-white-500")} />}
                />
              }
              onPress={() => {
                Linking.openURL("https://dribbble.com/timelessco");
              }}
              size="xl"
              style={tailwind.style("ml-2")}
            >
              Dribble
            </Button>
          </Box>
        </Box>
        <Text style={tailwind.style("font-medium pt-2")}>
          version: {Constants.manifest.version}(5)
        </Text>
      </Box>
    </Box>
  );
};

export default AboutScreen;
