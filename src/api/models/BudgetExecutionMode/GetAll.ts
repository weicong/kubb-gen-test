import type { PagedResultDtoOfBudgetExecutionModeDto } from "../PagedResultDtoOfBudgetExecutionModeDto";

export type GetAllQueryParams = {
    /**
    * @description 是否为政采
    * @type boolean | undefined
    */
    isGovernmentProcurement?: boolean | undefined;
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
export type GetAllResponse = PagedResultDtoOfBudgetExecutionModeDto;
