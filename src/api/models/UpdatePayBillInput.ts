import type { PayBillDetailDto } from "./PayBillDetailDto";
import type { PayUserDetailDto } from "./PayUserDetailDto";

export type UpdatePayBillInput = {
    /**
    * @type integer | undefined int64
    */
    id?: number | undefined;
    /**
    * @description 支出申请类型:0:差旅 1:培训 2:会议 3:公车 4:出国 5:其他
    * @type string | undefined
    */
    payBillTypeId?: string | undefined;
    /**
    * @description 使用科室
    * @type integer | undefined int64
    */
    usageOrganizationUnitId?: number | undefined;
    /**
    * @description 申请人科室id
    * @type integer | undefined int64
    */
    organizationUnitId?: number | undefined;
    /**
    * @description 申请人id
    * @type integer | undefined int64
    */
    creatorUserId?: number | undefined;
    /**
    * @description 情况说明
    * @type string | undefined
    */
    description?: string | undefined;
    /**
    * @description 出行方式 0火车,1飞机 2其他(例如开车)
    * @type integer | undefined int32
    */
    vehicleType?: number | undefined;
    /**
    * @description 差旅的到达日期,内会的开始时间,其他的发生时间
    * @type string | undefined date-time
    */
    startTime?: string | undefined;
    /**
    * @description 差旅的报道日期
    * @type string | undefined date-time
    */
    reportTime?: string | undefined;
    /**
    * @description 结束日期(差旅,内部)
    * @type string | undefined date-time
    */
    endTime?: string | undefined;
    /**
    * @description 返程日期(差旅)
    * @type string | undefined date-time
    */
    backTime?: string | undefined;
    /**
    * @description 是否延期0正常 1提前 2延后
    * @type integer | undefined int32
    */
    delayType?: number | undefined;
    /**
    * @description 延期情况说明
    * @type string | undefined
    */
    delayRemark?: string | undefined;
    /**
    * @description 计划年度
    * @type integer | undefined int64
    */
    budgetPlanId?: number | undefined;
    /**
    * @description 支出项
    * @type array | undefined
    */
    payBillDetails?: PayBillDetailDto[] | undefined;
    /**
    * @description 参与人员
    * @type array | undefined
    */
    payUserDetails?: PayUserDetailDto[] | undefined;
};
