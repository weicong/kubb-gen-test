import type { ThemeSettingsDto } from "./ThemeSettingsDto";

export type UiCustomizationSettingsDto = {
    baseSettings?: ThemeSettingsDto | undefined;
    /**
    * @type boolean | undefined
    */
    isLeftMenuUsed?: boolean | undefined;
    /**
    * @type boolean | undefined
    */
    isTopMenuUsed?: boolean | undefined;
    /**
    * @type boolean | undefined
    */
    isTabMenuUsed?: boolean | undefined;
    /**
    * @type boolean | undefined
    */
    allowMenuScroll?: boolean | undefined;
};
