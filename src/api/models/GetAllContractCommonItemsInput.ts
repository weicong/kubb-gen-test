import type { ApprovalState } from "./ApprovalState";

export type GetAllContractCommonItemsInput = {
    /**
    * @description 预算计划id
    * @type integer | undefined int64
    */
    budgetPlanId?: number | undefined;
    /**
    * @description 申请人
    * @type string | undefined
    */
    creatorUserName?: string | undefined;
    /**
    * @description 申请内容
    * @type string | undefined
    */
    description?: string | undefined;
    /**
    * @description 申请时间
    * @type array | undefined
    */
    creationTime?: string[] | undefined;
    /**
    * @type boolean | undefined
    */
    isActive?: boolean | undefined;
    approvalState?: ApprovalState | undefined;
    /**
    * @description 预算项Id
    * @type integer | undefined int64
    */
    budgetItemId?: number | undefined;
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
