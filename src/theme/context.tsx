import React from "react";
import { useColorScheme } from "react-native";
import { cloneDeep } from "lodash";

import type { DeepDictionary, DeepPartial } from "../../src/utils/types";

import defaultTheme from "./defaultTheme";
import { mergeExtensions, mergeThemes } from "./mergeTheme";
import { tw } from "./tailwind";

export type DefaultTheme = typeof defaultTheme;
export type PartialDefaultTheme = DeepPartial<DefaultTheme>;
export type ExtendableDefaultTheme = PartialDefaultTheme & {
  extend?: PartialDefaultTheme;
};

interface ThemeContextType {
  style: TWType["style"];
  getColor: TWType["color"];
  setColorScheme: TWType["setColorScheme"];
  theme?: DeepDictionary<DefaultTheme>;
  extend?: ExtendableDefaultTheme;
}

const ThemeContext = React.createContext<ThemeContextType | undefined>(
  undefined,
);

type ThemeKeys = keyof DefaultTheme;
function useTheme(): ThemeContextType;
function useTheme<T extends ThemeKeys>(component?: T): DefaultTheme[T];
function useTheme<T extends ThemeKeys>(
  component?: T,
): ThemeContextType | DefaultTheme[T] {
  const context = React.useContext(ThemeContext);

  if (!context) {
    throw new Error(
      "useTheme: `ThemeContext` is undefined. Seems you forgot to wrap component within the AdaptUIProvider",
    );
  }

  // Introduce a new theme prop while not breaking the existing one
  if (component && context?.theme?.[component]) {
    return context.theme[component];
  }

  return context;
}

type TWType = typeof tw;

const AdaptUIProvider: React.FC<
  Partial<ThemeContextType & { children: React.ReactNode }>
> = props => {
  const colorScheme = useColorScheme();
  tw.setColorScheme(colorScheme);

  const { children, theme = defaultTheme, extend, ...rest } = props;

  let finalTheme = theme;

  if (extend) {
    finalTheme = mergeExtensions(mergeThemes([extend, cloneDeep(theme)]));
  }

  return (
    <ThemeContext.Provider
      value={{
        theme: finalTheme,
        style: tw.style,
        getColor: tw.color,
        setColorScheme: tw.setColorScheme,
        ...rest,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export { AdaptUIProvider, ThemeContext, useTheme };
