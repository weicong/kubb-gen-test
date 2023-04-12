import type { SubscriptionStartType } from "./SubscriptionStartType";

export type RegisterTenantInput = {
    /**
    * @type string
    */
    tenancyName: string;
    /**
    * @type string
    */
    name: string;
    /**
    * @type string email
    */
    adminEmailAddress: string;
    /**
    * @type string | undefined
    */
    adminPassword?: string | undefined;
    /**
    * @type string | undefined
    */
    captchaResponse?: string | undefined;
    subscriptionStartType?: SubscriptionStartType | undefined;
    /**
    * @type integer | undefined int32
    */
    editionId?: number | undefined;
};
