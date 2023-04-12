import type { BudgetItemInfo } from "./BudgetItemInfo";
import type { BudgetState } from "./BudgetState";
import type { ApprovalState } from "./ApprovalState";

export type PurchasePackageItemDto = {
    /**
    * @type string | undefined
    */
    typeName?: string | undefined;
    /**
    * @type string | undefined
    */
    subject?: string | undefined;
    /**
    * @description 政采项目Id
    * @type integer | undefined int64
    */
    purchaseApplyId?: number | undefined;
    /**
    * @description 政采项目/预算项Id
    * @type integer | undefined int64
    */
    purchaseApplyBudgetItemId?: number | undefined;
    purchaseApplyBudgetItem?: BudgetItemInfo | undefined;
    /**
    * @description 分包编号
    * @type string | undefined
    */
    code?: string | undefined;
    /**
    * @description 组织形式:1集中采购机构采购,2部门集中采购,3分散采购
    * @type integer | undefined int32
    */
    orgForm?: number | undefined;
    /**
    * @description 采购方式:1公开招标,2竞争性谈判,3竞争性磋商,4询价,5单一来源,6协议供货,7邀请招标,8参照协议供货,9其他
    * @type integer | undefined int32
    */
    buyType?: number | undefined;
    /**
    * @description 包名
    * @type string | undefined
    */
    packageName?: string | undefined;
    /**
    * @description 单价
    * @type number | undefined double
    */
    price?: number | undefined;
    /**
    * @description 数量
    * @type number | undefined double
    */
    "number"?: number | undefined;
    /**
    * @description 价格总额
    * @type number | undefined double
    */
    priceTotal?: number | undefined;
    /**
    * @description 拟采购预算金额
    * @type number | undefined double
    */
    budget?: number | undefined;
    /**
    * @description 商品编码（HACK: 存储内容为“是否进口”）
    * @type string | undefined
    */
    goodsCode?: string | undefined;
    /**
    * @description 拟代理机构名称
    * @type string | undefined
    */
    agencyName?: string | undefined;
    /**
    * @description 是否采用招标法
    * @type integer | undefined int32
    */
    tenderState?: number | undefined;
    /**
    * @type string | undefined
    */
    auditCode?: string | undefined;
    /**
    * @description 分包说明
    * @type string | undefined
    */
    purchasePackageInfo?: string | undefined;
    /**
    * @description 合同Id
    * @type integer | undefined int64
    */
    contractId?: number | undefined;
    /**
    * @description 已支付金额
    * @type number | undefined double
    */
    paymentAmount?: number | undefined;
    /**
    * @type string | undefined
    */
    region?: string | undefined;
    /**
    * @description 预算年度
    * @type integer | undefined int32
    */
    purchaseApplyBudgetAllocationProcurementItemBudgetAllocationProcurementBudgetAllocationBudgetPlanYear?: number | undefined;
    /**
    * @description 预算年度是否在执行期间
    * @type boolean | undefined
    */
    purchaseApplyBudgetAllocationProcurementItemBudgetAllocationProcurementBudgetAllocationBudgetPlanIsInExecution?: boolean | undefined;
    /**
    * @description 项目（大包）科目
    * @type string | undefined
    */
    purchaseApplyBudgetAllocationProcurementItemBudgetAllocationProcurementName?: string | undefined;
    purchaseApplyBudgetAllocationProcurementItemBudgetAllocationProcurementState?: BudgetState | undefined;
    /**
    * @description 项目（大包）名称
    * @type string | undefined
    */
    purchaseApplyBudgetAllocationProcurementItemName?: string | undefined;
    /**
    * @description 项目Id
    * @type integer | undefined int64
    */
    purchaseApplyBudgetAllocationProcurementId?: number | undefined;
    /**
    * @description 项目显示名称
    * @type string | undefined
    */
    purchaseApplyBudgetAllocationProcurementDisplayName?: string | undefined;
    /**
    * @description 大包Id
    * @type integer | undefined int64
    */
    purchaseApplyBudgetAllocationProcurementItemId?: number | undefined;
    /**
    * @description 大包显示名称（采购物品名称）
    * @type string | undefined
    */
    purchaseApplyBudgetAllocationProcurementItemDisplayName?: string | undefined;
    /**
    * @description 说明
    * @type string | undefined
    */
    purchaseApplyBudgetAllocationProcurementItemDescription?: string | undefined;
    /**
    * @description 归口科室
    * @type string | undefined
    */
    purchaseApplyBudgetAllocationProcurementItemOrganizationUnitDisplayName?: string | undefined;
    /**
    * @description 使用科室Id
    * @type string | undefined
    */
    purchaseApplyUsageOrganizationUnitId?: string | undefined;
    /**
    * @description 使用科室
    * @type string | undefined
    */
    purchaseApplyUsageOrganizationUnitDisplayName?: string | undefined;
    /**
    * @description 分包类型:0归口科室分包，1业务科室分包
    * @type integer | undefined int32
    */
    "type"?: number | undefined;
    /**
    * @type string | undefined
    */
    endRegion?: string | undefined;
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
