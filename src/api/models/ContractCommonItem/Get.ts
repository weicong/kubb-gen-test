import type { ContractCommonItemDto } from "../ContractCommonItemDto";

export type GetQueryParams = {
    /**
    * @type integer | undefined int64
    */
    id?: number | undefined;
};

/**
* @description Success
*/
export type GetResponse = ContractCommonItemDto;
