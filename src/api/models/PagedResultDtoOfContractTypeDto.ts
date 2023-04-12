import type { ContractTypeDto } from "./ContractTypeDto";

export type PagedResultDtoOfContractTypeDto = {
    /**
    * @type integer | undefined int32
    */
    totalCount?: number | undefined;
    /**
    * @type array | undefined
    */
    items?: ContractTypeDto[] | undefined;
};
