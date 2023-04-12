import type { ProjectDto } from "./ProjectDto";

export type PagedResultDtoOfProjectDto = {
    /**
    * @type integer | undefined int32
    */
    totalCount?: number | undefined;
    /**
    * @type array | undefined
    */
    items?: ProjectDto[] | undefined;
};
