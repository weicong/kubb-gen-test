import type { PostDto } from "./PostDto";

export type PagedResultDtoOfPostDto = {
    /**
    * @type integer | undefined int32
    */
    totalCount?: number | undefined;
    /**
    * @type array | undefined
    */
    items?: PostDto[] | undefined;
};
