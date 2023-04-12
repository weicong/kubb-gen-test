import type { NotificationSubscriptionDto } from "./NotificationSubscriptionDto";

export type UpdateNotificationSettingsInput = {
    /**
    * @type boolean | undefined
    */
    receiveNotifications?: boolean | undefined;
    /**
    * @type array | undefined
    */
    notifications?: NotificationSubscriptionDto[] | undefined;
};
