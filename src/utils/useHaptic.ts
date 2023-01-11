import { useCallback, useMemo } from "react";
import * as Haptics from "expo-haptics";

type FeedbackType = "light" | "medium" | "heavy" | "selection";

export const useHaptic = (feedbackType: FeedbackType = "selection") => {
  const createHapticHandler = useCallback(
    (type: Haptics.ImpactFeedbackStyle) => {
      return () => Haptics.impactAsync(type);
    },
    [],
  );

  const hapticHandlers = useMemo(
    () => ({
      light: createHapticHandler(Haptics.ImpactFeedbackStyle.Light),
      medium: createHapticHandler(Haptics.ImpactFeedbackStyle.Medium),
      heavy: createHapticHandler(Haptics.ImpactFeedbackStyle.Heavy),
      selection: Haptics.selectionAsync,
    }),
    [createHapticHandler],
  );

  return hapticHandlers[feedbackType];
};
