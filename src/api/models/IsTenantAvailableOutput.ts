import type { TenantAvailabilityState } from "./TenantAvailabilityState";

export type IsTenantAvailableOutput = {
    state?: TenantAvailabilityState | undefined;
    /**
    * @type integer | undefined int32
    */
    tenantId?: number | undefined;
    /**
    * @type string | undefined
    */
    serverRootAddress?: string | undefined;
};
