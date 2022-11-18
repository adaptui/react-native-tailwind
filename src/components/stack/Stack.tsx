import {
  Children,
  cloneElement,
  forwardRef,
  PropsWithChildren,
  ReactElement,
} from "react";
import { StyleProp, ViewProps } from "react-native";

import { Box, BoxProps } from "../../primitives";
import { useTheme } from "../../theme";
import { cx, styleAdapter } from "../../utils";
import { createComponent } from "../../utils/createComponent";

export interface StackProps extends BoxProps {
  /**
   * Orientation of the stack
   * @default horizontal
   */
  orientation: "horizontal" | "vertical";
  /**
   * Spacing between the components
   * @default 1
   */
  spacing: number;
  /**
   * Expects a divider component
   */
  divider: ReactElement;
  /**
   * Wrapper style of stack
   */
  wrapperStyle: StyleProp<ViewProps>;
}

const RNStack = forwardRef<typeof Box, Partial<PropsWithChildren<StackProps>>>(
  (
    {
      children,
      style,
      spacing = 1,
      divider,
      orientation = "vertical",
      wrapperStyle,
      ...otherProps
    },
    _ref,
  ) => {
    const tailwind = useTheme();

    const arrOfChildren = Children.toArray(children);

    const renderChildren = () => {
      return Children.map(arrOfChildren, (child, index) => {
        const isLast = index === arrOfChildren.length - 1;

        return (
          <Box
            style={[
              tailwind.style(
                "self-stretch",
                cx(
                  orientation === "horizontal" ? "flex flex-row" : "",
                  orientation === "horizontal" ? `mr-${spacing}` : "",
                  orientation === "vertical" ? `mb-${spacing}` : "",
                ),
              ),
              styleAdapter(style),
            ]}
          >
            {cloneElement(child as ReactElement)}
            {divider &&
              !isLast &&
              cloneElement(divider, {
                orientation:
                  orientation === "horizontal" ? "vertical" : "horizontal",
                dividerStyle: tailwind.style(
                  cx(
                    orientation === "horizontal"
                      ? `ml-${spacing}`
                      : `mt-${spacing}`,
                  ),
                ),
              })}
          </Box>
        );
      });
    };

    return (
      <Box
        style={[
          tailwind.style(
            cx(
              "flex items-start",
              orientation === "horizontal" ? "flex-row flex-wrap" : "",
            ),
          ),
          styleAdapter(wrapperStyle),
        ]}
        {...otherProps}
      >
        {renderChildren()}
      </Box>
    );
  },
);

export const Stack = createComponent<Partial<StackProps>>(RNStack, {
  shouldMemo: true,
});
