import React, { useEffect, useState } from "react";
import { ImageSourcePropType } from "react-native";
import {
  Avatar,
  AvatarGroup,
  AvatarSizes,
  Box,
  cx,
  Radio,
  RadioGroup,
  Switch,
  useTheme,
} from "@adaptui/react-native-tailwind";

export const AvatarGroupScreen = () => {
  const tailwind = useTheme();

  const [name, setName] = useState(null);
  const [squared, setSquared] = useState(false);
  const [size, setSize] = useState<AvatarSizes>("xl");
  const [imageUri, setImageUri] = useState(true);
  const [variant, setVariant] = useState(null);
  const [toggleBg, setToggleBg] = useState(false);
  const [ring, setRing] = useState(false);
  const [max, setMax] = useState(false);
  const [maxNum, setMaxNum] = useState(10);
  const [parentsBackground, setParentsBackground] = useState("bg-white-900");

  useEffect(() => {
    switch (variant) {
      case "withInitials":
        setName("Sandeep Prabhakaran");
        setImageUri(null);
        break;
      case "withImage":
        setImageUri(true);
        setName(null);
        break;
      default:
        setName(null);
        setImageUri(null);
    }

    switch (toggleBg) {
      case true:
        setParentsBackground("bg-black-900");
        break;
      case false:
        setParentsBackground("bg-white-900");
        break;
      default:
        setParentsBackground("bg-white-900");
    }

    switch (max) {
      case true:
        setMaxNum(3);
        break;
      default:
        setMaxNum(10);
    }
  }, [variant, toggleBg, max]);

  const avatars = [
    {
      uri: "https://i.pravatar.cc/300??img=6",
      name: "Navin Moorthy",
    },
    {
      uri: "https://i.pravatar.cc/300??img=13",
      name: "Karthik Balasubramanian",
    },

    {
      uri: "https://i.pravatar.cc/300??img=25",
      name: "Sandeep Prabhakaran",
    },
    {
      uri: "https://i.pravatar.cc/300??img=33",
      name: "Abhishek MG",
    },
    {
      uri: "https://i.pravatar.cc/300??img=45",
      name: "Udhaya Chandran",
    },
  ];

  return (
    <Box style={tailwind.style("flex-1 justify-center bg-white-900")}>
      <Box
        style={tailwind.style(
          cx(`flex-1 px-2 justify-center items-center ${parentsBackground} `),
        )}
      >
        <AvatarGroup
          squared={squared}
          size={size}
          showRing={ring}
          ringColor={toggleBg ? "black" : "white"}
          max={maxNum}
        >
          {avatars.map((image, i) => {
            return (
              <Avatar
                name={!name ? null : image.name}
                size={size}
                src={
                  !imageUri
                    ? null
                    : ({
                        uri: image.uri,
                        cache: "reload",
                      } as ImageSourcePropType)
                }
                key={i}
                parentsBackground={parentsBackground}
              />
            );
          })}
        </AvatarGroup>
      </Box>
      <Box
        style={tailwind.style(
          "py-2 rounded-t-lg shadow-lg bg-gray-100 justify-end items-center",
        )}
      >
        <RadioGroup
          value={size}
          onChange={value => setSize(value as AvatarSizes)}
          orientation="horizontal"
        >
          <Box
            style={tailwind.style(
              "flex flex-row flex-wrap justify-center items-center",
            )}
          >
            <Radio value="xs" label="xs" />
            <Radio value="sm" label="sm" />
            <Radio value="md" label="md" />
            <Radio value="lg" label="lg" />
            <Radio value="xl" label="xl" />
            <Radio value="2xl" label="2xl" />
            <Radio value="3xl" label="3xl" />
          </Box>
        </RadioGroup>
        <RadioGroup
          value={variant}
          onChange={value => {
            setVariant(value as unknown);
          }}
          orientation="horizontal"
        >
          <Radio value={null} label="default" />
          <Radio value="withInitials" label="initials" />
          <Radio value="withImage" label="image" />
        </RadioGroup>
        <Box
          style={tailwind.style(
            "flex flex-row justify-center flex-wrap w-full",
          )}
        >
          <Switch
            label="squared"
            state={squared}
            onStateChange={setSquared}
            size="md"
            style={tailwind.style("mt-1")}
          />
          <Switch
            label="parents background"
            state={toggleBg}
            onStateChange={setToggleBg}
            size="md"
            style={tailwind.style("mt-1 ml-1")}
          />
        </Box>
        <Box
          style={tailwind.style(
            "flex flex-row justify-center flex-wrap w-full",
          )}
        >
          <Switch
            label="ring"
            state={ring}
            onStateChange={setRing}
            size="md"
            style={tailwind.style("mt-1 ml-1")}
          />

          <Switch
            label="max"
            state={max}
            onStateChange={setMax}
            size="md"
            style={tailwind.style("mt-1 ml-1")}
          />
        </Box>
      </Box>
    </Box>
  );
};
