import { ReactNode } from "react";

export type ThemeType = "dark" | "light";
export type ThemeProviderProps = {
  children?: ReactNode | undefined;
};
export type DisplayModeValueType = {
  light: "light";
  dark: "dark";
};

export interface ThemeContextProps {
  themeType: ThemeType;
  theme: Theme;
  // setCurrentTheme: Dispatch<SetStateAction<ThemeType>>
  setCurrentTheme: (theme: ThemeType) => void;
}

export interface Theme {
  "--background": string;
  "--typography": string;
  "--container-bg": string;
}
