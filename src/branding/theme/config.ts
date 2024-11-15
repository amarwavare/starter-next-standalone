import { ThemeType, Theme } from "./types";
import { RootLightThemeModule, RootDarkThemeModule } from "./modules/root";
import { StorageService } from "@/services/storage.service";
import { displayModeStorageKey, displayModeStorageValues } from "./constants";

export const THEMES: Record<ThemeType, Theme> = {
  light: {
    ...RootLightThemeModule,
  },
  dark: {
    ...RootDarkThemeModule,
  },
};

export const getTheme = (): ThemeType => {
  switch (
    StorageService.getSession({
      key: displayModeStorageKey,
    })
  ) {
    case displayModeStorageValues.dark:
      return displayModeStorageValues.dark;
    default:
      return displayModeStorageValues.light;
  }
};
