import React, { forwardRef, useCallback } from "react";
import {
  GestureResponderEvent,
  Platform,
  PressableProps,
  PressableStateCallbackType,
  TextStyle,
} from "react-native";

import { Close } from "../../icons";
import { AnimatedBox, Box, Text, Touchable } from "../../primitives";
import { getTextFontFamily, useTailwind, useTheme } from "../../theme";
import {
  createComponent,
  cx,
  generateBoxShadow,
  RenderPropType,
  styleAdapter,
  useHaptic,
  useOnFocus,
  useOnHover,
  useScaleAnimation,
} from "../../utils";
import { createIcon } from "../create-icon";
import { Icon } from "../icon";

export type TagSize = "sm" | "md" | "lg" | "xl";
export type TagVariant = "solid" | "subtle" | "outline";
export type TagTheme = "base" | "primary";

export interface TagProps extends PressableProps {
  /**
   * The size of the Tag component.
   * @default md
   */
  size: TagSize;
  /**
   * The variant of the Tag component.
   * @default solid
   */
  variant: TagVariant;
  /**
   * The Theme of the Tag component.
   * @default base
   */
  themeColor: TagTheme;
  /**
   * A Prefix Element.
   * If added, the Tag will show a prefix Element before the Tag's text.
   */
  prefix: RenderPropType;
  /**
   * A Suffix Element.
   * If added, the Tag will show a suffix Element after the Tag's text.
   */
  suffix: RenderPropType;
  /**
   * Is Tag Closable/Removable.
   * If yes, the Tag will show a Close Icon after the Tag's text or Suffix.
   */
  closable: boolean;
  /**
   * The Text style of the Tag component.
   * @default {}
   */
  textStyle: TextStyle;
  /**
   * When a view is marked as accessible,
   * it is a good practice to set an accessibilityLabel on the view,
   * so that people who use VoiceOver know what element they have selected.
   * VoiceOver will read this string when a user selects the associated element.
   */
  accesibilityLabel: string;
  /**
   * When set to true, The Tap creates a Touch Feedback
   * Check more -> https://docs.expo.dev/versions/latest/sdk/haptics/
   * @default true
   */
  hapticEnabled: boolean;
}

const RNTag: React.FC<Partial<TagProps>> = forwardRef<
  typeof Touchable,
  Partial<TagProps>
>((props, ref) => {
  const { ts, gc } = useTailwind();
  const tagTheme = useTheme("tag");

  const { onHoverIn, onHoverOut, hovered } = useOnHover();
  const { onFocus, onBlur, focused } = useOnFocus();
  const { handlers, animatedStyle } = useScaleAnimation();
  const hapticSelection = useHaptic();

  const {
    size = "md",
    variant = "solid",
    themeColor = "base",
    closable = false,
    prefix,
    suffix: suffixFromProps,
    style,
    textStyle,
    accesibilityLabel,
    hapticEnabled = true,
    onPress,
    ...otherProps
  } = props;

  const handlePress = useCallback((event: GestureResponderEvent) => {
    onPress && onPress(event);
    hapticEnabled && hapticSelection?.();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* Prefix Slot */
  const _prefix =
    prefix &&
    // @ts-ignore
    (prefix?.type === Icon ? (
      createIcon({
        icon: prefix,
        iconFill: gc(
          cx(
            props.disabled
              ? tagTheme.themeColor[themeColor]?.[variant]?.icon?.disabled
              : tagTheme.themeColor[themeColor]?.[variant]?.icon?.default,
          ),
        ),
        iconStyle: ts(cx(tagTheme.size[size]?.prefix)),
      })
    ) : (
      <Box style={ts(cx(tagTheme.size[size]?.prefix))}>
        {prefix as React.ReactNode}
      </Box>
    ));

  const suffix = suffixFromProps ? (
    suffixFromProps
  ) : closable ? (
    <Icon icon={<Close />} />
  ) : null;
  /* Suffix Slot */
  const _suffix =
    suffix &&
    // @ts-ignore
    (suffix?.type === Icon ? (
      createIcon({
        icon: suffix,
        iconFill: gc(
          cx(
            props.disabled
              ? tagTheme.themeColor[themeColor]?.[variant]?.icon?.disabled
              : tagTheme.themeColor[themeColor]?.[variant]?.icon?.default,
          ),
        ),
        iconStyle: ts(cx(tagTheme.size[size]?.suffix)),
      })
    ) : (
      <Box style={ts(cx(tagTheme.size[size]?.suffix))}>
        {suffix as React.ReactNode}
      </Box>
    ));

  /**
   * Tag Children
   */
  const children =
    typeof otherProps.children === "string" ? (
      <Text
        style={[
          ts(
            cx(
              tagTheme.size[size]?.text,
              tagTheme.themeColor[themeColor]?.[variant]?.text?.default,
              props.disabled
                ? tagTheme.themeColor[themeColor]?.[variant]?.text?.disabled
                : "",
            ),
          ),
          styleAdapter(textStyle),
          getTextFontFamily(tagTheme.size[size]?.text),
        ]}
        adjustsFontSizeToFit
        allowFontScaling={false}
      >
        {props.children as React.ReactNode}
      </Text>
    ) : (
      props.children
    );

  return (
    <AnimatedBox style={animatedStyle}>
      <Touchable
        ref={ref}
        style={(touchState: PressableStateCallbackType) => [
          ts(
            cx(
              tagTheme.base,
              tagTheme.size[size]?.default,
              tagTheme.themeColor[themeColor]?.[variant]?.container?.wrapper,
              props.disabled
                ? tagTheme.themeColor[themeColor]?.[variant]?.container
                    ?.disabled
                : "",
              hovered.value
                ? tagTheme.themeColor[themeColor]?.[variant]?.container?.hover
                : "",
              touchState.pressed
                ? tagTheme.themeColor[themeColor]?.[variant]?.container?.pressed
                : "",
            ),
          ),
          focused.value
            ? Platform.select({
                web: {
                  outline: 0,
                  boxShadow: `${generateBoxShadow(
                    tagTheme.themeColor[themeColor]?.[variant]?.container?.focus
                      ?.offset,
                    gc(
                      cx(
                        tagTheme.themeColor[themeColor]?.[variant]?.container
                          ?.focus?.color,
                      ),
                    ) as string,
                  )}`,
                  borderColor:
                    tagTheme.themeColor[themeColor]?.[variant]?.container?.focus
                      ?.borderColor,
                },
              })
            : {},
          styleAdapter(style, touchState),
        ]}
        {...otherProps}
        // Web Callbacks
        onHoverIn={onHoverIn}
        onHoverOut={onHoverOut}
        onFocus={onFocus}
        onBlur={onBlur}
        // Web Callbacks
        accessible
        accessibilityRole="button"
        accessibilityLabel={accesibilityLabel}
        {...handlers}
        onPress={handlePress}
      >
        <>
          {_prefix}
          {children}
          {_suffix}
        </>
      </Touchable>
    </AnimatedBox>
  );
});

export const Tag = createComponent<Partial<TagProps>>(RNTag, {
  shouldMemo: true,
});
