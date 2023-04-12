import type { PagedResultDtoOfLanguageTextListDto } from "../PagedResultDtoOfLanguageTextListDto";

export type GetLanguageTextsQueryParams = {
    /**
    * @type integer | undefined int32
    */
    maxResultCount?: number | undefined;
    /**
    * @type integer | undefined int32
    */
    skipCount?: number | undefined;
    /**
    * @type string | undefined
    */
    sorting?: string | undefined;
    /**
    * @type string
    */
    sourceName: string;
    /**
    * @type string | undefined
    */
    baseLanguageName?: string | undefined;
    /**
    * @type string
    */
    targetLanguageName: string;
    /**
    * @type string | undefined
    */
    targetValueFilter?: string | undefined;
    /**
    * @type string | undefined
    */
    filterText?: string | undefined;
};

/**
* @description Success
*/
export type GetLanguageTextsResponse = PagedResultDtoOfLanguageTextListDto;
