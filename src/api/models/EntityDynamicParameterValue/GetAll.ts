import type { ListResultDtoOfEntityDynamicParameterValueDto } from "../ListResultDtoOfEntityDynamicParameterValueDto";

export type GetAllQueryParams = {
    /**
    * @type string | undefined
    */
    entityId?: string | undefined;
    /**
    * @type integer | undefined int32
    */
    parameterId?: number | undefined;
};

/**
* @description Success
*/
export type GetAllResponse = ListResultDtoOfEntityDynamicParameterValueDto;
