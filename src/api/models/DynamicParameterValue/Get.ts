import type { DynamicParameterValueDto } from "../DynamicParameterValueDto";

export type GetQueryParams = {
    /**
    * @type integer | undefined int32
    */
    id?: number | undefined;
};

/**
* @description Success
*/
export type GetResponse = DynamicParameterValueDto;
