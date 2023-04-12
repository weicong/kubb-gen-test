import type { Budget } from "./Budget";
import type { BudgetAdjustment } from "./BudgetAdjustment";
import type { ExpenditureCatalog } from "./ExpenditureCatalog";
import type { OrganizationUnit } from "./OrganizationUnit";
import type { BudgetExecutionMode } from "./BudgetExecutionMode";
import type { StandardCatalog } from "./StandardCatalog";
import type { BudgetItemExecutionQuarter } from "./BudgetItemExecutionQuarter";
import type { BudgetItemGroupType } from "./BudgetItemGroupType";
import type { PayBillDetail } from "./PayBillDetail";
import type { ContractCommonItem } from "./ContractCommonItem";
import type { PurchaseApply } from "./PurchaseApply";
import type { User } from "./User";

export type BudgetItem = {
    /**
    * @description 预算编制Id
    * @type integer | undefined int64
    */
    budgetId?: number | undefined;
    budget?: Budget | undefined;
    /**
    * @description 预算调整审批单Id
    * @type integer | undefined int64
    */
    budgetAdjustmentId?: number | undefined;
    budgetAdjustment?: BudgetAdjustment | undefined;
    /**
    * @description 支出科目Id
    * @type integer | undefined int64
    */
    expenditureCatalogId?: number | undefined;
    expenditureCatalog?: ExpenditureCatalog | undefined;
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
    usingOrganizationUnit?: OrganizationUnit | undefined;
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
    organizationUnit?: OrganizationUnit | undefined;
    /**
    * @description 预算执行类型Id
    * @type integer | undefined int64
    */
    budgetExecutionModeId?: number | undefined;
    budgetExecutionMode?: BudgetExecutionMode | undefined;
    /**
    * @description 集中采购目录Id
    * @type integer | undefined int64
    */
    centralizedProcurementCatalogId?: number | undefined;
    centralizedProcurementCatalog?: StandardCatalog | undefined;
    /**
    * @description 政府采购品目分类目录Id
    * @type integer | undefined int64
    */
    procurementItemCatalogId?: number | undefined;
    procurementItemCatalog?: StandardCatalog | undefined;
    /**
    * @description 固定资产分类目录Id
    * @type integer | undefined int64
    */
    fixedAssetCatalogId?: number | undefined;
    fixedAssetCatalog?: StandardCatalog | undefined;
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
    * @description 总价(元) = 单价 * 合计数量
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
    * @type string | undefined
    */
    extensionData?: string | undefined;
    groupType?: BudgetItemGroupType | undefined;
    /**
    * @description 已禁用
    * @type boolean | undefined
    */
    isDisabled?: boolean | undefined;
    /**
    * @description 归属预算项Id
    * @type integer | undefined int64
    */
    parentId?: number | undefined;
    /**
    * @type array | undefined
    */
    children?: BudgetItem[] | undefined;
    /**
    * @description 基本支出
    * @type array | undefined
    */
    payBillDetails?: PayBillDetail[] | undefined;
    /**
    * @description 非政采项目
    * @type array | undefined
    */
    contractCommonItems?: ContractCommonItem[] | undefined;
    /**
    * @description 参照政采项目、政采项目
    * @type array | undefined
    */
    purchaseApplies?: PurchaseApply[] | undefined;
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
