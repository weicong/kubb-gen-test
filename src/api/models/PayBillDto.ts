import type { PaymentStatus } from "./PaymentStatus";
import type { PayBillDetailDto } from "./PayBillDetailDto";
import type { PayUserDetailDto } from "./PayUserDetailDto";
import type { ApprovalState } from "./ApprovalState";

export type PayBillDto = {
    /**
    * @type string | undefined
    */
    typeName?: string | undefined;
    /**
    * @type string | undefined
    */
    subject?: string | undefined;
    /**
    * @description 申请人科室id
    * @type integer | undefined int64
    */
    organizationUnitId?: number | undefined;
    /**
    * @description 申请人科室
    * @type string | undefined
    */
    organizationUnitDisplayName?: string | undefined;
    /**
    * @description 预算Id
    * @type integer | undefined int64
    */
    budgetPlanId?: number | undefined;
    /**
    * @description 预算年度
    * @type string | undefined
    */
    budgetPlanYear?: string | undefined;
    /**
    * @description 在预算执行期间
    * @type boolean | undefined
    */
    budgetPlanIsInExecution?: boolean | undefined;
    /**
    * @description 支出申请类型:0:差旅 1:培训 2:会议 3:公车 4:出国 5:其他
    * @type string | undefined
    */
    payBillTypeId?: string | undefined;
    /**
    * @type string | undefined
    */
    payBillTypeName?: string | undefined;
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
    /**
    * @type string | undefined
    */
    usageOrganizationUnitDisplayName?: string | undefined;
    /**
    * @description 支出项
    * @type array | undefined
    */
    payBillDetails?: PayBillDetailDto[] | undefined;
    /**
    * @description 参与人员
    * @type array | undefined
    */
    payUserDetails?: PayUserDetailDto[] | undefined;
    /**
    * @description 申请金额
    * @type number | undefined double
    */
    appliedAmount?: number | undefined;
    /**
    * @description 参与人员职务含副科长以上
    * @type boolean | undefined
    */
    hasDeputyChief?: boolean | undefined;
    /**
    * @description 科目 (以逗号分隔)
    * @type string | undefined
    */
    budgetItemExpenditureCatalogNames?: string | undefined;
    /**
    * @description 科目Id (以逗号分隔)
    * @type string | undefined
    */
    fundItemIds?: string | undefined;
    /**
    * @description 描述
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
    /**
    * @description 定稿人（提交人）
    * @type string | undefined
    */
    submitterUserName?: string | undefined;
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
    * @description 申请人科室Id
    * @type integer | undefined int64
    */
    submitterUserOrganizationUnitId?: number | undefined;
    /**
    * @description 申请人科室名称
    * @type string | undefined
    */
    submitterUserOrganizationUnitDisplayName?: string | undefined;
    /**
    * @description 创建人姓名
    * @type string | undefined
    */
    creatorUserName?: string | undefined;
    /**
    * @description 创建人所在科室Id
    * @type integer | undefined int64
    */
    creatorUserOrganizationUnitId?: number | undefined;
    /**
    * @description 创建人所在科室名称
    * @type string | undefined
    */
    creatorUserOrganizationUnitDisplayName?: string | undefined;
    /**
    * @description 修改人姓名
    * @type string | undefined
    */
    lastModifierUserName?: string | undefined;
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
