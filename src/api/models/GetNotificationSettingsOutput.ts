import type { NotificationSubscriptionWithDisplayNameDto } from "./NotificationSubscriptionWithDisplayNameDto";

export type GetNotificationSettingsOutput = {
    /**
    * @type boolean | undefined
    */
    receiveNotifications?: boolean | undefined;
    /**
    * @type array | undefined
    */
    notifications?: NotificationSubscriptionWithDisplayNameDto[] | undefined;
};
