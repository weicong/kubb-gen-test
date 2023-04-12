import type { Contract } from "./Contract";
import type { ContractCommonItem } from "./ContractCommonItem";
import type { PurchasePackageItem } from "./PurchasePackageItem";
import type { PaymentStatus } from "./PaymentStatus";
import type { ContractPackage } from "./ContractPackage";
import type { ApprovalState } from "./ApprovalState";
import type { User } from "./User";

export type ContractPay = {
    /**
    * @description 合同Id
    * @type integer | undefined int64
    */
    contractId?: number | undefined;
    contract?: Contract | undefined;
    /**
    * @description 非政采项目（非政采情况报告单Id）
    * @type integer | undefined int64
    */
    contractCommonItemId?: number | undefined;
    contractCommonItem?: ContractCommonItem | undefined;
    /**
    * @description 政采项目分包Id
    * @type integer | undefined int64
    */
    purchasePackageItemId?: number | undefined;
    purchasePackageItem?: PurchasePackageItem | undefined;
    /**
    * @description 支付时间
    * @type string | undefined date-time
    */
    payTime?: string | undefined;
    /**
    * @description 支付金额
    * @type number | undefined double
    */
    payMoney?: number | undefined;
    /**
    * @description 备注
    * @type string | undefined
    */
    mark?: string | undefined;
    payState?: PaymentStatus | undefined;
    /**
    * @description 包id
    * @type integer | undefined int64
    */
    contractPackageId?: number | undefined;
    contractPackage?: ContractPackage | undefined;
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
