import type { ListResultDtoOfDynamicParameterValueDto } from "../ListResultDtoOfDynamicParameterValueDto";

export type GetAllValuesOfDynamicParameterQueryParams = {
    /**
    * @type string | undefined
    */
    parameterName?: string | undefined;
    /**
    * @type integer | undefined int32
    */
    id?: number | undefined;
};

/**
* @description Success
*/
export type GetAllValuesOfDynamicParameterResponse = ListResultDtoOfDynamicParameterValueDto;
