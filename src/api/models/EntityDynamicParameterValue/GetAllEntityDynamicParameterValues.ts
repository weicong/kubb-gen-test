import type { GetAllEntityDynamicParameterValuesOutput } from "../GetAllEntityDynamicParameterValuesOutput";

export type GetAllEntityDynamicParameterValuesQueryParams = {
    /**
    * @type string
    */
    entityFullName: string;
    /**
    * @type string
    */
    entityId: string;
};

/**
* @description Success
*/
export type GetAllEntityDynamicParameterValuesResponse = GetAllEntityDynamicParameterValuesOutput;
