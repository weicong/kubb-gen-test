import type { LanguageTextListDto } from "./LanguageTextListDto";

export type PagedResultDtoOfLanguageTextListDto = {
    /**
    * @type integer | undefined int32
    */
    totalCount?: number | undefined;
    /**
    * @type array | undefined
    */
    items?: LanguageTextListDto[] | undefined;
};
