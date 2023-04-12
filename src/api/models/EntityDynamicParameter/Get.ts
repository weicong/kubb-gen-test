import type { EntityDynamicParameterDto } from "../EntityDynamicParameterDto";

export type GetQueryParams = {
    /**
    * @type integer | undefined int32
    */
    id?: number | undefined;
};

/**
* @description Success
*/
export type GetResponse = EntityDynamicParameterDto;
