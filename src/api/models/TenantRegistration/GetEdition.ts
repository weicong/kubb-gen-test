import type { EditionSelectDto } from "../EditionSelectDto";

export type GetEditionQueryParams = {
    /**
    * @type integer | undefined int32
    */
    editionId?: number | undefined;
};

/**
* @description Success
*/
export type GetEditionResponse = EditionSelectDto;
