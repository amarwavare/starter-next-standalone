import { Theme } from "../types";
// import colors from '@/branding/scss/colors/colors.module.scss';
import colors from '@/styles/dcp.module.scss';

export const RootLightThemeModule: Theme = {
    "--background": colors.pageBackgroundLight,
    "--typography": colors.typographyLight,
    "--container-bg": colors.containerLight,
}

export const RootDarkThemeModule: Theme = {
    "--background": colors.pageBackgroundDark,
    "--typography": colors.typographyDark,
    "--container-bg": colors.containerDark,
}