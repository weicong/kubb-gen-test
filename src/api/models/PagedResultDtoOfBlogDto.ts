import type { BlogDto } from "./BlogDto";

export type PagedResultDtoOfBlogDto = {
    /**
    * @type integer | undefined int32
    */
    totalCount?: number | undefined;
    /**
    * @type array | undefined
    */
    items?: BlogDto[] | undefined;
};
