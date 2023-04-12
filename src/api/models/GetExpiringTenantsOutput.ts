import type { ExpiringTenant } from "./ExpiringTenant";

export type GetExpiringTenantsOutput = {
    /**
    * @type array | undefined
    */
    expiringTenants?: ExpiringTenant[] | undefined;
    /**
    * @type integer | undefined int32
    */
    subscriptionEndAlertDayCount?: number | undefined;
    /**
    * @type integer | undefined int32
    */
    maxExpiringTenantsShownCount?: number | undefined;
    /**
    * @type string | undefined date-time
    */
    subscriptionEndDateStart?: string | undefined;
    /**
    * @type string | undefined date-time
    */
    subscriptionEndDateEnd?: string | undefined;
};
