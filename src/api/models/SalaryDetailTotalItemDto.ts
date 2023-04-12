export type SalaryDetailTotalItemDto = {
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
    * @description 排序号
    * @type integer | undefined int32
    */
    organizationUnitOrderNumber?: number | undefined;
    /**
    * @description 业务考核
    * @type number | undefined double
    */
    organizationUnitCoefficient1?: number | undefined;
    /**
    * @description 党建考核
    * @type number | undefined double
    */
    organizationUnitCoefficient2?: number | undefined;
    /**
    * @description 科室类别
    * @type string | undefined
    */
    organizationUnitType?: string | undefined;
    /**
    * @description 目标效益（批次）
    * @type number | undefined double
    */
    organizationUnitTypeCoefficient1?: number | undefined;
    /**
    * @description 人员Id
    * @type integer | undefined int64
    */
    userId?: number | undefined;
    /**
    * @description 人员姓名
    * @type string | undefined
    */
    userName?: string | undefined;
    /**
    * @description 序号
    * @type integer | undefined int32
    */
    userOrderNumber?: number | undefined;
    /**
    * @description 身份证号
    * @type string | undefined
    */
    userIdCardNumber?: string | undefined;
    /**
    * @description 银行卡号
    * @type string | undefined
    */
    userBankCardNumber?: string | undefined;
    /**
    * @description 级别
    * @type string | undefined
    */
    userPostLevel?: string | undefined;
    /**
    * @description 职工类别
    * @type string | undefined
    */
    userPostType?: string | undefined;
    /**
    * @description 基础任务 - 人员系数
    * @type number | undefined double
    */
    userCoefficient1?: number | undefined;
    /**
    * @description 责任津贴 - 人员系数
    * @type number | undefined double
    */
    userCoefficient2?: number | undefined;
    /**
    * @description 通讯费标准
    * @type number | undefined double
    */
    userCoefficient3?: number | undefined;
    /**
    * @description 考勤 - 实际出勤天数
    * @type number | undefined double
    */
    attendanceDays?: number | undefined;
    /**
    * @description 考勤 - 站内出勤
    * @type number | undefined double
    */
    attendanceDays1?: number | undefined;
    /**
    * @description 考勤 - 县区考勤
    * @type number | undefined double
    */
    attendanceDays2?: number | undefined;
    /**
    * @description 考勤 - 市区考勤
    * @type number | undefined double
    */
    attendanceDays3?: number | undefined;
    /**
    * @description 考勤 - 行政天数
    * @type number | undefined double
    */
    attendanceAdministrativeDays?: number | undefined;
    /**
    * @description 考勤 - 扣除天数
    * @type number | undefined double
    */
    attendanceDeductedDays?: number | undefined;
    /**
    * @description 考勤 - 换算天数
    * @type number | undefined double
    */
    attendanceConvertedDays?: number | undefined;
    /**
    * @description 考勤 - 备注
    * @type string | undefined
    */
    attendanceDescription?: string | undefined;
    /**
    * @description 考勤 - 异常信息
    * @type string | undefined
    */
    attendanceException?: string | undefined;
    /**
    * @description 奖金 - 奖金计算值
    * @type number | undefined double
    */
    awardCalculatedAmount?: number | undefined;
    /**
    * @description 奖金 - 病事假扣款
    * @type number | undefined double
    */
    awardDeductAmount?: number | undefined;
    /**
    * @description 奖金 - 补款
    * @type number | undefined double
    */
    awardAddAmount?: number | undefined;
    /**
    * @description 奖金合计
    * @type number | undefined double
    */
    awardAmount?: number | undefined;
    /**
    * @description 奖金 - 备注
    * @type string | undefined
    */
    awardDescription?: string | undefined;
    /**
    * @description 奖金 - 数据导入异常信息
    * @type string | undefined
    */
    awardException?: string | undefined;
    /**
    * @description 个税扣除
    * @type number | undefined double
    */
    taxDue?: number | undefined;
    /**
    * @description 通讯费
    * @type number | undefined double
    */
    communicationExpense?: number | undefined;
    /**
    * @description 合计发放
    * @type number | undefined double
    */
    totalAmount?: number | undefined;
    /**
    * @description 科室上报 - 奖金合计
    * @type number | undefined double
    */
    modifiedAwardAmount?: number | undefined;
    /**
    * @description 科室上报 - 通讯费
    * @type number | undefined double
    */
    modifiedCommunicationExpense?: number | undefined;
    /**
    * @description 科室上报 - 合计发放金额
    * @type number | undefined double
    */
    modifiedTotalAmount?: number | undefined;
    /**
    * @description 报税数
    * @type number | undefined double
    */
    taxFiling?: number | undefined;
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
