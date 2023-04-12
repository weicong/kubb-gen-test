import type { BudgetAllocationProcurement } from "./BudgetAllocationProcurement";
import type { OrganizationUnit } from "./OrganizationUnit";
import type { PurchaseApply } from "./PurchaseApply";
import type { User } from "./User";

export type BudgetAllocationProcurementItem = {
    /**
    * @type integer | undefined int64
    */
    budgetAllocationProcurementId?: number | undefined;
    budgetAllocationProcurement?: BudgetAllocationProcurement | undefined;
    /**
    * @description 科室Id
    * @type integer | undefined int64
    */
    organizationUnitId?: number | undefined;
    organizationUnit?: OrganizationUnit | undefined;
    /**
    * @description 分配季度
    * @type integer | undefined int32
    */
    quarter?: number | undefined;
    /**
    * @description 采购序号
    * @type string | undefined
    */
    orderNumber?: string | undefined;
    /**
    * @description 采购物品名称
    * @type string | undefined
    */
    name?: string | undefined;
    /**
    * @description 单价
    * @type number | undefined double
    */
    unitPrice?: number | undefined;
    /**
    * @description 数量
    * @type number | undefined double
    */
    quantity?: number | undefined;
    /**
    * @description 单位
    * @type string | undefined
    */
    unit?: string | undefined;
    /**
    * @description 总价
    * @type number | undefined double
    */
    totalPrice?: number | undefined;
    /**
    * @description 说明
    * @type string | undefined
    */
    description?: string | undefined;
    /**
    * @description 备注
    * @type string | undefined
    */
    remark?: string | undefined;
    /**
    * @description 政采归口科室情况报告单详情
    * @type array | undefined
    */
    purchaseApplies?: PurchaseApply[] | undefined;
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
