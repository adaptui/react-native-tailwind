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

import { Group } from "../../components";

export const AvatarGroupScreen = () => {
  const tailwind = useTheme();

  const [name, setName] = useState(null);
  const [isSquared, setIsSquared] = useState<boolean>(false);
  const [selectedSize, setSelectedSize] = useState<AvatarSizes>("xl");
  const [hasImage, setHasImage] = useState<boolean>(true);
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [hasParentsBackground, setHasParentsBackground] =
    useState<boolean>(false);
  const [hasRing, setHasRing] = useState<boolean>(false);
  const [isMax, setIsMax] = useState<boolean>(false);
  const [maxNum, setMaxNum] = useState(10);
  const [parentsBackground, setParentsBackground] = useState("bg-white-900");

  useEffect(() => {
    switch (selectedVariant) {
      case "withInitials":
        setName("Sandeep Prabhakaran");
        setHasImage(false);
        break;
      case "withImage":
        setHasImage(true);
        setName(null);
        break;
      default:
        setName(null);
        setHasImage(false);
    }

    switch (hasParentsBackground) {
      case true:
        setParentsBackground("bg-black-900");
        break;
      case false:
        setParentsBackground("bg-white-900");
        break;
      default:
        setParentsBackground("bg-white-900");
    }

    switch (isMax) {
      case true:
        setMaxNum(3);
        break;
      default:
        setMaxNum(10);
    }
  }, [selectedVariant, hasParentsBackground, isMax]);

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
          squared={isSquared}
          size={selectedSize}
          showRing={hasRing}
          ringColor={hasParentsBackground ? "black" : "white"}
          max={maxNum}
        >
          {avatars.map((image, i) => {
            return (
              <Avatar
                name={!name ? null : image.name}
                size={selectedSize}
                src={
                  !hasImage
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
          "rounded-t-lg shadow-lg bg-gray-100 justify-end p-2",
        )}
      >
        <RadioGroup
          value={selectedSize}
          onChange={value => setSelectedSize(value as AvatarSizes)}
          orientation="horizontal"
        >
          <Group label="Sizes">
            <Radio value="xs" label="xs" />
            <Radio value="sm" label="sm" />
            <Radio value="md" label="md" />
            <Radio value="lg" label="lg" />
            <Radio value="xl" label="xl" />
            <Radio value="2xl" label="2xl" />
            <Radio value="3xl" label="3xl" />
          </Group>
        </RadioGroup>
        <RadioGroup
          value={selectedVariant}
          onChange={value => {
            setSelectedVariant(value as unknown);
          }}
          orientation="horizontal"
        >
          <Group label="Variants" style={tailwind.style("mt-2")}>
            <Radio value={null} label="default" />
            <Radio value="withInitials" label="initials" />
            <Radio value="withImage" label="image" />
          </Group>
        </RadioGroup>
        <Box
          style={tailwind.style(
            "flex flex-row items-start flex-wrap w-full mt-2",
          )}
        >
          <Switch
            label="squared"
            state={isSquared}
            onStateChange={setIsSquared}
            size="md"
          />
          <Switch
            label="parents background"
            state={hasParentsBackground}
            onStateChange={setHasParentsBackground}
            size="md"
            style={tailwind.style("ml-1")}
          />
          <Switch
            label="ring"
            state={hasRing}
            onStateChange={setHasRing}
            size="md"
            style={tailwind.style("mt-1")}
          />

          <Switch
            label="max"
            state={isMax}
            onStateChange={setIsMax}
            size="md"
            style={tailwind.style("mt-1 ml-1")}
          />
        </Box>
      </Box>
    </Box>
  );
};
