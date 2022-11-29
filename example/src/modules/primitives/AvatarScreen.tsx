import React, { useEffect, useState } from "react";
import {
  Avatar,
  AvatarSizes,
  AvatarStatusType,
  Box,
  cx,
  Radio,
  RadioGroup,
  Switch,
  useTheme,
} from "@adaptui/react-native-tailwind";

import { Group } from "../../components";

export const AvatarScreen = () => {
  const tailwind = useTheme();

  const [selectedStatus, setSelectedStatus] = useState<AvatarStatusType>(null);
  const [name, setName] = useState<string>(null);
  const [isSquared, setIsSquared] = useState<boolean>(false);
  const [selectedSize, setSelectedSize] = useState<AvatarSizes>("xl");
  const [imageUri, setImageUri] = useState(null);
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [hasParentBackground, setHasParentBackground] =
    useState<boolean>(false);
  const [parentsBackground, setParentsBackground] =
    useState<string>("bg-white-900");

  useEffect(() => {
    switch (selectedVariant) {
      case "withInitials":
        setName("Sandeep Prabhakaran");
        setImageUri(null);
        break;
      case "withImage":
        setImageUri({
          uri: "https://i.pravatar.cc/300??img=5",
          cache: "reload",
        });
        setName(null);
        break;
      default:
        setName(null);
        setImageUri(null);
    }

    switch (hasParentBackground) {
      case true:
        setParentsBackground("bg-black-900");
        break;
      case false:
        setParentsBackground("bg-white-900");
        break;
      default:
        setParentsBackground("bg-white-900");
    }
  }, [selectedVariant, hasParentBackground]);

  return (
    <Box style={tailwind.style("flex-1 justify-center bg-white-900")}>
      <Box
        style={tailwind.style(
          cx(`flex-1 px-2 justify-center items-center ${parentsBackground} `),
        )}
      >
        <Avatar
          name={name}
          size={selectedSize}
          status={selectedStatus}
          squared={isSquared}
          style={tailwind.style("my-1")}
          src={imageUri}
          parentsBackground={parentsBackground}
          key={imageUri}
        />
      </Box>
      <Box
        style={tailwind.style(
          "p-2 rounded-t-lg shadow-lg bg-gray-100 justify-end",
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

        <RadioGroup
          value={selectedStatus}
          onChange={value => setSelectedStatus(value as AvatarStatusType)}
          orientation="horizontal"
        >
          <Group label="Status" style={tailwind.style("mt-2")}>
            <Radio value={null} label="default" />
            <Radio value="active" label="active" />
            <Radio value="away" label="away" />
            <Radio value="sleep" label="sleep" />
            <Radio value="typing" label="typing" />
          </Group>
        </RadioGroup>
        <Box
          style={tailwind.style(
            "flex flex-row justify-start flex-wrap w-full mt-2",
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
            state={hasParentBackground}
            onStateChange={setHasParentBackground}
            size="md"
            style={tailwind.style(" ml-2")}
          />
        </Box>
      </Box>
    </Box>
  );
};
