import type { PurchaseApply } from "./PurchaseApply";
import type { ContractPackage } from "./ContractPackage";
import type { PurchasePackage } from "./PurchasePackage";
import type { UseState } from "./UseState";
import type { ApprovalState } from "./ApprovalState";
import type { User } from "./User";

export type PurchasePackageItem = {
    /**
    * @description 政采项目Id
    * @type integer | undefined int64
    */
    purchaseApplyId?: number | undefined;
    purchaseApply?: PurchaseApply | undefined;
    /**
    * @description 拟代理机构名称
    * @type string | undefined
    */
    agencyName?: string | undefined;
    /**
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
    * @description 分包类型:0归口科室分包，1业务科室分包
    * @type integer | undefined int32
    */
    "type"?: number | undefined;
    /**
    * @description 拟采购预算金额
    * @type number | undefined double
    */
    budget?: number | undefined;
    /**
    * @description 商品编码
    * @type string | undefined
    */
    goodsCode?: string | undefined;
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
    * @type array | undefined
    */
    contractPackages?: ContractPackage[] | undefined;
    /**
    * @description 政采分包id（现在都为空）
    * @type integer | undefined int64
    */
    purchasePackageId?: number | undefined;
    purchasePackage?: PurchasePackage | undefined;
    useState?: UseState | undefined;
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
