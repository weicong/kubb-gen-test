import type { NotificationData } from "./NotificationData";
import type { NotificationSeverity } from "./NotificationSeverity";

export type TenantNotification = {
    /**
    * @type integer | undefined int32
    */
    tenantId?: number | undefined;
    /**
    * @type string | undefined
    */
    notificationName?: string | undefined;
    data?: NotificationData | undefined;
    /**
    * @type string | undefined
    */
    entityType?: string | undefined;
    /**
    * @type string | undefined
    */
    entityTypeName?: string | undefined;
    /**
    * @type object | undefined
    */
    entityId?: object | undefined;
    severity?: NotificationSeverity | undefined;
    /**
    * @type string | undefined date-time
    */
    creationTime?: string | undefined;
    /**
    * @type string | undefined uuid
    */
    id?: string | undefined;
};
