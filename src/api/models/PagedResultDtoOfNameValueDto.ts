import type { NameValueDto } from "./NameValueDto";

export type PagedResultDtoOfNameValueDto = {
    /**
    * @type integer | undefined int32
    */
    totalCount?: number | undefined;
    /**
    * @type array | undefined
    */
    items?: NameValueDto[] | undefined;
};
