export type ProjectDto = {
    /**
    * @type string | undefined date-time
    */
    creationTime?: string | undefined;
    /**
    * @description 项目名称
    * @type string | undefined
    */
    title?: string | undefined;
    /**
    * @description 开始时间
    * @type string | undefined date-time
    */
    startDate?: string | undefined;
    /**
    * @description 结束时间
    * @type string | undefined date-time
    */
    endDate?: string | undefined;
    /**
    * @description 总造价
    * @type number | undefined double
    */
    totalCost?: number | undefined;
    /**
    * @description 负责人
    * @type string | undefined
    */
    supremo?: string | undefined;
    /**
    * @description 描述
    * @type string | undefined
    */
    description?: string | undefined;
    /**
    * @type integer | undefined int64
    */
    id?: number | undefined;
};
