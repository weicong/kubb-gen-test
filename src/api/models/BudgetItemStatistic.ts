import type { BudgetItemStatisticLevel } from "./BudgetItemStatisticLevel";
import type { ApprovalState } from "./ApprovalState";
import type { BudgetItemType } from "./BudgetItemType";
import type { BudgetItemExecutionQuarter } from "./BudgetItemExecutionQuarter";
import type { PayBillDetailDto } from "./PayBillDetailDto";
import type { ContractCommonItemDto } from "./ContractCommonItemDto";
import type { PurchaseApplyDto } from "./PurchaseApplyDto";

export type BudgetItemStatistic = {
    level?: BudgetItemStatisticLevel | undefined;
    /**
    * @type string | undefined
    */
    key?: string | undefined;
    /**
    * @type string | undefined
    */
    label?: string | undefined;
    /**
    * @description 可展开的子节点
    * @type array | undefined
    */
    children?: BudgetItemStatistic[] | undefined;
    /**
    * @description 不可展开的子节点
    * @type array | undefined
    */
    hiddenChildren?: BudgetItemStatistic[] | undefined;
    /**
    * @description 单价(元)
    * @type number | undefined double
    */
    amount?: number | undefined;
    /**
    * @description 合计数量 = 新增数量 + 更新数量
    * @type number | undefined double
    */
    totalQuantity?: number | undefined;
    /**
    * @description 总价(元)
    * @type number | undefined double
    */
    totalAmount?: number | undefined;
    /**
    * @description 预算项数量
    * @type integer | undefined int32
    */
    itemCount?: number | undefined;
    /**
    * @description 预算项数量，含未启用的
    * @type integer | undefined int32
    */
    allItemCount?: number | undefined;
    /**
    * @description 序号（导出时显示）
    * @type integer | undefined int32
    */
    rowNumber?: number | undefined;
    /**
    * @description 预算编制Id
    * @type integer | undefined int64
    */
    budgetId?: number | undefined;
    /**
    * @description 预算年度Id
    * @type integer | undefined int32
    */
    budgetBudgetPlanId?: number | undefined;
    budgetApprovalState?: ApprovalState | undefined;
    /**
    * @description 预算调整审批单Id
    * @type integer | undefined int64
    */
    budgetAdjustmentId?: number | undefined;
    /**
    * @description 支出科目Id
    * @type integer | undefined int64
    */
    expenditureCatalogId?: number | undefined;
    /**
    * @description 支出科目名称
    * @type string | undefined
    */
    expenditureCatalogName?: string | undefined;
    /**
    * @description 支出科目完整名称
    * @type string | undefined
    */
    expenditureCatalogFullName?: string | undefined;
    /**
    * @description 支出科目是否为叶节点
    * @type boolean | undefined
    */
    expenditureCatalogIsLeaf?: boolean | undefined;
    /**
    * @description 支出科目节点级别
    * @type integer | undefined int32
    */
    expenditureCatalogLevel?: number | undefined;
    expenditureCatalogBudgetItemType?: BudgetItemType | undefined;
    /**
    * @description 支出科目预算项类型名称
    * @type string | undefined
    */
    expenditureCatalogBudgetItemTypeDisplayName?: string | undefined;
    /**
    * @description 支出科目归口科室Id
    * @type integer | undefined int64
    */
    expenditureCatalogOrganizationUnitId?: number | undefined;
    /**
    * @description 支出科目归口科室名称
    * @type string | undefined
    */
    expenditureCatalogOrganizationUnitDisplayName?: string | undefined;
    /**
    * @description 是否为预留
    * @type boolean | undefined
    */
    isReserved?: boolean | undefined;
    /**
    * @description 使用科室Id
    * @type integer | undefined int64
    */
    usingOrganizationUnitId?: number | undefined;
    /**
    * @description 使用科室名称
    * @type string | undefined
    */
    usingOrganizationUnitDisplayName?: string | undefined;
    /**
    * @description 全部科室可用
    * @type boolean | undefined
    */
    isShared?: boolean | undefined;
    /**
    * @description 共享使用科室Id（以逗号分隔）
    * @type string | undefined
    */
    usingOrganizationUnitIds?: string | undefined;
    /**
    * @description 申报科室Id
    * @type integer | undefined int64
    */
    organizationUnitId?: number | undefined;
    /**
    * @description 申报科室名称
    * @type string | undefined
    */
    organizationUnitDisplayName?: string | undefined;
    /**
    * @description 预算执行类型Id
    * @type integer | undefined int64
    */
    budgetExecutionModeId?: number | undefined;
    /**
    * @description 预算执行类型 名称
    * @type string | undefined
    */
    budgetExecutionModeName?: string | undefined;
    /**
    * @type string | undefined
    */
    budgetExecutionModeColor?: string | undefined;
    /**
    * @description 预算执行类型 是否为政采
    * @type boolean | undefined
    */
    budgetExecutionModeIsGovernmentProcurement?: boolean | undefined;
    /**
    * @description 集中采购目录Id
    * @type integer | undefined int64
    */
    centralizedProcurementCatalogId?: number | undefined;
    /**
    * @description 集中采购目录
    * @type string | undefined
    */
    centralizedProcurementCatalogName?: string | undefined;
    /**
    * @description 集中采购目录编码
    * @type string | undefined
    */
    centralizedProcurementCatalogCodeName?: string | undefined;
    /**
    * @description 政府采购品目分类目录Id
    * @type integer | undefined int64
    */
    procurementItemCatalogId?: number | undefined;
    /**
    * @description 政府采购品目分类名称
    * @type string | undefined
    */
    procurementItemCatalogName?: string | undefined;
    /**
    * @description 政府采购品目分类编码
    * @type string | undefined
    */
    procurementItemCatalogCodeName?: string | undefined;
    /**
    * @description 固定资产分类目录Id
    * @type integer | undefined int64
    */
    fixedAssetCatalogId?: number | undefined;
    /**
    * @description 固定资产分类名称
    * @type string | undefined
    */
    fixedAssetCatalogName?: string | undefined;
    /**
    * @description 固定资产分类代码
    * @type string | undefined
    */
    fixedAssetCatalogCodeName?: string | undefined;
    executionQuarter?: BudgetItemExecutionQuarter | undefined;
    /**
    * @description 执行季度显示名称
    * @type string | undefined
    */
    executionQuarterDisplayName?: string | undefined;
    /**
    * @description 项目名称 | （会议）会议名称 | （培训）培训名称 | （出国）团组名称
    * @type string | undefined
    */
    name?: string | undefined;
    /**
    * @description 项目编码
    * @type string | undefined
    */
    codeName?: string | undefined;
    /**
    * @description 项目型号 | （会议）会议类型
    * @type string | undefined
    */
    mode?: string | undefined;
    /**
    * @description 项目内容 | （会议）会议内容 | （培训）培训内容
    * @type string | undefined
    */
    content?: string | undefined;
    /**
    * @description 供货商 | （会议）主办单位 | （培训）主办单位 | （出国）组团单位
    * @type string | undefined
    */
    supplierName?: string | undefined;
    /**
    * @description 供货商地址 | （会议）会议地点 | （培训）培训地点 | （出国）出访国别
    * @type string | undefined
    */
    supplierAddress?: string | undefined;
    /**
    * @description 参与人员
    * @type string | undefined
    */
    participants?: string | undefined;
    /**
    * @description 参与人数
    * @type integer | undefined int32
    */
    participantNumber?: number | undefined;
    /**
    * @description 开始时间
    * @type string | undefined date-time
    */
    startTime?: string | undefined;
    /**
    * @description 结束时间
    * @type string | undefined date-time
    */
    endTime?: string | undefined;
    /**
    * @description 周期（天）
    * @type integer | undefined int32
    */
    periods?: number | undefined;
    /**
    * @description （新增）数量
    * @type number | undefined double
    */
    quantity?: number | undefined;
    /**
    * @description 更新数量
    * @type number | undefined double
    */
    updatedQuantity?: number | undefined;
    /**
    * @description 单位
    * @type string | undefined
    */
    unit?: string | undefined;
    /**
    * @description 中小企业金额
    * @type number | undefined double
    */
    totalAmount1?: number | undefined;
    /**
    * @description 小微企业金额
    * @type number | undefined double
    */
    totalAmount2?: number | undefined;
    /**
    * @description 备注
    * @type string | undefined
    */
    description?: string | undefined;
    /**
    * @description 已禁用
    * @type boolean | undefined
    */
    isDisabled?: boolean | undefined;
    /**
    * @description 状态不可用
    * @type boolean | undefined
    */
    isUnavailable?: boolean | undefined;
    /**
    * @description 归属预算项Id
    * @type integer | undefined int64
    */
    parentId?: number | undefined;
    /**
    * @description 基本支出
    * @type array | undefined
    */
    payBillDetails?: PayBillDetailDto[] | undefined;
    /**
    * @description 基本支出记录数
    * @type integer | undefined int32
    */
    payBillDetailCount?: number | undefined;
    /**
    * @description 基本支出已使用金额
    * @type number | undefined double
    */
    payBillDetailUsingAmount?: number | undefined;
    /**
    * @description 基本支出已报销金额
    * @type number | undefined double
    */
    payBillDetailPaymentAmount?: number | undefined;
    /**
    * @description 非政采项目
    * @type array | undefined
    */
    contractCommonItems?: ContractCommonItemDto[] | undefined;
    /**
    * @description 非政采项目记录数
    * @type integer | undefined int32
    */
    contractCommonItemCount?: number | undefined;
    /**
    * @description 非政采项目已使用金额
    * @type number | undefined double
    */
    contractCommonItemUsingAmount?: number | undefined;
    /**
    * @description 非政采项目已报销金额
    * @type number | undefined double
    */
    contractCommonItemPaymentAmount?: number | undefined;
    /**
    * @description 参照政采项目、政采项目
    * @type array | undefined
    */
    purchaseApplies?: PurchaseApplyDto[] | undefined;
    /**
    * @description 参照政采项目、政采项目记录数
    * @type integer | undefined int32
    */
    purchaseApplyCount?: number | undefined;
    /**
    * @description 参照政采项目、政采项目已使用金额
    * @type number | undefined double
    */
    purchaseApplyUsingAmount?: number | undefined;
    /**
    * @description 参照政采项目、政采项目已报销金额
    * @type number | undefined double
    */
    purchaseApplyPaymentAmount?: number | undefined;
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
    * @description 已报销金额：会计在内控里面输入的已经报销金额
    * @type number | undefined double
    */
    paymentAmount?: number | undefined;
    /**
    * @description 支付进度：已报销金额 / 预算金额
    * @type number | undefined double
    */
    paymentProgress?: number | undefined;
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
