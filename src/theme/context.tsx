import { createContext } from '../utils/createContext';
import React from 'react';
import { useColorScheme } from 'react-native';
import { tw } from './tailwind';

type TWType = typeof tw;

interface TailwindContextType {
  style: TWType['style'];
  getColor: TWType['color'];
  setColorScheme: TWType['setColorScheme'];
}

const [ThemeProvider, useTailwindThemeContext, TailwindThemeContext] =
  createContext<TailwindContextType>({
    name: 'TailwindContext',
    strict: true,
  });

const TailwindThemeProvider: React.FC<Partial<TailwindContextType>> = (
  props
) => {
  const colorScheme = useColorScheme();
  tw.setColorScheme(colorScheme);

  const { children, ...rest } = props;

  return (
    <ThemeProvider
      value={{
        style: tw.style,
        getColor: tw.color,
        setColorScheme: tw.setColorScheme,
        ...rest,
      }}
    >
      {children}
    </ThemeProvider>
  );
};

export { TailwindThemeProvider, useTailwindThemeContext, TailwindThemeContext };
