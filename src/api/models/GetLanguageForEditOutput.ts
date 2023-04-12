import type { ApplicationLanguageEditDto } from "./ApplicationLanguageEditDto";
import type { ComboboxItemDto } from "./ComboboxItemDto";

export type GetLanguageForEditOutput = {
    language?: ApplicationLanguageEditDto | undefined;
    /**
    * @type array | undefined
    */
    languageNames?: ComboboxItemDto[] | undefined;
    /**
    * @type array | undefined
    */
    flags?: ComboboxItemDto[] | undefined;
};
