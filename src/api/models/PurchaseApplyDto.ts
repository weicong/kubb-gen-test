import type { BudgetState } from "./BudgetState";
import type { PurchasePackageItemDto } from "./PurchasePackageItemDto";
import type { ApprovalState } from "./ApprovalState";

export type PurchaseApplyDto = {
    /**
    * @type string | undefined
    */
    typeName?: string | undefined;
    /**
    * @type string | undefined
    */
    subject?: string | undefined;
    /**
    * @description 预算项Id
    * @type integer | undefined int64
    */
    budgetItemId?: number | undefined;
    /**
    * @description 预算项年度Id
    * @type integer | undefined int32
    */
    budgetItemBudgetBudgetPlanId?: number | undefined;
    /**
    * @description 预算项年度
    * @type integer | undefined int32
    */
    budgetItemBudgetBudgetPlanYear?: number | undefined;
    /**
    * @description 预算项名称
    * @type string | undefined
    */
    budgetItemName?: string | undefined;
    /**
    * @description 预算项预算金额
    * @type number | undefined double
    */
    budgetItemTotalAmount?: number | undefined;
    /**
    * @description 预算执行类型Id
    * @type integer | undefined int64
    */
    budgetItemBudgetExecutionModeId?: number | undefined;
    /**
    * @description 预算执行类型名称
    * @type string | undefined
    */
    budgetItemBudgetExecutionModeName?: string | undefined;
    /**
    * @description 预算执行类型Color
    * @type string | undefined
    */
    budgetItemBudgetExecutionModeColor?: string | undefined;
    /**
    * @description 支出科目
    * @type string | undefined
    */
    budgetItemExpenditureCatalogName?: string | undefined;
    /**
    * @description 预算项使用科室Id
    * @type integer | undefined int64
    */
    budgetItemUsingOrganizationUnitId?: number | undefined;
    /**
    * @description 预算项使用科室名称
    * @type string | undefined
    */
    budgetItemUsingOrganizationUnitDisplayName?: string | undefined;
    /**
    * @type integer | undefined int64
    */
    budgetAllocationProcurementItemId?: number | undefined;
    /**
    * @description 采购物品（说明）
    * @type string | undefined
    */
    budgetAllocationProcurementItemName?: string | undefined;
    /**
    * @type number | undefined double
    */
    budgetAllocationProcurementItemTotalPrice?: number | undefined;
    /**
    * @description 政采项目（项目名称）
    * @type string | undefined
    */
    budgetAllocationProcurementItemBudgetAllocationProcurementName?: string | undefined;
    budgetAllocationProcurementItemBudgetAllocationProcurementState?: BudgetState | undefined;
    /**
    * @description 预算计划Id
    * @type integer | undefined int32
    */
    budgetAllocationProcurementItemBudgetAllocationProcurementBudgetAllocationBudgetPlanId?: number | undefined;
    /**
    * @description 预算年度
    * @type string | undefined
    */
    budgetAllocationProcurementItemBudgetAllocationProcurementBudgetAllocationBudgetPlanYear?: string | undefined;
    /**
    * @description 预算年度在预算执行期间
    * @type boolean | undefined
    */
    budgetAllocationProcurementItemBudgetAllocationProcurementBudgetAllocationBudgetPlanIsInExecution?: boolean | undefined;
    /**
    * @description 归口科室Id
    * @type integer | undefined int64
    */
    budgetAllocationProcurementItemOrganizationUnitId?: number | undefined;
    /**
    * @description 归口科室
    * @type string | undefined
    */
    budgetAllocationProcurementItemOrganizationUnitDisplayName?: string | undefined;
    /**
    * @description 使用科室名称
    * @type integer | undefined int64
    */
    usageOrganizationUnitId?: number | undefined;
    /**
    * @description 使用科室名称
    * @type string | undefined
    */
    usageOrganizationUnitDisplayName?: string | undefined;
    /**
    * @description 定稿季度
    * @type integer | undefined int32
    */
    activeInQuarter?: number | undefined;
    /**
    * @description 审批通过季度
    * @type integer | undefined int32
    */
    approvedInQuarter?: number | undefined;
    /**
    * @description 父申请id,也就是归口科室申请id
    * @type integer | undefined int64
    */
    purchaseApplyId?: number | undefined;
    /**
    * @description 申请类型:0归口科室申请，1业务科室申请
    * @type integer | undefined int32
    */
    "type"?: number | undefined;
    /**
    * @description 政采项目分包
    * @type array | undefined
    */
    purchasePackageItems?: PurchasePackageItemDto[] | undefined;
    /**
    * @description 预算总额
    * @type number | undefined double
    */
    totalAmount?: number | undefined;
    /**
    * @description 已使用记录数
    * @type integer | undefined int32
    */
    usingCount?: number | undefined;
    /**
    * @description 已使用金额
    * @type number | undefined double
    */
    usingAmount?: number | undefined;
    /**
    * @description 使用进度(%) = 已使用金额 / 预算金额
    * @type number | undefined double
    */
    usingProgress?: number | undefined;
    /**
    * @description 可用金额 = 预算金额 - 已使用金额
    * @type number | undefined double
    */
    availableAmount?: number | undefined;
    /**
    * @description 已支付金额
    * @type number | undefined double
    */
    paymentAmount?: number | undefined;
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
