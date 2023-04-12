import type { OrganizationUnit } from "./OrganizationUnit";
import type { BudgetPlan } from "./BudgetPlan";
import type { PaymentStatus } from "./PaymentStatus";
import type { PayBillDetail } from "./PayBillDetail";
import type { PayUserDetail } from "./PayUserDetail";
import type { ApprovalState } from "./ApprovalState";
import type { User } from "./User";

export type PayBill = {
    /**
    * @description 申请人科室id
    * @type integer | undefined int64
    */
    organizationUnitId?: number | undefined;
    organizationUnit?: OrganizationUnit | undefined;
    /**
    * @type integer | undefined int64
    */
    budgetPlanId?: number | undefined;
    budgetPlan?: BudgetPlan | undefined;
    /**
    * @description 支出申请类型
    * @type string | undefined
    */
    payBillTypeId?: string | undefined;
    /**
    * @type integer | undefined int32
    */
    vehicleType?: number | undefined;
    /**
    * @type string | undefined date-time
    */
    startTime?: string | undefined;
    /**
    * @type string | undefined date-time
    */
    reportTime?: string | undefined;
    /**
    * @type string | undefined date-time
    */
    endTime?: string | undefined;
    /**
    * @type string | undefined date-time
    */
    backTime?: string | undefined;
    /**
    * @type integer | undefined int32
    */
    delayType?: number | undefined;
    /**
    * @type string | undefined
    */
    delayRemark?: string | undefined;
    payState?: PaymentStatus | undefined;
    /**
    * @type integer | undefined int64
    */
    usageOrganizationUnitId?: number | undefined;
    usageOrganizationUnit?: OrganizationUnit | undefined;
    /**
    * @type array | undefined
    */
    payBillDetails?: PayBillDetail[] | undefined;
    /**
    * @type array | undefined
    */
    payUserDetails?: PayUserDetail[] | undefined;
    /**
    * @description 情况说明
    * @type string | undefined
    */
    description?: string | undefined;
    approvalState?: ApprovalState | undefined;
    /**
    * @description 审批时间
    * @type string | undefined date-time
    */
    approvalTime?: string | undefined;
    /**
    * @description 已定稿（已提交审批）
    * @type boolean | undefined
    */
    isActive?: boolean | undefined;
    submitterUser?: User | undefined;
    /**
    * @description 定稿人Id（提交人Id）
    * @type integer | undefined int64
    */
    submitterUserId?: number | undefined;
    /**
    * @description 定稿时间（提交时间）
    * @type string | undefined date-time
    */
    submissionTime?: string | undefined;
    /**
    * @type integer | undefined int32
    */
    tenantId?: number | undefined;
    /**
    * @type boolean | undefined
    */
    isDeleted?: boolean | undefined;
    deleterUser?: User | undefined;
    /**
    * @type integer | undefined int64
    */
    deleterUserId?: number | undefined;
    /**
    * @type string | undefined date-time
    */
    deletionTime?: string | undefined;
    creatorUser?: User | undefined;
    lastModifierUser?: User | undefined;
    /**
    * @type string | undefined date-time
    */
    lastModificationTime?: string | undefined;
    /**
    * @type integer | undefined int64
    */
    lastModifierUserId?: number | undefined;
    /**
    * @type string | undefined date-time
    */
    creationTime?: string | undefined;
    /**
    * @type integer | undefined int64
    */
    creatorUserId?: number | undefined;
    /**
    * @type integer | undefined int64
    */
    id?: number | undefined;
};
