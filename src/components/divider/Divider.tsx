import { ReactElement } from "react";
import { Box, useTheme } from "@adaptui/react-native-tailwind";

import { createComponent, cx } from "../../utils";
import { Button, ButtonProps } from "../button";

interface DividerProps {
  label?: string;
  orientation?: "horizontal" | "vertical";
  slot?: ReactElement;
  labelPosition: "start" | "center" | "end";
  buttonProps: ButtonProps;
}

const RNDivider = ({
  label,
  orientation = "horizontal",
  slot,
  labelPosition = "start",
  buttonProps,
}: Partial<DividerProps>) => {
  const tailwind = useTheme();
  const dividerTheme = useTheme("divider");
  return (
    <Box
      style={tailwind.style(
        cx(dividerTheme.orientation[orientation]),
        orientation === "vertical" ? "overflow-hidden" : {},
      )}
    >
      <Box style={tailwind.style(cx(dividerTheme.lines[orientation]))} />

      <Box
        style={tailwind.style(
          cx(dividerTheme.label[orientation]?.[labelPosition]),
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

      <Box style={tailwind.style(cx(dividerTheme.lines[orientation]))} />
    </Box>
  );
};

export const Divider = createComponent<Partial<DividerProps>>(RNDivider, {
  shouldMemo: true,
});
