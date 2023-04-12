import type { ProcurementType } from "./ProcurementType";
import type { ApprovalState } from "./ApprovalState";
import type { ContractFinalSaveStatus } from "./ContractFinalSaveStatus";

export type GetAllContractsInput = {
    /**
    * @description 预算计划Id
    * @type integer | undefined int64
    */
    budgetPlanId?: number | undefined;
    /**
    * @description 获取所有科室的记录
    * @type boolean | undefined
    */
    getAllOrganizationUnits?: boolean | undefined;
    /**
    * @description 创建时间
    * @type array | undefined
    */
    creationTime?: string[] | undefined;
    /**
    * @description 创建人
    * @type string | undefined
    */
    creatorUserName?: string | undefined;
    /**
    * @description 已定稿?
    * @type boolean | undefined
    */
    isActive?: boolean | undefined;
    /**
    * @description 供应公司
    * @type string | undefined
    */
    supplyCompany?: string | undefined;
    /**
    * @description 使用科室id
    * @type integer | undefined int64
    */
    usageOrganizationUnitId?: number | undefined;
    /**
    * @description 合同编号（唯一）
    * @type string | undefined
    */
    code?: string | undefined;
    /**
    * @description 合同名称
    * @type string | undefined
    */
    title?: string | undefined;
    /**
    * @description 合同备注
    * @type string | undefined
    */
    description?: string | undefined;
    expensesType?: ProcurementType | undefined;
    approvalState?: ApprovalState | undefined;
    finalSave?: ContractFinalSaveStatus | undefined;
    hasContractPaysApprovalState?: ApprovalState | undefined;
    /**
    * @description 支付定稿状态, 有需要定稿的
    * @type boolean | undefined
    */
    hasContractPaysUnActive?: boolean | undefined;
    /**
    * @description 确认支付状态，有需要确认的
    * @type boolean | undefined
    */
    hasContractPaysUnPay?: boolean | undefined;
    /**
    * @type string | undefined
    */
    sorting?: string | undefined;
    /**
    * @type integer | undefined int32
    */
    skipCount?: number | undefined;
    /**
    * @type integer | undefined int32
    */
    maxResultCount?: number | undefined;
};
