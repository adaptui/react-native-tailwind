import { TWType, useTheme } from "./context";

type TailwindFunctions = {
  /**
   * ts is a function that takes any number of string/CSS classnames
   * as arguments and returns a Style object.
   */
  ts: TWType["style"];
  /**
   * `gc` is a function that takes a Tailwind Color Classname
   * and returns the Hexcode.
   */
  gc: TWType["color"];
  sc: TWType["setColorScheme"];
};

export const useTailwind = (): TailwindFunctions => {
  const tailwind = useTheme();
  return {
    ts: tailwind.style,
    gc: tailwind.getColor,
    sc: tailwind.setColorScheme,
  };
};
