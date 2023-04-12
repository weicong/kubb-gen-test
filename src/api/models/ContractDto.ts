import type { ProcurementType } from "./ProcurementType";
import type { ContractCommonItemDto } from "./ContractCommonItemDto";
import type { PurchasePackageItemDto } from "./PurchasePackageItemDto";
import type { ContractFinalSaveStatus } from "./ContractFinalSaveStatus";
import type { ContractPayDto } from "./ContractPayDto";
import type { ApprovalState } from "./ApprovalState";

export type ContractDto = {
    /**
    * @type string | undefined
    */
    typeName?: string | undefined;
    /**
    * @type string | undefined
    */
    subject?: string | undefined;
    expensesType?: ProcurementType | undefined;
    /**
    * @description 有无合同
    * @type integer | undefined int32
    */
    contractState?: number | undefined;
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
    /**
    * @description 使用科室名称
    * @type string | undefined
    */
    usageOrganizationUnitDisplayName?: string | undefined;
    /**
    * @description 经办人Id
    * @type integer | undefined int64
    */
    managementUserId?: number | undefined;
    /**
    * @description 经办人名
    * @type string | undefined
    */
    managementUserName?: string | undefined;
    /**
    * @description 非政采项目
    * @type array | undefined
    */
    contractCommonItems?: ContractCommonItemDto[] | undefined;
    /**
    * @description 政采项目（分包）
    * @type array | undefined
    */
    purchasePackageItems?: PurchasePackageItemDto[] | undefined;
    /**
    * @description 可进行支付（项目包中有当年预算项）
    * @type boolean | undefined
    */
    canPay?: boolean | undefined;
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
    * @description 备案金额
    * @type number | undefined double
    */
    finalMoney?: number | undefined;
    /**
    * @description 已备案
    * @type boolean | undefined
    */
    isFiled?: boolean | undefined;
    finalSave?: ContractFinalSaveStatus | undefined;
    /**
    * @description 合同支付记录
    * @type array | undefined
    */
    contractPays?: ContractPayDto[] | undefined;
    /**
    * @description 合同支付“未定稿”记录数
    * @type integer | undefined int32
    */
    contractPaysUnActiveCount?: number | undefined;
    /**
    * @description 合同支付“未支付”记录数
    * @type integer | undefined int32
    */
    contractPaysUnPayCount?: number | undefined;
    /**
    * @description 已支付金额
    * @type number | undefined double
    */
    paidAmount?: number | undefined;
    /**
    * @description 未支付金额
    * @type number | undefined double
    */
    notPaidAmount?: number | undefined;
    /**
    * @description 合同支付进度
    * @type number | undefined double
    */
    usageRate?: number | undefined;
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
