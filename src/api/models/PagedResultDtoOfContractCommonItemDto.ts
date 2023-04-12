import type { ContractCommonItemDto } from "./ContractCommonItemDto";

export type PagedResultDtoOfContractCommonItemDto = {
    /**
    * @type integer | undefined int32
    */
    totalCount?: number | undefined;
    /**
    * @type array | undefined
    */
    items?: ContractCommonItemDto[] | undefined;
};
