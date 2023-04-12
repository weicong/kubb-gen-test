import type { ContractCommonItemDto } from "./ContractCommonItemDto";
import type { PurchasePackageItemDto } from "./PurchasePackageItemDto";
import type { PaymentStatus } from "./PaymentStatus";
import type { ApprovalState } from "./ApprovalState";

export type ContractPayDto = {
    /**
    * @type string | undefined
    */
    typeName?: string | undefined;
    /**
    * @type string | undefined
    */
    subject?: string | undefined;
    /**
    * @description 合同Id
    * @type integer | undefined int64
    */
    contractId?: number | undefined;
    /**
    * @description 非政采项目（非政采情况报告单Id）
    * @type integer | undefined int64
    */
    contractCommonItemId?: number | undefined;
    contractCommonItem?: ContractCommonItemDto | undefined;
    /**
    * @description 政采项目分包Id
    * @type integer | undefined int64
    */
    purchasePackageItemId?: number | undefined;
    purchasePackageItem?: PurchasePackageItemDto | undefined;
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
