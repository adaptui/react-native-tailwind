import { View, ViewProps } from "react-native";
import { Box, useTheme } from "@adaptui/react-native-tailwind";

import { createComponent, RenderProp } from "../../utils";
import { Button, ButtonProps } from "../button";

interface DividerProps extends ViewProps {
  subHeaderText?: string;
  orientation?: "horizontal" | "vertical";
  subHeader?: RenderProp<ButtonProps>;
  inset: number;
  height: number;
  insetType: "left" | "right" | "top" | "bottom";
  onPress: () => void;
}

const RNDivider = ({
  subHeaderText = "Hello",
  orientation,
  subHeader,
  inset,
  insetType = "left",
  onPress,
}: Partial<DividerProps>) => {
  const tailwind = useTheme();

  return (
    <Box style={tailwind.style("overflow-hidden")}>
      <View
        style={tailwind.style(
          orientation !== "vertical"
            ? "flex-row items-center"
            : "self-stretch items-center",
        )}
      >
        <View
          style={tailwind.style(
            orientation !== "vertical"
              ? "border-b border-gray-300 flex-1 h-0"
              : "border-r border-gray-300 h-100 w-0",
            orientation !== "vertical" && insetType === "left"
              ? `left-[${inset}]`
              : insetType === "right"
              ? `right-[${inset}]`
              : insetType === "top"
              ? `top-[${inset}]`
              : insetType === "bottom"
              ? `bottom-[${inset}]`
              : "",
          )}
        />

        <View
          style={tailwind.style(
            insetType === "left"
              ? `left-[${inset}]`
              : insetType === "right"
              ? `right-[${inset}]`
              : insetType === "bottom"
              ? `bottom-[${inset}]`
              : insetType === "top"
              ? `top-[${inset}]`
              : "",
          )}
        >
          {!subHeader && (
            <Button themeColor="base" variant="outline" onPress={onPress}>
              {subHeaderText}
            </Button>
          )}
          <>{subHeader}</>
        </View>

        <View
          style={tailwind.style(
            orientation !== "vertical"
              ? "border-b border-gray-300 flex-1 h-0"
              : "border-r border-gray-300 h-100 w-0",
            orientation !== "vertical" && insetType === "left"
              ? `left-[${inset}]`
              : insetType === "right"
              ? `right-[${inset}]`
              : insetType === "top"
              ? `top-[${inset}]`
              : insetType === "bottom"
              ? `bottom-[${inset}]`
              : "",
          )}
        />
      </View>
    </Box>
  );
};

export const Divider = createComponent<Partial<DividerProps>>(RNDivider, {
  shouldMemo: true,
});
