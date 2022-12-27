import React, { useEffect, useState } from "react";
import { ImageSourcePropType } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
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

  const [name, setName] = useState<string | undefined>(undefined);
  const [isSquared, setIsSquared] = useState<boolean>(false);
  const [selectedSize, setSelectedSize] = useState<AvatarSizes>("xl");
  const [hasImage, setHasImage] = useState<boolean>(true);
  const [selectedVariant, setSelectedVariant] = useState<undefined | string>(
    undefined,
  );
  const [hasParentsBackground, setHasParentsBackground] =
    useState<boolean>(false);
  const [hasRing, setHasRing] = useState<boolean>(false);
  const [isMax, setIsMax] = useState<boolean>(false);
  const [maxNum, setMaxNum] = useState(10);
  const [parentsBackground, setParentsBackground] = useState("bg-white-900");
  const { bottom } = useSafeAreaInsets();

  useEffect(() => {
    switch (selectedVariant) {
      case "withInitials":
        setName("Sandeep Prabhakaran");
        setHasImage(false);
        break;
      case "withImage":
        setHasImage(true);
        setName(undefined);
        break;
      default:
        setName(undefined);
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
          cx(`flex-1 justify-center items-center ${parentsBackground}`),
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
                name={!name ? undefined : image.name}
                size={selectedSize}
                src={
                  !hasImage
                    ? undefined
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
          `rounded-t-lg shadow-lg bg-gray-100 justify-end px-2 pt-2 pb-[${
            bottom === 0 ? 16 : bottom
          }px]`,
        )}
      >
        <RadioGroup
          value={selectedSize}
          onChange={(value: string) => setSelectedSize(value as AvatarSizes)}
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
          onChange={(value: undefined | string) => {
            setSelectedVariant(value);
          }}
          orientation="horizontal"
        >
          <Group label="Variants" style={tailwind.style("mt-2")}>
            <Radio value={undefined} label="default" />
            <Radio value="withInitials" label="initials" />
            <Radio value="withImage" label="image" />
          </Group>
        </RadioGroup>
        <Box
          style={tailwind.style("flex flex-row items-start flex-wrap w-full")}
        >
          <Switch
            label="squared"
            state={isSquared}
            onStateChange={setIsSquared}
            size="md"
            style={tailwind.style("mt-2 ml-1")}
          />
          <Switch
            label="parents background"
            state={hasParentsBackground}
            onStateChange={setHasParentsBackground}
            size="md"
            style={tailwind.style("mt-2 ml-1")}
          />
          <Switch
            label="ring"
            state={hasRing}
            onStateChange={setHasRing}
            size="md"
            style={tailwind.style("mt-2 ml-1")}
          />

          <Switch
            label="max"
            state={isMax}
            onStateChange={setIsMax}
            size="md"
            style={tailwind.style("mt-2 ml-1")}
          />
        </Box>
      </Box>
    </Box>
  );
};
