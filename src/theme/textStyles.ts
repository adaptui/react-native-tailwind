import { Platform, TextStyle } from "react-native";
/**
 * This function is to switch between font family based on Platform
 * iOS using System Font there is no need to set is explicitly
 * For Android, we use Inter
 * font-thin - 100;
 * font-extralight - 200;
 * font-light - 300;
 * font-normal - 400;
 * font-medium - 500;
 * font-semibold - 600;
 * font-bold - 700;
 * font-extrabold - 800;
 * font-black - 900;
 */

type FONT_FAMILY_KEY =
  | "font-thin"
  | "font-extralight"
  | "font-light"
  | "font-black"
  | "font-medium"
  | "font-semibold"
  | "font-bold"
  | "font-extrabold";

type FONT_SIZE_KEY =
  | "text-xs"
  | "text-cxs"
  | "text-sm"
  | "text-base"
  | "text-lg"
  | "text-xl"
  | "text-cxl"
  | "text-2xl"
  | "text-3xl"
  | "text-4xl"
  | "text-5xl"
  | "text-6xl"
  | "text-7xl"
  | "text-8xl"
  | "text-9xl";

export type ObjectKeys<T extends object> = keyof T;

export const objectKeys = Object.keys as <Type extends object>(
  value: Type,
) => Array<ObjectKeys<Type>>;

export const getTextFontFamily = (tClassNames: string): TextStyle => {
  const fontFamilies: Record<FONT_FAMILY_KEY, string> = {
    "font-thin": "Inter-Thin",
    "font-extralight": "Inter-Extralight",
    "font-light": "Inter-light",
    "font-black": "Inter-Black",
    "font-medium": "Inter-Medium",
    "font-semibold": "Inter-SemiBold",
    "font-bold": "Inter-Bold",
    "font-extrabold": "Inter-ExtraBold",
  };

  const tailwindClass = tClassNames.split(" ");
  const keys = objectKeys(fontFamilies);
  const fontFamily = keys.find(className => tailwindClass.includes(className));

  const textStyle =
    Platform.OS === "ios"
      ? {
          fontFamily: "System",
        }
      : {
          fontFamily: fontFamily ? fontFamilies[fontFamily] : "Inter-Regular",
        };
  return textStyle;
};

/**
 * This function is to switch between font line height based on font size
 * in Platform Android
 * Mapped values based on the Text Size from Tailwind CSS
 * text-xs - 14,
 * text-cxs - 15,
 * text-sm - 16,
 * text-base - 18,
 * text-lg - 21,
 * text-xl - 23,
 * text-cxl - 25,
 * text-2xl - 28,
 * text-3xl - 34,
 * text-4xl - 41,
 * text-5xl - 55,
 * text-6xl - 69,
 * text-7xl - 83,
 * text-8xl - 110,
 * text-9xl - 147,
 */

export const getTextLineHeight = (tClassNames: string): TextStyle => {
  const lineHeights: Record<FONT_SIZE_KEY, number> = {
    "text-xs": 14,
    "text-cxs": 15,
    "text-sm": 16,
    "text-base": 18,
    "text-lg": 21,
    "text-xl": 23,
    "text-cxl": 25,
    "text-2xl": 28,
    "text-3xl": 34,
    "text-4xl": 41,
    "text-5xl": 55,
    "text-6xl": 69,
    "text-7xl": 83,
    "text-8xl": 110,
    "text-9xl": 147,
  };

  const tailwindClass = tClassNames.split(" ");
  const keys = objectKeys(lineHeights);
  const lineHeight = keys.find(className => tailwindClass.includes(className));
  const textStyle: TextStyle =
    Platform.OS === "ios"
      ? {}
      : {
          lineHeight: lineHeight ? lineHeights[lineHeight] : undefined,
          textAlignVertical: "center",
          includeFontPadding: false,
        };
  return textStyle;
};
