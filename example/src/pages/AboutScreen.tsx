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
    <Box style={tailwind.style("flex-1 mx-2 ")}>
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

        <Box style={tailwind.style("justify-center w-full mt-auto")}>
          <Button
            onPress={() => {
              navigation.navigate("Components");
            }}
            size="lg"
            style={tailwind.style("w-full")}
          >
            View Components
          </Button>
        </Box>

        <Box style={tailwind.style("flex-row w-full justify-center mt-4")}>
          <Box style={tailwind.style("flex-1")}>
            <Button
              prefix={
                <Icon
                  icon={<Github fill={tailwind.getColor("text-white-500")} />}
                />
              }
              onPress={() => {
                Linking.openURL(
                  "https://github.com/adaptui/react-native-tailwind",
                );
              }}
              size="lg"
            >
              Github
            </Button>
          </Box>

          <Box style={tailwind.style("flex-1")}>
            <Button
              prefix={
                <Icon
                  icon={<Dribble fill={tailwind.getColor("text-white-500")} />}
                />
              }
              onPress={() => {
                Linking.openURL("https://dribbble.com/timelessco");
              }}
              style={tailwind.style("ml-3")}
              size="lg"
            >
              Dribble
            </Button>
          </Box>
        </Box>
        <Text style={tailwind.style("font-medium pt-2")}>
          version: {Constants.manifest.version}(11)
        </Text>
      </Box>
    </Box>
  );
};

export default AboutScreen;
