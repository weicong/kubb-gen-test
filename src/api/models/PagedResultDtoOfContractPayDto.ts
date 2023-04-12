import type { ContractPayDto } from "./ContractPayDto";

export type PagedResultDtoOfContractPayDto = {
    /**
    * @type integer | undefined int32
    */
    totalCount?: number | undefined;
    /**
    * @type array | undefined
    */
    items?: ContractPayDto[] | undefined;
};
