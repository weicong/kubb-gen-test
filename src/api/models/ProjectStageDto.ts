export type ProjectStageDto = {
    /**
    * @type string | undefined date-time
    */
    creationTime?: string | undefined;
    /**
    * @description 项目Id
    * @type integer | undefined int64
    */
    projectId?: number | undefined;
    /**
    * @description 阶段顺序
    * @type integer | undefined int32
    */
    orderNumber?: number | undefined;
    /**
    * @description 阶段名称
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
    * @description 描述
    * @type string | undefined
    */
    description?: string | undefined;
    /**
    * @type integer | undefined int64
    */
    id?: number | undefined;
};
