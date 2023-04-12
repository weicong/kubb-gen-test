import type { UserNotificationState } from "./UserNotificationState";
import type { TenantNotification } from "./TenantNotification";

export type UserNotification = {
    /**
    * @type integer | undefined int32
    */
    tenantId?: number | undefined;
    /**
    * @type integer | undefined int64
    */
    userId?: number | undefined;
    state?: UserNotificationState | undefined;
    notification?: TenantNotification | undefined;
    /**
    * @type string | undefined uuid
    */
    id?: string | undefined;
};
