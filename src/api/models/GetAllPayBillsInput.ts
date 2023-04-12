import type { ApprovalState } from "./ApprovalState";
import type { PaymentStatus } from "./PaymentStatus";

export type GetAllPayBillsInput = {
    /**
    * @description 获取所有科室的记录
    * @type boolean | undefined
    */
    getAllOrganizationUnits?: boolean | undefined;
    /**
    * @description 预算计划Id
    * @type integer | undefined int64
    */
    budgetPlanId?: number | undefined;
    /**
    * @description 申请人科室id
    * @type integer | undefined int64
    */
    organizationUnitId?: number | undefined;
    /**
    * @description 使用科室Id
    * @type integer | undefined int64
    */
    usageOrganizationUnitId?: number | undefined;
    /**
    * @description 申请时间
    * @type array | undefined
    */
    creationTime?: string[] | undefined;
    /**
    * @description 定稿状态
    * @type boolean | undefined
    */
    isActive?: boolean | undefined;
    approvalState?: ApprovalState | undefined;
    payState?: PaymentStatus | undefined;
    /**
    * @description 支出申请类型: 0:差旅 1:培训 2:会议 3:公车 4:出国 5:其他
    * @type string | undefined
    */
    payBillTypeId?: string | undefined;
    /**
    * @description 申请人
    * @type string | undefined
    */
    creatorUserName?: string | undefined;
    /**
    * @description 情况说明
    * @type string | undefined
    */
    description?: string | undefined;
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
