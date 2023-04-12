export type GetAllProjectsInput = {
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
    * @type string | undefined
    */
    filter?: string | undefined;
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
