import type { UserNotification } from "./UserNotification";

export type GetNotificationsOutput = {
    /**
    * @type integer | undefined int32
    */
    unreadCount?: number | undefined;
    /**
    * @type integer | undefined int32
    */
    totalCount?: number | undefined;
    /**
    * @type array | undefined
    */
    items?: UserNotification[] | undefined;
};
