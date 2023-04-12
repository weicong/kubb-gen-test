import type { PagedResultDtoOfBlogDto } from "../PagedResultDtoOfBlogDto";

export type GetAllQueryParams = {
    /**
    * @type boolean | undefined
    */
    isActive?: boolean | undefined;
    /**
    * @type string | undefined
    */
    filter?: string | undefined;
    /**
    * @type string | undefined
    */
    sorting?: string | undefined;
    /**
    * @type integer | undefined int32
    */
    skipCount?: number | undefined;
    /**
    * @type integer | undefined int32
    */
    maxResultCount?: number | undefined;
};

/**
* @description Success
*/
export type GetAllResponse = PagedResultDtoOfBlogDto;
