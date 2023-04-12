export type SeniorUserStatistic = {
    /**
    * @description 人员姓名
    * @type string | undefined
    */
    userName?: string | undefined;
    /**
    * @description 级别
    * @type string | undefined
    */
    userPostLevel?: string | undefined;
    /**
    * @description 系数
    * @type number | undefined double
    */
    coefficient?: number | undefined;
    /**
    * @description 平均*系数
    * @type number | undefined double
    */
    awardCalculatedAmount1?: number | undefined;
    /**
    * @description 加权平均*系数
    * @type number | undefined double
    */
    awardCalculatedAmount2?: number | undefined;
    /**
    * @description 取高值
    * @type number | undefined double
    */
    awardCalculatedAmount?: number | undefined;
};
