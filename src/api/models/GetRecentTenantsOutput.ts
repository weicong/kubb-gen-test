import type { RecentTenant } from "./RecentTenant";

export type GetRecentTenantsOutput = {
    /**
    * @type integer | undefined int32
    */
    recentTenantsDayCount?: number | undefined;
    /**
    * @type integer | undefined int32
    */
    maxRecentTenantsShownCount?: number | undefined;
    /**
    * @type string | undefined date-time
    */
    tenantCreationStartDate?: string | undefined;
    /**
    * @type array | undefined
    */
    recentTenants?: RecentTenant[] | undefined;
};
