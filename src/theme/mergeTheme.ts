import { defaults, mergeWith } from "lodash";
import { twMerge } from "tailwind-merge";

import { isString, isUndefined } from "../utils";

import type {
  DefaultTheme,
  ExtendableDefaultTheme,
  PartialDefaultTheme,
} from "./index";

export function mergeThemes(themes: PartialDefaultTheme[]) {
  return {
    ...themes.reduce<DefaultTheme>(
      (merged, theme) => defaults(merged, theme),
      {} as DefaultTheme,
    ),

    // In order to resolve n config objects, we combine all of their `extend` properties
    // into arrays instead of objects so they aren't overridden.
    extend: collectExtends(themes),
  };
}

function collectExtends(items: ExtendableDefaultTheme[]) {
  return items.reduce((merged, { extend }) => {
    return mergeWith(merged, extend, (mergedValue, extendValue) => {
      if (isUndefined(mergedValue)) {
        return [extendValue];
      }

      if (Array.isArray(mergedValue)) {
        return [extendValue, ...mergedValue];
      }

      return [extendValue, mergedValue];
    });
  }, {});
}

export function mergeExtensions({
  extend,
  ...theme
}: DefaultTheme & { extend?: PartialDefaultTheme }) {
  return mergeWith(theme, extend, (themeValue, extendValue) => {
    return mergeWith(
      themeValue,
      ...extendValue,
      (merged: unknown, value: unknown) => {
        if (isString(merged) && isString(value)) {
          return twMerge(merged, value);
        }
        return undefined;
      },
    );
  });
}
