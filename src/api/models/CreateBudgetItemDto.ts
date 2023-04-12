import type { BudgetItemType } from "./BudgetItemType";
import type { BudgetItemExecutionQuarter } from "./BudgetItemExecutionQuarter";

export type CreateBudgetItemDto = {
    /**
    * @description 预算编制Id
    * @type integer | undefined int64
    */
    budgetId?: number | undefined;
    /**
    * @description 预算调整审批单Id
    * @type integer | undefined int64
    */
    budgetAdjustmentId?: number | undefined;
    /**
    * @description 汇总记录Id
    * @type integer | undefined int64
    */
    parentId?: number | undefined;
    /**
    * @description 预算年度Id
    * @type integer | undefined int64
    */
    budgetPlanId?: number | undefined;
    /**
    * @description 支出科目Id
    * @type integer | undefined int64
    */
    expenditureCatalogId?: number | undefined;
    /**
    * @description 申报科室Id
    * @type integer | undefined int64
    */
    organizationUnitId?: number | undefined;
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
    * @description 全部科室可用
    * @type boolean | undefined
    */
    isShared?: boolean | undefined;
    /**
    * @description 共享使用科室Id（以逗号分隔）
    * @type string | undefined
    */
    usingOrganizationUnitIds?: string | undefined;
    "type"?: BudgetItemType | undefined;
    /**
    * @description 预算执行类型Id
    * @type integer | undefined int64
    */
    budgetExecutionModeId?: number | undefined;
    /**
    * @description 集中采购目录Id
    * @type integer | undefined int64
    */
    centralizedProcurementCatalogId?: number | undefined;
    /**
    * @description 政府采购品目分类目录Id
    * @type integer | undefined int64
    */
    procurementItemCatalogId?: number | undefined;
    /**
    * @description 固定资产分类目录Id
    * @type integer | undefined int64
    */
    fixedAssetCatalogId?: number | undefined;
    executionQuarter?: BudgetItemExecutionQuarter | undefined;
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
    * @description 单价(元)
    * @type number | undefined double
    */
    amount?: number | undefined;
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
    * @description 合计数量 = 新增数量 + 更新数量
    * @type number | undefined double
    */
    totalQuantity?: number | undefined;
    /**
    * @description 单位
    * @type string | undefined
    */
    unit?: string | undefined;
    /**
    * @description 总价(元)
    * @type number | undefined double
    */
    totalAmount?: number | undefined;
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
    * @description 修改后总价(元)（汇总时修改）
    * @type number | undefined double
    */
    modifiedAmount?: number | undefined;
    /**
    * @description 修改后总价备注
    * @type string | undefined
    */
    modifiedAmountDescription?: string | undefined;
    /**
    * @description 最终确定后总价(元)（会后或预算下达后修改）
    * @type number | undefined double
    */
    finalAmount?: number | undefined;
    /**
    * @description 最终确定后总价备注
    * @type string | undefined
    */
    finalAmountDescription?: string | undefined;
};
