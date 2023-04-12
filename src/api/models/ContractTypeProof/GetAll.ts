import type { PagedResultDtoOfContractTypeProofDto } from "../PagedResultDtoOfContractTypeProofDto";

export type GetAllQueryParams = {
    /**
    * @description 合同类型ID
    * @type integer | undefined int64
    */
    contractTypeId?: number | undefined;
    /**
    * @type string | undefined
    */
    sorting?: string | undefined;
    /**
    * @type integer | undefined int32
    */
    skipCount?: number | undefined;
    /**
    * @type integer | undefined int32
    */
    maxResultCount?: number | undefined;
};

/**
* @description Success
*/
export type GetAllResponse = PagedResultDtoOfContractTypeProofDto;
