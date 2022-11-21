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

export const AvatarScreen = () => {
  const tailwind = useTheme();

  const [status, setStatus] = useState(null);
  const [name, setName] = useState(null);
  const [squared, setSquared] = useState(false);
  const [size, setSize] = useState<AvatarSizes>("xl");
  const [imageUri, setImageUri] = useState(null);
  const [variant, setVariant] = useState(null);
  const [toggleBg, setToggleBg] = useState(false);
  const [parentsBackground, setParentsBackground] = useState("bg-white-900");

  useEffect(() => {
    switch (variant) {
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
  }, [variant, toggleBg]);

  return (
    <Box style={tailwind.style("flex-1 justify-center bg-white-900")}>
      <Box
        style={tailwind.style(
          cx(`flex-1 px-2 justify-center items-center ${parentsBackground} `),
        )}
      >
        <Avatar
          name={name}
          size={size}
          status={status}
          squared={squared}
          style={tailwind.style("my-1")}
          src={imageUri}
          key={imageUri}
          parentsBackground={parentsBackground}
        />
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
          size="sm"
        >
          <Radio value="xs" label="xs" />
          <Radio value="sm" label="sm" />
          <Radio value="md" label="md" />
          <Radio value="lg" label="lg" />
          <Radio value="xl" label="xl" />
          <Radio value="2xl" label="2xl" />
          <Radio value="3xl" label="3xl" />
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
        <RadioGroup
          value={status}
          onChange={value => setStatus(value as AvatarStatusType)}
          orientation="horizontal"
          size="sm"
        >
          <Radio value={null} label="default" />
          <Radio value="active" label="active" />
          <Radio value="away" label="away" />
          <Radio value="sleep" label="sleep" />
          <Radio value="typing" label="typing" />
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
            style={tailwind.style("mt-2")}
          />
          <Switch
            label="parents background"
            state={toggleBg}
            onStateChange={setToggleBg}
            size="md"
            style={tailwind.style("mt-2 ml-2")}
          />
        </Box>
      </Box>
    </Box>
  );
};
