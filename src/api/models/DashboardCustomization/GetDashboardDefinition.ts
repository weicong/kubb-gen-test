import type { DashboardOutput } from "../DashboardOutput";

export type GetDashboardDefinitionQueryParams = {
    /**
    * @type string | undefined
    */
    dashboardName?: string | undefined;
    /**
    * @type string | undefined
    */
    application?: string | undefined;
};

/**
* @description Success
*/
export type GetDashboardDefinitionResponse = DashboardOutput;
