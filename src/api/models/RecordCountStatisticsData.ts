import type { RecordCountStatistic } from "./RecordCountStatistic";

export type RecordCountStatisticsData = {
    /**
    * @description 按审批状态统计
    * @type array | undefined
    */
    statistics?: RecordCountStatistic[] | undefined;
    /**
    * @description 各月记录数统计
    * @type array | undefined
    */
    monthlyStatistics?: RecordCountStatistic[] | undefined;
};
