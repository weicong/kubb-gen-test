import type { SeniorUserStatistic } from "./SeniorUserStatistic";
import type { GetOrganizationTypeStatisticsOutput } from "./GetOrganizationTypeStatisticsOutput";

export type GetSeniorUserStatisticsOutput = {
    /**
    * @type array | undefined
    */
    seniorUserStatistics?: SeniorUserStatistic[] | undefined;
    organizationTypeStatistics?: GetOrganizationTypeStatisticsOutput | undefined;
};
