/**
 * All Credit goes to the developers of the Open Source
 * Showcase Universal Design System
 * for providing hooks for `onFocus`, `OnHover` and `onPress`
 * Check out their Design System https://github.com/showtime-xyz/showtime-frontend
 */

import { useEffect, useMemo, useRef, useState } from "react";
import { LayoutChangeEvent, Platform } from "react-native";
import { useSharedValue } from "react-native-reanimated";
import {
  FocusRingAria,
  useFocusRing as useWebOnlyFocusRing,
} from "@react-aria/focus";

export const useOnFocus = () => {
  const focused = useSharedValue(0);
  // use state on web for now till useAnimatedStyle bug is resolved
  const [state, setFocused] = useState(0);

  const focusHandler = useMemo(() => {
    return {
      onFocus: () => {
        focused.value = 1;
        if (Platform.OS === "web") {
          setFocused(1);
        }
      },
      onBlur: () => {
        focused.value = 0;
        if (Platform.OS === "web") {
          setFocused(0);
        }
      },
      focused: Platform.select({ default: focused, web: { value: state } }),
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);

  return focusHandler;
};

export const useOnHover = () => {
  const hovered = useSharedValue(0);
  // use state on web for now till useAnimatedStyle bug is resolved
  const [state, setHovered] = useState(0);

  const hoverHandler = useMemo(() => {
    return {
      onHoverIn: () => {
        hovered.value = 1;
        if (Platform.OS === "web") {
          setHovered(1);
        }
      },
      onHoverOut: () => {
        hovered.value = 0;
        if (Platform.OS === "web") {
          setHovered(0);
        }
      },
      hovered: Platform.select({ default: hovered, web: { value: state } }),
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);

  return hoverHandler;
};

export const useOnPress = () => {
  const pressed = useSharedValue(0);
  // use state on web for now till useAnimatedStyle bug is resolved
  const [state, setPressed] = useState(0);

  const pressHandler = useMemo(() => {
    return {
      onPressIn: () => {
        pressed.value = 1;
        if (Platform.OS === "web") {
          setPressed(1);
        }
      },
      onPressOut: () => {
        pressed.value = 0;
        if (Platform.OS === "web") {
          setPressed(0);
        }
      },
      pressed: Platform.select({ default: pressed, web: { value: state } }),
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);

  return pressHandler;
};

export function useUpdateEffect(effect: any, dependencies = []) {
  const isInitialMount = useRef(true);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      return effect();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies);
}

export const useLayout = () => {
  const [layout, setLayout] = useState<
    LayoutChangeEvent["nativeEvent"]["layout"] | undefined
  >();
  const onLayout = (e: any) => {
    setLayout(e.nativeEvent.layout);
  };

  return { onLayout, layout };
};

export const useWebFocusRing = () => {
  let useFocusRingHook: () => FocusRingAria;

  if (Platform.OS === "web") {
    // Import the hook only if the platform is web
    useFocusRingHook = useWebOnlyFocusRing;
  } else {
    // If not on web platform, provide a dummy implementation
    useFocusRingHook = () => ({
      isFocusVisible: false,
      isFocused: false,
      focusProps: {},
    });
  }
  return useFocusRingHook();
};
