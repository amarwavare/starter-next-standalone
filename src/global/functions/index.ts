import { StorageService } from "@/services/storage.service";
import { displayModeStorageKey, displayModeStorageValues as modes } from "@/branding/theme/constants";
import { ThemeType } from "@/branding/theme/types";

export const getTheme = ():ThemeType => {
  const theme = StorageService.getSession({key: displayModeStorageKey});
  console.log('theme', theme);
  
    switch (theme) {
        case modes.light: return modes.light;
        case modes.dark: return modes.dark;
        default: return modes.light;
    }
};

export const toggleTheme = () => {
    const theme = getTheme();
    console.log('toggleTheme', theme);
    switch (theme) {
        case modes.light:
            StorageService.setSession({
                key: displayModeStorageKey,
                value: modes.dark
            })
            break;
        case modes.dark: 
            StorageService.setSession({
                key: displayModeStorageKey,
                value: modes.light
            });
            break
            
    
        default:
            StorageService.setSession({
                key: displayModeStorageKey,
                value: modes.light
            });
            break;
    }
}