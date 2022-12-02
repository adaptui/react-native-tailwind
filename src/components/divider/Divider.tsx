import { ReactElement } from "react";
import { StyleProp, ViewStyle } from "react-native";
import { Box, useTheme } from "@adaptui/react-native-tailwind";

import { createComponent, cx, styleAdapter } from "../../utils";
import { Button, ButtonProps } from "../button";

interface DividerProps {
  /**
   * Label name
   */
  label: string | null;
  /**
   * The orientation of the divider
   * @default horizontal
   */
  orientation: "horizontal" | "vertical";
  /**
   * Pass custom component instead of deafult component.
   */
  slot: ReactElement;
  /**
   * The position of the label/slot
   * @default start
   */
  labelPosition: "start" | "center" | "end";
  /**
   * A prop that is passed for the button component
   */
  buttonProps: ButtonProps;
  /**
   * A style prop that is passed for the divider line
   */
  dividerStyle: StyleProp<ViewStyle>;
}

const RNDivider = (props: Partial<DividerProps>) => {
  const {
    label,
    orientation = "horizontal",
    slot,
    labelPosition = "start",
    buttonProps,
    dividerStyle,
  } = props;
  const tailwind = useTheme();
  const dividerTheme = useTheme("divider");
  return (
    <Box
      style={tailwind.style(
        cx(dividerTheme[orientation].orientaion),
        orientation === "vertical" ? "overflow-hidden" : {},
      )}
    >
      <Box
        style={[
          tailwind.style(cx(dividerTheme[orientation].lines)),
          styleAdapter(dividerStyle),
        ]}
      />

      <Box
        style={tailwind.style(
          cx(dividerTheme[orientation]?.label[labelPosition]),
        )}
      >
        {label ? (
          <Button themeColor="base" variant="outline" {...buttonProps}>
            {label}
          </Button>
        ) : slot ? (
          slot
        ) : null}
      </Box>
    </Box>
  );
};

export const Divider = createComponent<Partial<DividerProps>>(RNDivider, {
  shouldMemo: true,
});
