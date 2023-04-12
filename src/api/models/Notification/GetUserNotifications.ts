import type { UserNotificationState } from "../UserNotificationState";
import type { GetNotificationsOutput } from "../GetNotificationsOutput";

export type GetUserNotificationsQueryParams = {
    state?: UserNotificationState | undefined;
    /**
    * @type string | undefined date-time
    */
    startDate?: string | undefined;
    /**
    * @type string | undefined date-time
    */
    endDate?: string | undefined;
    /**
    * @type integer | undefined int32
    */
    skipCount?: number | undefined;
    /**
    * @type integer | undefined int32
    */
    maxResultCount?: number | undefined;
};

/**
* @description Success
*/
export type GetUserNotificationsResponse = GetNotificationsOutput;
