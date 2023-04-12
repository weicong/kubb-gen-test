import type { PagedResultDtoOfContractPayDto } from "../PagedResultDtoOfContractPayDto";

export type GetAllQueryParams = {
    /**
    * @description 合同Id
    * @type integer | undefined int64
    */
    contractId?: number | undefined;
};

/**
* @description Success
*/
export type GetAllResponse = PagedResultDtoOfContractPayDto;
