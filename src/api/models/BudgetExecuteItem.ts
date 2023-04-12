import type { BudgetExecuteType } from "./BudgetExecuteType";
import type { ApprovalState } from "./ApprovalState";
import type { BudgetExecuteState } from "./BudgetExecuteState";
import type { FundItemType } from "./FundItemType";
import type { SharingMode } from "./SharingMode";

export type BudgetExecuteItem = {
    /**
    * @type string | undefined
    */
    key?: string | undefined;
    /**
    * @type integer | undefined int64
    */
    entityId?: number | undefined;
    /**
    * @type string | undefined
    */
    entityTypeName?: string | undefined;
    executeType?: BudgetExecuteType | undefined;
    /**
    * @description 支出申请单类型名称 或 采购物品名称（政采项目）
    * @type string | undefined
    */
    name?: string | undefined;
    /**
    * @description 情况说明
    * @type string | undefined
    */
    description?: string | undefined;
    /**
    * @description 经费使用科室
    * @type integer | undefined int64
    */
    usedByOrganizationUnitId?: number | undefined;
    /**
    * @description 时间
    * @type string | undefined date-time
    */
    date?: string | undefined;
    /**
    * @description 年月
    * @type string | undefined
    */
    yearMonthLabel?: string | undefined;
    /**
    * @description 预算年度（所关联的预算计划年度）
    * @type integer | undefined int32
    */
    year?: number | undefined;
    /**
    * @description 季度
    * @type integer | undefined int32
    */
    quarter?: number | undefined;
    /**
    * @description 申请金额
    * @type number | undefined double
    */
    applyAmount?: number | undefined;
    /**
    * @description 合同Id
    * @type integer | undefined int64
    */
    contractId?: number | undefined;
    /**
    * @description 合同草拟金额
    * @type number | undefined double
    */
    draftAmount?: number | undefined;
    /**
    * @description 合同备案金额
    * @type number | undefined double
    */
    approvedAmount?: number | undefined;
    /**
    * @description 支付金额/合同支付金额
    * @type number | undefined double
    */
    paymentAmount?: number | undefined;
    /**
    * @description 使用金额
    * @type number | undefined double
    */
    usingAmount?: number | undefined;
    /**
    * @description 支付进度(%)
    * @type number | undefined double
    */
    paymentProgress?: number | undefined;
    establishmentStage?: ApprovalState | undefined;
    executeState?: BudgetExecuteState | undefined;
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
