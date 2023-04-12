import type { UserNotificationState } from "../UserNotificationState";

export type DeleteAllUserNotificationsRequest = any | null;

export type DeleteAllUserNotificationsResponse = any | null;

export type DeleteAllUserNotificationsQueryParams = {
    state?: UserNotificationState | undefined;
    /**
    * @type string | undefined date-time
    */
    startDate?: string | undefined;
    /**
    * @type string | undefined date-time
    */
    endDate?: string | undefined;
};
