export type CreateTenantInput = {
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
    connectionString?: string | undefined;
    /**
    * @type boolean | undefined
    */
    shouldChangePasswordOnNextLogin?: boolean | undefined;
    /**
    * @type boolean | undefined
    */
    sendActivationEmail?: boolean | undefined;
    /**
    * @type integer | undefined int32
    */
    editionId?: number | undefined;
    /**
    * @type boolean | undefined
    */
    isActive?: boolean | undefined;
    /**
    * @type string | undefined date-time
    */
    subscriptionEndDateUtc?: string | undefined;
    /**
    * @type boolean | undefined
    */
    isInTrialPeriod?: boolean | undefined;
};
