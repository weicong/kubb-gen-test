import type { EntityPropertyChangeDto } from "../EntityPropertyChangeDto";

export type GetEntityPropertyChangesQueryParams = {
    /**
    * @type integer | undefined int64
    */
    entityChangeId?: number | undefined;
};

/**
* @description Success
*/
export type GetEntityPropertyChangesResponse = EntityPropertyChangeDto[];
