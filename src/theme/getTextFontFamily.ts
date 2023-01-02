import { Platform, TextStyle } from "react-native";
/**
 * This hook is to switch between font family based on Platform
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
    Platform.OS === "android"
      ? {
          fontFamily: fontFamily ? fontFamilies[fontFamily] : "Inter-Regular",
        }
      : {
          fontFamily: "System",
        };
  return textStyle;
};
