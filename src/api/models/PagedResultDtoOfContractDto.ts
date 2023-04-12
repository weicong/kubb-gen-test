import type { ContractDto } from "./ContractDto";

export type PagedResultDtoOfContractDto = {
    /**
    * @type integer | undefined int32
    */
    totalCount?: number | undefined;
    /**
    * @type array | undefined
    */
    items?: ContractDto[] | undefined;
};
