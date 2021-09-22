import { createContext } from '../utils/createContext';
import React from 'react';
import { useColorScheme } from 'react-native';
import { tw } from './tailwind';

export interface ProviderProps {
  children:
    | boolean
    | React.ReactChild
    | React.ReactFragment
    | React.ReactPortal
    | React.ReactNode;
  // <--TODO--> Add TailwindFN type from Library
  style?: any;
  getColor?: any;
  setColorScheme?: any;
}

interface TailwindContextType {
  style?: any;
  getColor?: any;
  setColorScheme?: any;
}

const [ThemeProvider, useTailwindThemeContext, TailwindThemeContext] =
  createContext<TailwindContextType>({
    name: 'TailwindContext',
    strict: true,
  });

const TailwindThemeProvider: React.FC<ProviderProps> = (props) => {
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
