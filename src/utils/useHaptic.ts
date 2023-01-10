import { useCallback, useMemo } from "react";
import * as Haptics from "expo-haptics";

export const hapticOptions = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: true,
};

export const useHaptic = () => {
  const hapticHeavy = useCallback(
    () => Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy),
    [],
  );
  const hapticMedium = useCallback(
    () => Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium),
    [],
  );
  const hapticLight = useCallback(
    () => Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light),
    [],
  );
  const hapticSelection = useCallback(() => Haptics.selectionAsync(), []);
  const hapticHandlers = useMemo(() => {
    return {
      hapticLight,
      hapticMedium,
      hapticHeavy,
      hapticSelection,
    };
  }, [hapticHeavy, hapticLight, hapticMedium, hapticSelection]);

  return hapticHandlers;
};
