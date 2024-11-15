import React, { PropsWithChildren, useEffect } from "react";
import { CssBaseline } from "@mui/material";
import { THEMES, getTheme } from "./config";
import { ThemeContextProps, ThemeProviderProps, ThemeType } from "./types";
import { StorageService } from "@/services/storage.service";
import { displayModeStorageKey, displayModeStorageValues } from "./constants";

export const ThemeContext = React.createContext<ThemeContextProps>({
  themeType: getTheme(),
  theme: THEMES[getTheme()],
} as ThemeContextProps);

export const ThemeProvider: React.FC<PropsWithChildren> = ({
  children,
}: ThemeProviderProps) => {
  const [currentTheme, setSelectedTheme] = React.useState<ThemeType>(
    displayModeStorageValues.light
  );

  useEffect(() => {
    setSelectedTheme(getTheme());
  }, []);

  const setCurrentTheme = (theme: ThemeType): void => {
    console.log('Theme = ',theme)
    StorageService.setSession({
      key: displayModeStorageKey,
      value: theme,
    });
    setSelectedTheme(theme);
    return;
  };

  return (
    <ThemeContext.Provider
      value={{
        themeType: currentTheme,
        theme: THEMES[currentTheme],
        setCurrentTheme,
      }}
    >
      <CssBaseline />
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => React.useContext(ThemeContext);
