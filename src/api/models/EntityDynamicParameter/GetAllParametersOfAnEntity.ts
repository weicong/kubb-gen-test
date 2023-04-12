import type { ListResultDtoOfEntityDynamicParameterDto } from "../ListResultDtoOfEntityDynamicParameterDto";

export type GetAllParametersOfAnEntityQueryParams = {
    /**
    * @type string | undefined
    */
    entityFullName?: string | undefined;
};

/**
* @description Success
*/
export type GetAllParametersOfAnEntityResponse = ListResultDtoOfEntityDynamicParameterDto;
