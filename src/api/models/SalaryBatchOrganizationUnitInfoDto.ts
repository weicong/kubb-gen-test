import type { ApprovalState } from "./ApprovalState";

export type SalaryBatchOrganizationUnitInfoDto = {
    /**
    * @type string | undefined
    */
    typeName?: string | undefined;
    /**
    * @type string | undefined
    */
    subject?: string | undefined;
    /**
    * @type integer | undefined int32
    */
    tenantId?: number | undefined;
    /**
    * @description 批次Id
    * @type integer | undefined int64
    */
    salaryBatchId?: number | undefined;
    /**
    * @description 科室Id
    * @type integer | undefined int64
    */
    organizationUnitId?: number | undefined;
    /**
    * @description 科室名称
    * @type string | undefined
    */
    organizationUnitDisplayName?: string | undefined;
    /**
    * @description 科室排序号
    * @type integer | undefined int32
    */
    organizationUnitOrderNumber?: number | undefined;
    /**
    * @description 奖励分
    * @type number | undefined double
    */
    coefficient1?: number | undefined;
    /**
    * @description 惩罚分
    * @type number | undefined double
    */
    coefficient2?: number | undefined;
    /**
    * @description 其他补款
    * @type number | undefined double
    */
    coefficient3?: number | undefined;
    /**
    * @description 其他补款N
    * @type number | undefined double
    */
    coefficient3N?: number | undefined;
    /**
    * @description 系数描述
    * @type string | undefined
    */
    coefficientDescription?: string | undefined;
    /**
    * @description 在职人数
    * @type integer | undefined int32
    */
    number1?: number | undefined;
    /**
    * @description 派遣人数
    * @type integer | undefined int32
    */
    number2?: number | undefined;
    /**
    * @description 在职奖金合计
    * @type number | undefined double
    */
    awardAmountSum1?: number | undefined;
    /**
    * @description 派遣奖金合计
    * @type number | undefined double
    */
    awardAmountSum2?: number | undefined;
    /**
    * @description 派遣奖金合计 + 奖励分合计 - 惩罚分合计 + 其他补款
    * @type number | undefined double
    */
    awardAmountSum2TotalAmount?: number | undefined;
    /**
    * @description 奖金合计
    * @type number | undefined double
    */
    awardAmountSum?: number | undefined;
    /**
    * @description 扣税合计
    * @type number | undefined double
    */
    taxDueSum?: number | undefined;
    /**
    * @description 在职通讯费合计
    * @type number | undefined double
    */
    communicationExpenseSum1?: number | undefined;
    /**
    * @description 派遣通讯费合计
    * @type number | undefined double
    */
    communicationExpenseSum2?: number | undefined;
    /**
    * @description 通讯费合计
    * @type number | undefined double
    */
    communicationExpenseSum?: number | undefined;
    /**
    * @description 合计发放（财务计算）
    * @type number | undefined double
    */
    totalAmountSum?: number | undefined;
    /**
    * @description 合计发放（财务计算）+ 奖励分 - 惩罚分 + 其他补款
    * @type number | undefined double
    */
    totalAmountSum2?: number | undefined;
    /**
    * @description 合计发放（科室上报）
    * @type number | undefined double
    */
    modifiedTotalAmountSum?: number | undefined;
    /**
    * @description 合计发放（科室上报）异常信息
    * @type string | undefined
    */
    modifiedTotalAmountException?: string | undefined;
    /**
    * @description 合计
    * @type number | undefined double
    */
    totalAmount?: number | undefined;
    /**
    * @type array | undefined
    */
    children?: SalaryBatchOrganizationUnitInfoDto[] | undefined;
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
