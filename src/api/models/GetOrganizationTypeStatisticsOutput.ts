import type { OrganizationTypeStatistic } from "./OrganizationTypeStatistic";

export type GetOrganizationTypeStatisticsOutput = {
    /**
    * @type integer | undefined int32
    */
    itemCount?: number | undefined;
    /**
    * @type integer | undefined int32
    */
    totalCount?: number | undefined;
    /**
    * @type number | undefined double
    */
    totalSum?: number | undefined;
    /**
    * @type number | undefined double
    */
    totalAvg?: number | undefined;
    /**
    * @description 平均数
    * @type number | undefined double
    */
    avg?: number | undefined;
    /**
    * @description 加权平均数
    * @type number | undefined double
    */
    weightedAvg?: number | undefined;
    /**
    * @type array | undefined
    */
    items?: OrganizationTypeStatistic[] | undefined;
};
