import type { ApplicationLanguageListDto } from "./ApplicationLanguageListDto";

export type GetLanguagesOutput = {
    /**
    * @type string | undefined
    */
    defaultLanguageName?: string | undefined;
    /**
    * @type array | undefined
    */
    items?: ApplicationLanguageListDto[] | undefined;
};
