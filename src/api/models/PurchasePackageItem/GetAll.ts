import type { ApprovalState } from "../ApprovalState";
import type { PagedResultDtoOfPurchasePackageItemDto } from "../PagedResultDtoOfPurchasePackageItemDto";

export type GetAllQueryParams = {
    /**
    * @description 预算计划id
    * @type integer | undefined int64
    */
    budgetPlanId?: number | undefined;
    /**
    * @type integer | undefined int64
    */
    purchaseApplyId?: number | undefined;
    /**
    * @type integer | undefined int64
    */
    usingOrganizationUnitId?: number | undefined;
    /**
    * @type boolean | undefined
    */
    isActive?: boolean | undefined;
    approvalState?: ApprovalState | undefined;
    /**
    * @type string | undefined
    */
    filter?: string | undefined;
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
export type GetAllResponse = PagedResultDtoOfPurchasePackageItemDto;
