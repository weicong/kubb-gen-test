import type { BudgetAllocationItemDto } from "./BudgetAllocationItemDto";

export type PagedResultDtoOfBudgetAllocationItemDto = {
    /**
    * @type integer | undefined int32
    */
    totalCount?: number | undefined;
    /**
    * @type array | undefined
    */
    items?: BudgetAllocationItemDto[] | undefined;
};
