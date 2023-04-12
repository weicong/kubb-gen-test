import type { Dashboard } from "../Dashboard";

export type GetUserDashboardQueryParams = {
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
export type GetUserDashboardResponse = Dashboard;
