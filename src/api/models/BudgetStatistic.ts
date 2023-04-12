import type { FundItemType } from "./FundItemType";
import type { SharingMode } from "./SharingMode";

export type BudgetStatistic = {
    /**
    * @type string | undefined
    */
    key?: string | undefined;
    /**
    * @description 科室预算Id
    * @type integer | undefined int64
    */
    budgetAllocationItemOrganizationUnitId?: number | undefined;
    /**
    * @description 预算计划Id
    * @type integer | undefined int64
    */
    budgetPlanId?: number | undefined;
    /**
    * @description 年度
    * @type integer | undefined int32
    */
    year?: number | undefined;
    /**
    * @description 季度
    * @type integer | undefined int32
    */
    quarter?: number | undefined;
    /**
    * @description 采购物品名称（政采项目）
    * @type string | undefined
    */
    name?: string | undefined;
    /**
    * @description 预算金额
    * @type number | undefined double
    */
    budgetAmount?: number | undefined;
    /**
    * @description 执行记录数
    * @type integer | undefined int32
    */
    budgetExecuteItemCount?: number | undefined;
    /**
    * @description 申请金额总和
    * @type number | undefined double
    */
    applyAmountSum?: number | undefined;
    /**
    * @description 使用金额总和
    * @type number | undefined double
    */
    usingAmountSum?: number | undefined;
    /**
    * @description 支付金额总和
    * @type number | undefined double
    */
    paymentAmountSum?: number | undefined;
    /**
    * @description 剩余金额（实际剩余的钱）= 预算金额 - 支付金额总和
    * @type number | undefined double
    */
    balanceAmount?: number | undefined;
    /**
    * @description 可用金额（可再申请使用的钱）= 预算金额 - 使用金额总和
    * @type number | undefined double
    */
    availableAmount?: number | undefined;
    /**
    * @description 使用进度(%) = 使用金额总和 / 预算金额
    * @type number | undefined double
    */
    usingProgress?: number | undefined;
    /**
    * @description 支付进度(%) = 支付金额总和 / 使用金额总和
    * @type number | undefined double
    */
    paymentProgress?: number | undefined;
    /**
    * @description 季度分解
    * @type array | undefined
    */
    children?: BudgetStatistic[] | undefined;
    /**
    * @description 当前季度可用金额（结余）
    * @type number | undefined double
    */
    currentAvailableAmount?: number | undefined;
    /**
    * @description 科目Id
    * @type integer | undefined int64
    */
    fundItemId?: number | undefined;
    /**
    * @description 上级科目Id
    * @type integer | undefined int64
    */
    fundItemParentId?: number | undefined;
    /**
    * @description 排序号
    * @type integer | undefined int32
    */
    fundItemOrderNumber?: number | undefined;
    /**
    * @description 名称
    * @type string | undefined
    */
    fundItemName?: string | undefined;
    /**
    * @description 完整名称
    * @type string | undefined
    */
    fundItemFullName?: string | undefined;
    fundItemType?: FundItemType | undefined;
    /**
    * @description 类别
    * @type integer | undefined int64
    */
    fundAllocationCategoryId?: number | undefined;
    /**
    * @description 支出申请类型（以逗号分隔）
    * @type string | undefined
    */
    expenditureClassificationIds?: string | undefined;
    /**
    * @description 经费所属科室Id
    * @type integer | undefined int64
    */
    organizationUnitId?: number | undefined;
    sharingMode?: SharingMode | undefined;
    /**
    * @description 共享科室（以逗号分隔）
    * @type string | undefined
    */
    sharingOrganizationUnitIds?: string | undefined;
    /**
    * @description 计划季度（政采项目）
    * @type integer | undefined int32
    */
    plannedQuarter?: number | undefined;
};
