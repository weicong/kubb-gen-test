import type { ProcurementType } from "./ProcurementType";
import type { ContractState } from "./ContractState";
import type { OrganizationUnit } from "./OrganizationUnit";
import type { User } from "./User";
import type { ContractCommonItem } from "./ContractCommonItem";
import type { PurchasePackageItem } from "./PurchasePackageItem";
import type { ContractFinalSaveStatus } from "./ContractFinalSaveStatus";
import type { ContractPay } from "./ContractPay";
import type { ContractType } from "./ContractType";
import type { ContractPackage } from "./ContractPackage";
import type { ApprovalState } from "./ApprovalState";

export type Contract = {
    expensesType?: ProcurementType | undefined;
    contractState?: ContractState | undefined;
    /**
    * @description 合同标题
    * @type string | undefined
    */
    title?: string | undefined;
    /**
    * @description 合同编号（唯一）
    * @type string | undefined
    */
    code?: string | undefined;
    /**
    * @description 供应商
    * @type string | undefined
    */
    supplyCompany?: string | undefined;
    /**
    * @description 对方法定代表人
    * @type string | undefined
    */
    legalRepresentative?: string | undefined;
    /**
    * @description 采购方式
    * @type string | undefined
    */
    buyType?: string | undefined;
    /**
    * @description 合同期限
    * @type string | undefined
    */
    timeLimit?: string | undefined;
    /**
    * @description 使用科室id
    * @type integer | undefined int64
    */
    usageOrganizationUnitId?: number | undefined;
    usageOrganizationUnit?: OrganizationUnit | undefined;
    /**
    * @description 经办人Id
    * @type integer | undefined int64
    */
    managementUserId?: number | undefined;
    managementUser?: User | undefined;
    /**
    * @description 非政采项目
    * @type array | undefined
    */
    contractCommonItems?: ContractCommonItem[] | undefined;
    /**
    * @description 政采项目（分包）
    * @type array | undefined
    */
    purchasePackageItems?: PurchasePackageItem[] | undefined;
    /**
    * @description 草拟金额
    * @type number | undefined double
    */
    unMoney?: number | undefined;
    /**
    * @description 送审资料清单
    * @type string | undefined
    */
    approvalNote?: string | undefined;
    /**
    * @description 合同备案金额
    * @type number | undefined double
    */
    finalMoney?: number | undefined;
    finalSave?: ContractFinalSaveStatus | undefined;
    /**
    * @description 合同支付记录
    * @type array | undefined
    */
    contractPays?: ContractPay[] | undefined;
    /**
    * @description 合同类型Id
    * @type integer | undefined int64
    */
    contractTypeId?: number | undefined;
    contractType?: ContractType | undefined;
    /**
    * @description 提交人科室id
    * @type integer | undefined int64
    */
    organizationUnitId?: number | undefined;
    organizationUnit?: OrganizationUnit | undefined;
    /**
    * @description 草拟文件真实名
    * @type string | undefined
    */
    unRealName?: string | undefined;
    /**
    * @description 草拟合同文件uuid
    * @type string | undefined
    */
    unUuidName?: string | undefined;
    /**
    * @description 合同包
    * @type array | undefined
    */
    contractPackages?: ContractPackage[] | undefined;
    /**
    * @description 备案状态  0:未备案 1:备案
    * @type integer | undefined int32
    */
    finalState?: number | undefined;
    /**
    * @description 多支付状态 0：未完成 1：完成
    * @type integer | undefined int32
    */
    paysState?: number | undefined;
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
