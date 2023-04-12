import type { ThemeLayoutSettingsDto } from "./ThemeLayoutSettingsDto";
import type { ThemeHeaderSettingsDto } from "./ThemeHeaderSettingsDto";
import type { ThemeSubHeaderSettingsDto } from "./ThemeSubHeaderSettingsDto";
import type { ThemeMenuSettingsDto } from "./ThemeMenuSettingsDto";
import type { ThemeFooterSettingsDto } from "./ThemeFooterSettingsDto";

export type ThemeSettingsDto = {
    /**
    * @type string | undefined
    */
    theme?: string | undefined;
    layout?: ThemeLayoutSettingsDto | undefined;
    header?: ThemeHeaderSettingsDto | undefined;
    subHeader?: ThemeSubHeaderSettingsDto | undefined;
    menu?: ThemeMenuSettingsDto | undefined;
    footer?: ThemeFooterSettingsDto | undefined;
};
