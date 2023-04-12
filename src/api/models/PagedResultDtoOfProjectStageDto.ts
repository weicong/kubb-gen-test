import type { ProjectStageDto } from "./ProjectStageDto";

export type PagedResultDtoOfProjectStageDto = {
    /**
    * @type integer | undefined int32
    */
    totalCount?: number | undefined;
    /**
    * @type array | undefined
    */
    items?: ProjectStageDto[] | undefined;
};
