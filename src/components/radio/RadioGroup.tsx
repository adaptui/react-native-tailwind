import React, { forwardRef, useState } from "react";
import { Platform } from "react-native";
import { getFocusableTreeWalker } from "@react-aria/focus";

import { Box } from "../../primitives";
import { useTheme } from "../../theme";
import {
  createComponent,
  createContext,
  cx,
  getValidChildren,
  passProps,
} from "../../utils";

import { RadioGroupState, useRadioGroupState } from "./useRadioGroupState";

export type RadioSizes = "sm" | "md" | "lg";
export type RadioTheme = "base" | "primary" | "danger";

interface RadioGroupContext
  extends Pick<RadioGroupProps, "size" | "themeColor" | "orientation">,
    RadioGroupState {
  setFocusableIndex: React.Dispatch<React.SetStateAction<number>>;
}

const [RadioGroupProvider, useRadioGroupContext] =
  createContext<RadioGroupContext>({
    name: "RadioGroupProvider",
    errorMessage:
      "useRadioGroupContext: `context` is undefined. Seems you forgot to wrap component within the RadioGroupProvider",
  });

export { useRadioGroupContext };

export interface RadioGroupProps {
  /**
   * Radio Sizes
   * @default md
   */
  size: RadioSizes;
  /**
   * Radio Sizes
   * @default base
   */
  themeColor: RadioTheme;
  /**
   * Orientation of Radio Group
   */
  orientation: "vertical" | "horizontal";
  /**
   * Selected Value of Radio Group - (Controlled)
   * (Controlled)
   */
  value: string;
  /**
   * Default Value of Radio Group - (Uncontrolled)
   */
  defaultValue: string;
  /**
   * Radio Group Handler that is called when the value changes
   */
  onChange: (value: string) => void;
  /**
   * Is Radio Group Disabled
   */
  isDisabled: boolean;
  /**
   * Children
   */
  children: React.ReactNode;
}

const RNRadioGroup: React.FC<Partial<RadioGroupProps>> = forwardRef<
  typeof Box,
  Partial<RadioGroupProps>
>((props, ref) => {
  const {
    orientation = "vertical",
    size = "md",
    themeColor = "base",
    value,
    defaultValue,
    isDisabled = false,
    onChange,
    children,
  } = props;

  const radioGroupProps = {
    value,
    defaultValue,
    isDisabled,
    onChange,
  } as RadioGroupProps;

  const tailwind = useTheme();
  const radioGroupTheme = useTheme("radio");

  const [focusableIndex, setFocusableIndex] = useState(0);
  const state = useRadioGroupState(radioGroupProps);

  // @ts-ignore Web Only Function Credits ✨ to React Spectrum `useRadioGroup` hook
  // https://github.com/adobe/react-spectrum/blob/main/packages/%40react-aria/radio/src/useRadioGroup.ts
  let onKeyDown = e => {
    let nextDir;
    switch (e.key) {
      case "ArrowRight":
        // if (direction === "rtl" && orientation !== "vertical") {
        //   nextDir = "prev";
        // } else {
        //   nextDir = "next";
        // }
        nextDir = "next";
        break;
      case "ArrowLeft":
        // if (direction === "rtl" && orientation !== "vertical") {
        //   nextDir = "next";
        // } else {
        //   nextDir = "prev";
        // }
        nextDir = "prev";
        break;
      case "ArrowDown":
        nextDir = "next";
        break;
      case "ArrowUp":
        nextDir = "prev";
        break;
      default:
        return;
    }
    e.preventDefault();
    let walker = getFocusableTreeWalker(e.currentTarget, { from: e.target });
    let nextElem;
    do {
      if (nextDir === "next") {
        nextElem = walker.nextNode();
        if (!nextElem) {
          walker.currentNode = e.currentTarget;
          nextElem = walker.firstChild();
        }
      } else {
        nextElem = walker.previousNode();
        if (!nextElem) {
          walker.currentNode = e.currentTarget;
          nextElem = walker.lastChild();
        }
      }
    } while (nextElem.firstChild.disabled);
    if (nextElem) {
      // Call focus on nextElem if it is not so that keyboard navigation scrolls the radio into view
      nextElem.focus();
      state.setSelectedValue(nextElem.firstChild.value);
    }
  };

  const validChildren = getValidChildren(children);
  return (
    <Box
      style={tailwind.style(cx(radioGroupTheme.group[orientation]?.common))}
      ref={ref}
      // Web Related Props
      accessibilityRole="radiogroup"
      accessibilityOrientation={orientation}
      onKeyDown={Platform.select({
        web: onKeyDown,
        default: undefined,
      })}
      // Web Related Props
    >
      <RadioGroupProvider
        value={{
          ...state,
          size,
          themeColor,
          orientation,
          setFocusableIndex,
        }}
      >
        {validChildren.map((renderElement, index) =>
          passProps(renderElement, {
            index,
            focusable: focusableIndex === index,
          }),
        )}
      </RadioGroupProvider>
    </Box>
  );
});

RNRadioGroup.displayName = "RNRadioGroup";

export const RadioGroup = createComponent<Partial<RadioGroupProps>>(
  RNRadioGroup,
  {
    shouldMemo: true,
  },
);
